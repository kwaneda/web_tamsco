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
      from: "TAMS Inc. <supporter@tamsco.kr>",
      to: ["supporter@tamsco.kr"],
      subject: "새로운 문의가 도착했습니다",
      html: `
        <h2>새로운 문의</h2>
        <p>회사명: ${companyName}</p>
        <p>이름: ${name}</p>
        <p>연락처: ${phone}</p>
        <p>이메일: ${email}</p>
        <p>문의내용: ${message}</p>
      `,
    });

    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
