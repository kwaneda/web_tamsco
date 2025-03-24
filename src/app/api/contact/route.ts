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
    const isValidCaptcha = await verifyCaptcha(captchaToken);
    if (!isValidCaptcha) {
      return NextResponse.json({ success: false, error: "Invalid captcha" });
    }

    // Resend 이메일 전송 코드
    const data = await resend.emails.send({
      // ... 기존 코드
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
