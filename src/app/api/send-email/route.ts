import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL || 'supporter@tamsco.kr';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { company, name, email, phone, message } = body;

    // 관리자용 이메일
    await resend.emails.send({
      from: SUPPORT_EMAIL,
      to: SUPPORT_EMAIL,
      subject: `[문의] ${company} - ${name}`,
      html: `
        <h2>새로운 문의가 접수되었습니다</h2>
        <p><strong>회사명:</strong> ${company}</p>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>연락처:</strong> ${phone}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>문의내용:</strong></p>
        <p>${message}</p>
      `,
    });

    // 고객용 자동 응답 이메일
    await resend.emails.send({
      from: SUPPORT_EMAIL,
      to: email,
      subject: `[TAMS] 문의가 접수되었습니다`,
      html: `
        <h2>${name}님, 문의해 주셔서 감사합니다.</h2>
        <p>접수하신 내용은 다음과 같습니다:</p>
        <p><strong>회사명:</strong> ${company}</p>
        <p><strong>문의내용:</strong></p>
        <p>${message}</p>
        <br/>
        <p>영업일 기준 1일 이내에 담당자가 연락드리도록 하겠습니다.</p>
        <p>감사합니다.</p>
        <br/>
        <p>TRINITY ASSET MANAGEMENT SERVICE</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "이메일 전송에 실패했습니다." },
      { status: 500 }
    );
  }
}
