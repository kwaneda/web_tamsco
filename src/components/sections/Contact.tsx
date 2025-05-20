"use client";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    phone: "",
    email: "",
    message: "",
    agreement: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // 1. HandleSubmit 함수 수정
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.agreement) {
      alert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }

    // reCAPTCHA 토큰 확인
  const token = recaptchaRef.current?.getValue();
  if (!token) {
    alert("reCAPTCHA를 체크해주세요.");
    return;
  }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company: formData.company,
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          captchaToken: token,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server error:", errorData);
        throw new Error(errorData.error || "Failed to send message");
      }

      const data = await response.json();
      console.log("Success:", data);
      
      alert("문의가 성공적으로 전송되었습니다.");
      setFormData({
        company: "",
        name: "",
        phone: "",
        email: "",
        message: "",
        agreement: false,
      });
    } catch (error) {
      console.error("Error:", error);
      alert("문의 전송에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCaptchaChange = () => {
    console.log("reCAPTCHA verified");
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 고객센터 */}
        <div className="flex justify-center items-center w-full mb-16">
          <div className="text-center">
            <h2 className="text-[30px] font-bold text-[#333333] relative inline-block pb-[6px]">
              고객센터
              <div className="absolute bottom-0 w-full">
                <div
                  className="absolute w-[1000px] h-[1px] bg-[#003C43]"
                  style={{ left: "50%", transform: "translateX(-50%)" }}
                />
                <div
                  className="absolute w-[200px] h-[5px] bg-[#003C43]"
                  style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: "-2px",
                  }}
                />
              </div>
            </h2>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-20">
          <p className="text-center text-[#333333] mb-8">
            상담 접수시 영업일 기준 1일 이내 연락을 드립니다
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#333333] mb-2">회사명</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg text-black"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-[#333333] mb-2">이름</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg text-black"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-[#333333] mb-2">연락처</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg text-black"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-[#333333] mb-2">이메일</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg text-black"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label className="block text-[#333333] mb-2">문의내용</label>
              <textarea
                className="w-full px-4 py-2 border rounded-lg h-32 text-black"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              ></textarea>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-100 p-4 rounded-lg text-[#333333]">
                개인정보 수집 및 이용 동의 *
                <div className="mt-2">
                  제공하신 개인정보는 회사가 제공하는 개인정보 보호정책에
                  의거하여 안전하게 처리되며, 문의 응대 및 서비스 제공의
                  목적으로 사용됩니다.
                </div>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="agreement"
                  checked={formData.agreement}
                  onChange={(e) =>
                    setFormData({ ...formData, agreement: e.target.checked })
                  }
                  className="w-5 h-5 border-2 border-gray-300 rounded mr-2 cursor-pointer"
                  required
                />
                <label
                  htmlFor="agreement"
                  className="cursor-pointer text-[#333333]"
                >
                  개인정보 수집 및 이용에 동의합니다
                </label>
              </div>
            </div>

            {/* reCAPTCHA 자리 표시 */}
            <div className="w-full flex justify-center mb-6">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                onChange={handleCaptchaChange}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#006086] text-white py-3 rounded-lg hover:bg-[#004d6d] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "전송 중..." : "신청"}
            </button>
          </form>
        </div>

        {/* 오시는길 */}
        <div className="mt-16">
          <div className="flex justify-center items-center w-full mb-8">
            <div className="text-center">
              <h2 className="text-[30px] font-bold text-[#333333] relative inline-block pb-[6px]">
                오시는길
                <div className="absolute bottom-0 w-full">
                  <div
                    className="absolute w-[1000px] h-[1px] bg-[#003C43]"
                    style={{ left: "50%", transform: "translateX(-50%)" }}
                  />
                  <div
                    className="absolute w-[200px] h-[5px] bg-[#003C43]"
                    style={{
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: "-2px",
                    }}
                  />
                </div>
              </h2>
            </div>
          </div>
          <Image
            src="/map.png"
            alt="Map"
            width={1000}
            height={100}
            className="w-full"
          />
          <div className="flex items-center justify-center mt-10">
            <span className="text-red-500 mr-2">📍</span>
            <p className="text-[#333333] text-[20px] font-medium">
              경기도 하남시 미사강변한강로 135 미사강변 스카이폴리스 다동 544호
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
