// app/api/lead-popup/route.ts
// Exit-intent popup submissions → popup_leads table.
// The lead is saved to the database FIRST; notification/confirmation emails
// are best-effort afterwards (the previous version returned an error before
// saving when the email credentials were missing, losing the lead).
import { insertRow } from '@/lib/supabase-rest';
import { escapeHtml, notifyAdmin, sendEmail } from '@/lib/notify';

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

  const fullName = clean(body.fullName ?? body.name, 200);
  const email = clean(body.email, 320);
  if (!fullName || !email || !isValidEmail(email)) {
    return Response.json(
      { success: false, message: 'Name and email are required' },
      { status: 400 }
    );
  }

  const phone = clean(body.phone, 100);
  const service = clean(body.service, 500);
  const budget = clean(body.budget, 200);
  const timePreference = clean(
    body.timePreference ?? body.time_preference,
    200
  );

  const result = await insertRow('popup_leads', {
    name: fullName,
    email,
    phone,
    service,
    budget,
    time_preference: timePreference,
  });

  const emailSent = await notifyAdmin(
    `NEW LEAD: Free Audit Request from ${fullName}`,
    `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1C9FF0;">New Digital Growth Audit Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone ?? '—')}</p>
      <p><strong>Service:</strong> ${escapeHtml(service ?? 'Not specified')}</p>
      <p><strong>Budget:</strong> ${escapeHtml(budget ?? 'Not specified')}</p>
      <p><strong>Preferred Time:</strong> ${escapeHtml(timePreference ?? 'Not specified')}</p>
      <p style="color: #666; font-size: 12px;">Lead received from the website popup. Full details are in the admin dashboard.</p>
    </div>`
  );

  if (result.ok) {
    // Best-effort confirmation email to the lead.
    await sendEmail({
      to: email,
      subject: 'Your Free Digital Growth Audit Request - Confirmed',
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #1C9FF0;">Thank You, ${escapeHtml(fullName)}!</h1>
        <p>Your free digital growth audit request is confirmed. Our team will contact you within 24 hours to schedule your audit.</p>
        <p style="color: #666; font-size: 12px;">This is an automated confirmation. Your information is secure and confidential.</p>
      </div>`,
    });
    return Response.json({
      success: true,
      message: 'Thank you! Our team will reach out soon to schedule your audit.',
    });
  }

  // Database save failed; the lead still counts as captured if the admin
  // notification email reached the owner (pre-database behavior).
  if (!result.configured && emailSent) {
    console.error('Popup lead captured by email only — database not configured');
    return Response.json({
      success: true,
      message: 'Thank you! Our team will reach out soon to schedule your audit.',
    });
  }

  return Response.json(
    {
      success: false,
      message: 'Something went wrong. Please try again or contact us directly.',
    },
    { status: 500 }
  );
}
