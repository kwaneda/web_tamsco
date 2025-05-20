import { Resend } from 'resend';

// Resend 인스턴스 중앙 관리
export const resend = new Resend(process.env.RESEND_API_KEY);

// 이메일 관련 상수
export const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL || 'supporter@tamsco.kr';

// 이메일 템플릿 함수들
export const createInquiryEmailHtml = (companyName: string, name: string, phone: string, email: string, message: string) => `
  <h2>새로운 문의</h2>
  <p>회사명: ${companyName}</p>
  <p>이름: ${name}</p>
  <p>연락처: ${phone}</p>
  <p>이메일: ${email}</p>
  <p>문의내용: ${message}</p>
`;