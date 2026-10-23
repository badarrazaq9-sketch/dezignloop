// app/api/book-session/route.ts
// Strategy-session booking form submissions → book_sessions table.
// The booking is saved to the database FIRST; the notification email is
// best-effort afterwards, so a mail problem can never lose a booking
// (the previous version returned an error before saving when the email
// credentials were missing).
import { insertRow } from '@/lib/supabase-rest';
import { escapeHtml, notifyAdmin } from '@/lib/notify';

function clean(value: unknown, maxLength = 2000): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, maxLength) : null;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { success: false, message: 'Invalid request body' },
      { status: 400 }
    );
  }

  const name = clean(body.name, 200);
  const email = clean(body.email, 320);
  const phone = clean(body.phone, 100);
  const timePreference = clean(
    body.timePreference ?? body.time_preference,
    200
  );
  const service = clean(body.service, 200) || 'Web Design';
  const message = clean(body.message);

  if (!name || !email || !isValidEmail(email) || !phone || !timePreference) {
    return Response.json(
      {
        success: false,
        message: 'Name, email, phone, and time preference are required',
      },
      { status: 400 }
    );
  }

  const result = await insertRow('book_sessions', {
    name,
    email,
    phone,
    service,
    time_preference: timePreference,
    message,
  });

  // Best-effort emails (admin notification + client confirmation).
  const emailSent = await notifyAdmin(
    `New Strategy Session Booking - ${name}`,
    `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1C9FF0;">New Strategy Session Booking</h2>
      <div style="background: #f8f9fa; padding: 20px; border-radius: 10px; margin: 20px 0;">
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        <p><strong>Preferred Time:</strong> ${escapeHtml(timePreference)}</p>
        ${message ? `<p><strong>Message:</strong> ${escapeHtml(message)}</p>` : ''}
      </div>
      <p>Full details are in the admin dashboard.</p>
    </div>`
  );

  if (!result.ok) {
    // Database save failed. If the notification email reached the owner the
    // lead is still captured (the site's pre-database behavior); otherwise
    // fail honestly so the visitor can retry.
    if (result.configured || !emailSent) {
      return Response.json(
        {
          success: false,
          message: 'Something went wrong. Please try again later.',
        },
        { status: 500 }
      );
    }
    console.error('Booking captured by email only — database not configured');
  }

  return Response.json({
    success: true,
    message: 'Session booked successfully. We will call you at your preferred time.',
  });
}
