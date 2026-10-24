// app/api/questionnaire/route.ts
// Receives questionnaire submissions from /questionnaire.
//
// MODE (2026-10-23, Kelley's order): EMAIL-ONLY. Submissions are emailed to
// Kelley (ADMIN_NOTIFY_EMAIL when set, otherwise kelleyjackson004@gmail.com)
// with every answer listed one per line, and are NOT saved to the database.
// The original Supabase save path is preserved below as comments — re-enable
// it when Supabase is ready (see the commented block in POST).
//
// The delivered schema's popup_leads columns are: name, email, phone,
// service, budget, time_preference — the form's free-text answers ride in
// `message` (business details + anything-else) and are folded into the
// service value for the DB row so no answer is ever lost.
// DB save commented out by Kelley's order 2026-10-23 — re-enable when Supabase is ready
// import { insertRow } from '@/lib/supabase-rest';
// import { escapeHtml, notifyAdmin } from '@/lib/notify';
import { sendAdminEmail } from '@/lib/notify';

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

  // --- DB save commented out by Kelley's order 2026-10-23 — re-enable when Supabase is ready ---
  // const result = await insertRow('popup_leads', row);
  // if (!result.configured) {
  //   return Response.json(
  //     {
  //       success: false,
  //       message:
  //         'Submissions are temporarily unavailable. Please email support@dezignloop.com instead.',
  //     },
  //     { status: 503 }
  //   );
  // }
  // if (!result.ok) {
  //   return Response.json(
  //     {
  //       success: false,
  //       message: 'Something went wrong saving your answers. Please try again.',
  //     },
  //     { status: 500 }
  //   );
  // }
  //
  // Legacy post-save HTML notification (was best-effort, after the DB save).
  // Replaced by the plain-text email below; restore it with the DB save.
  // await notifyAdmin(
  //   `New questionnaire lead: ${name}`,
  //   `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  //     <h2 style="color: #1C9FF0;">New Questionnaire Lead</h2>
  //     <p><strong>Name:</strong> ${escapeHtml(name)}</p>
  //     <p><strong>Email:</strong> ${escapeHtml(email)}</p>
  //     <p><strong>Phone:</strong> ${escapeHtml(row.phone ?? '—')}</p>
  //     <p><strong>Service:</strong> ${escapeHtml(serviceValue ?? '—')}</p>
  //     <p><strong>Budget:</strong> ${escapeHtml(row.budget ?? '—')}</p>
  //     <p><strong>Timeline:</strong> ${escapeHtml(row.time_preference ?? '—')}</p>
  //     <p style="color: #666; font-size: 12px;">Submitted via the website questionnaire. Full details are in the admin dashboard.</p>
  //   </div>`
  // );

  // Email-only mode: send every submitted field to Kelley, one per line.
  const business = clean(body.business ?? body.businessName, 500);
  const text = [
    'New questionnaire submission from dezignloop.com',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${row.phone ?? '—'}`,
    `Business: ${business ?? '—'}`,
    `Service needed: ${service ?? '—'}`,
    `Budget: ${row.budget ?? '—'}`,
    `Timeline: ${row.time_preference ?? '—'}`,
    `Notes: ${notes ?? '—'}`,
  ].join('\n');

  const sent = await sendAdminEmail(`New questionnaire lead: ${name}`, text);
  if (!sent) {
    // Never fake a success: if the email cannot leave, the submitter hears so.
    console.error('Questionnaire email failed to send for submitter:', email);
    return Response.json(
      {
        success: false,
        message:
          'Submissions are temporarily unavailable. Please email support@dezignloop.com instead.',
      },
      { status: 503 }
    );
  }

  return Response.json({
    success: true,
    message: 'Thanks! Your answers are in — our team will reach out shortly.',
  });
}
