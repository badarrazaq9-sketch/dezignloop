// lib/notify.ts
// Best-effort email notifications for new website leads.
// Uses EMAIL_USER / EMAIL_PASSWORD (Gmail) when configured; silently
// no-ops when they are not, and never throws — an email problem must
// never lose a lead that was already saved to the database.
import nodemailer from 'nodemailer';

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function sendEmail(options: {
  to: string;
  subject: string;
  html: string;
}): Promise<boolean> {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASSWORD;
  if (!user || !pass) return false;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user, pass },
      tls: { rejectUnauthorized: false },
    });
    await transporter.sendMail({
      from: `"DezignLoop Website" <${user}>`,
      to: options.to,
      subject: options.subject,
      html: options.html,
    });
    return true;
  } catch (err) {
    console.error('Email send failed:', err);
    return false;
  }
}

/** Send a notification email to the site owner (EMAIL_USER inbox). */
export async function notifyAdmin(
  subject: string,
  html: string
): Promise<boolean> {
  const user = process.env.EMAIL_USER;
  if (!user) return false;
  return sendEmail({ to: user, subject, html });
}
