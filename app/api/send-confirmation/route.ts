import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);


export async function POST(req: Request) {
  const { firstName, email } = await req.json();

  if (!firstName || !email) {
    return NextResponse.json({ error: "Missing data" }, { status: 400 });
  }

  const emailHTML = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Request Received – Ideate</title>
  </head>

  <body style="margin:0; padding:0; background:#ffffff; font-family:Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif; color:#2d3748;">

    <!-- Outer Padding -->
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:24px 12px;">
      <tr>
        <td align="center">

          <!-- Container -->
          <table width="600" cellpadding="0" cellspacing="0" style="width:100%; max-width:600px; border:1px solid #e2e8f0; border-radius:16px;">

            <!-- Header -->
            <tr>
              <td style="padding:24px 20px; border-bottom:1px solid #e2e8f0;">
                <h1 style="margin:0; font-size:22px; font-weight:700; color:#667eea;">
                  Ideate
                </h1>
                <p style="margin:4px 0 0; font-size:12px; letter-spacing:1px; text-transform:uppercase; color:#718096;">
                  Digital Agency
                </p>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:24px 20px;">

                <!-- Badge -->
                <div style="display:inline-block; border:1px solid #667eea; color:#667eea; font-size:11px; font-weight:600; padding:6px 14px; border-radius:20px; margin-bottom:18px;">
                  REQUEST RECEIVED
                </div>

                <!-- Greeting -->
                <h2 style="margin:0 0 10px; font-size:20px; font-weight:600;">
                  Hi ${firstName}!,
                </h2>

                <p style="margin:0 0 14px; font-size:15px; line-height:1.65; color:#4a5568;">
                  Thank you for contacting <strong style="color:#667eea;">Ideate Digital Agency</strong>.
                  We’ve successfully received your request and appreciate you reaching out.
                </p>

                <p style="margin:0 0 18px; font-size:15px; line-height:1.65; color:#4a5568;">
                  Our team is reviewing your message and will get back to you shortly.
                  You can expect a response within <strong>24–48 hours</strong>.
                </p>

                <hr style="border:none; border-top:1px solid #e2e8f0; margin:24px 0;">

                <!-- Value Props -->
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:8px 0;">
                      <p style="margin:0; font-size:14px;">
                        <strong style="color:#667eea;">Fast Response</strong><br>
                        <span style="color:#718096;">Clear and timely communication</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;">
                      <p style="margin:0; font-size:14px;">
                        <strong style="color:#667eea;">Tailored Solutions</strong><br>
                        <span style="color:#718096;">Built around your goals</span>
                      </p>
                    </td>
                  </tr>
                </table>

                <!-- CTA -->
                <table align="center" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                  <tr>
                    <td style="border:1px solid #667eea; border-radius:10px;">
                      <a
                        href="https://ideate.com.ng"
                        style="display:inline-block; padding:14px 28px; font-size:14px; font-weight:600; color:#667eea; text-decoration:none;"
                      >
                        Visit Our Website →
                      </a>
                    </td>
                  </tr>
                </table>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:20px; border-top:1px solid #e2e8f0; text-align:center;">
                <p style="margin:0 0 8px; font-size:12px; color:#718096;">
                  Follow us
                </p>

                <p style="margin:0 0 14px; font-size:12px;">
                  <a href="https://x.com/ideate_ng" style="color:#667eea; text-decoration:none; margin:0 6px;">X</a> ·
                  <a href="https://linkedin.com/company/ideate-digital-agency" style="color:#667eea; text-decoration:none; margin:0 6px;">LinkedIn</a> ·
                  <a href="https://tiktok.com/@ideate_ng" style="color:#667eea; text-decoration:none; margin:0 6px;">TikTok</a>
                </p>

                <p style="margin:0; font-size:11px; color:#a0aec0; line-height:1.6;">
                  © 2026 Ideate Digital Agency.<br>
                  This email was sent because you submitted a form on our website.
                </p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
  </html>

`

  try {
    await resend.emails.send({
      from: "Ideate Digital Agency <no-reply@ideate.com.ng>",
      to: email,
      subject: "Welcome to Ideate! ✨ Your Request Has Been Received",
      html: emailHTML,
      text: `Hi ${firstName}! 👋

      Thank you for reaching out to Ideate Digital Agency. We've successfully received your request and appreciate your interest in working with us.

      Our team is currently reviewing your submission and will get back to you within 24–48 hours with next steps.

      ⚡ Fast Response - Clear & timely communication
      🎨 Tailored Solutions - Built around your vision

      Visit our portfolio: https://ideate.com.ng

      © 2026 Ideate Digital Agency · All rights reserved
      This email was sent because you submitted a request on our website.`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
