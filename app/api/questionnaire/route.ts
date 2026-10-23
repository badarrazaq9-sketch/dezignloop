// app/api/questionnaire/route.ts
// Receives questionnaire submissions from /questionnaire and saves them to
// the popup_leads table (the delivered schema has no separate questionnaire
// table). The schema's popup_leads columns are: name, email, phone, service,
// budget, time_preference — the form's free-text "anything else" answer is
// folded into the service value so no answer is ever lost.
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

  const name = clean(body.name ?? body.fullName, 200);
  const email = clean(body.email, 320);
  if (!name || !email || !isValidEmail(email)) {
    return Response.json(
      {
        success: false,
        message: 'Please provide your name and a valid email address.',
      },
      { status: 400 }
    );
  }

  const service = clean(body.service, 500);
  const notes = clean(body.message ?? body.notes);
  const serviceValue = notes
    ? [service, `Notes: ${notes}`].filter(Boolean).join(' — ')
    : service;

  const row = {
    name,
    email,
    phone: clean(body.phone, 100),
    service: serviceValue,
    budget: clean(body.budget, 200),
    time_preference: clean(body.time_preference ?? body.timePreference, 200),
  };

  const result = await insertRow('popup_leads', row);
  if (!result.configured) {
    return Response.json(
      {
        success: false,
        message:
          'Submissions are temporarily unavailable. Please email support@dezignloop.com instead.',
      },
      { status: 503 }
    );
  }
  if (!result.ok) {
    return Response.json(
      {
        success: false,
        message: 'Something went wrong saving your answers. Please try again.',
      },
      { status: 500 }
    );
  }

  // Best-effort notification; a mail problem never fails the submission.
  await notifyAdmin(
    `New questionnaire lead: ${name}`,
    `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #1C9FF0;">New Questionnaire Lead</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(row.phone ?? '—')}</p>
      <p><strong>Service:</strong> ${escapeHtml(serviceValue ?? '—')}</p>
      <p><strong>Budget:</strong> ${escapeHtml(row.budget ?? '—')}</p>
      <p><strong>Timeline:</strong> ${escapeHtml(row.time_preference ?? '—')}</p>
      <p style="color: #666; font-size: 12px;">Submitted via the website questionnaire. Full details are in the admin dashboard.</p>
    </div>`
  );

  return Response.json({
    success: true,
    message: 'Thanks! Your answers are in — our team will reach out shortly.',
  });
}
