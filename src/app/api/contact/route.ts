import { createInquiryEmailHtml } from '@/lib/resend';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL || 'supporter@tamsco.kr';

async function verifyCaptcha(token: string) {
  const response = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    }
  );

  const data = await response.json();
  return data.success;
}

export async function POST(req: Request) {
  try {
    const { companyName, name, phone, email, message, captchaToken } =
      await req.json();

    // reCAPTCHA 검증
    const captchaValid = await verifyCaptcha(captchaToken);
    if (!captchaValid) {
      return new Response(JSON.stringify({ error: "Invalid captcha" }), {
        status: 400,
      });
    }

    const data = await resend.emails.send({
      from: `TAMS Inc. <${SUPPORT_EMAIL}>`,
      to: [SUPPORT_EMAIL],
      subject: "새로운 문의가 도착했습니다",
      html: createInquiryEmailHtml(companyName, name, phone, email, message),
    });

    return new Response(JSON.stringify(data));
  } catch (error) {
    console.error("Email sending failed:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
