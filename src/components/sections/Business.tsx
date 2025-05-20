import React from "react";
import Image from "next/image";

const Business = () => {
  const mainServices = [
    { icon: "/icons/b1.png", title: "기업정비" },
    { icon: "/icons/b2.png", title: "가업승계" },
    { icon: "/icons/b3.png", title: "부동산" },
    { icon: "/icons/b4.png", title: "상속증여" },
    { icon: "/icons/b5.png", title: "절세플랜" },
    { icon: "/icons/b6.png", title: "투자유치" },
  ];

  return (
    <section id="business" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 사업소개 헤딩 */}
        <div className="flex justify-center items-center w-full mb-16">
          <div className="text-center">
            <h2 className="text-[30px] font-bold text-[#333333] relative inline-block pb-[6px]">
              사업소개
              <div className="absolute bottom-0 w-full">
                {/* 얇은 긴 라인 */}
                <div
                  className="absolute w-[1000px] h-[1px] bg-[#003C43]"
                  style={{ left: "50%", transform: "translateX(-50%)" }}
                />
                {/* 두꺼운 짧은 라인 */}
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

        <div className="text-center mb-12">
          <p className="text-lg text-[#333333] mb-4">
            경영 자문은 기업의 강점과 약점을 파악하여 효과적인 비즈니스 모델을
            제안하고, 문제를 해결하기 위한 최적의 솔루션을 찾아내고 기업 발전을
            도와줍니다.
          </p>
          <p className="text-lg text-[#333333]">
            또한 자산가를 위한 재무 운영 및 부동산 검토 등 다양한 영역에서
            전문컨설팅을 제공하여 효과적인 절세 플랜을 설계하고 실행합니다.
          </p>
        </div>

        {/* 주요 서비스 아이콘 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg flex flex-col items-center"
            >
              <div className="w-16 h-16 mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-lg font-medium text-[#333333]">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* 주요 제공 서비스 섹션 */}
        <div className="w-full">
          <div className="flex justify-center items-center w-full mb-16">
            <div className="text-center">
              <h2 className="text-[30px] font-bold text-[#333333] relative inline-block pb-[6px]">
                주요 제공 서비스
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

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* 첫째 줄 서비스들 */}
            <div className="rounded overflow-hidden h-full">
              <h3 className="text-center font-bold py-2 bg-[#254061] text-white">
                법인기본컨설팅
              </h3>
              <ul className="p-4 space-y-2 text-sm bg-white border border-gray-200 text-[#333333] h-[calc(100%-40px)]">
                <li>• 정관, 임원보수• 퇴직금 규정</li>
                <li>• 기본 노무 규정 3종</li>
                <li>• 배당플랜 수립</li>
              </ul>
            </div>
            <div className="rounded overflow-hidden h-full">
              <h3 className="text-center font-bold py-2 bg-[#254061] text-white">
                가업승계 컨설팅
              </h3>
              <ul className="p-4 space-y-2 text-sm bg-white border border-gray-200 text-[#333333] h-[calc(100%-40px)]">
                <li>• 상속• 증여 플랜</li>
                <li>• 가업상속공제 활용</li>
                <li>• 합병분할, 특정법인설립</li>
              </ul>
            </div>
            <div className="rounded overflow-hidden h-full">
              <h3 className="text-center font-bold py-2 bg-[#254061] text-white">
                법인전환 컨설팅
              </h3>
              <ul className="p-4 space-y-2 text-sm bg-white border border-gray-200 text-[#333333] h-[calc(100%-40px)]">
                <li>• 일반법인전환, 영업권감정평가</li>
                <li>• 현물출자법인전환</li>
                <li>• 신설법인 종합설계</li>
              </ul>
            </div>
            <div className="rounded overflow-hidden h-full">
              <h3 className="text-center font-bold py-2 bg-[#254061] text-white">
                부동산 컨설팅
              </h3>
              <ul className="p-4 space-y-2 text-sm bg-white border border-gray-200 text-[#333333] h-[calc(100%-40px)]">
                <li>• 부동산 관리(Tax Saving)</li>
                <li>&nbsp;&nbsp;- 부동산관련 절세검토</li>
                <li>• 부동산 매수, 매각 중개</li>
              </ul>
            </div>
            <div className="rounded overflow-hidden h-full">
              <h3 className="text-center font-bold py-2 bg-[#254061] text-white">
                M&A, IPO컨설팅
              </h3>
              <ul className="p-4 space-y-2 text-sm bg-white border border-gray-200 text-[#333333] h-[calc(100%-40px)]">
                <li>• M&A 컨설팅</li>
                <li>• M&A 중개, IPO 중개</li>
                <li>• 법인 밸류업 전략 컨설팅</li>
              </ul>
            </div>

            {/* 둘째 줄 서비스들 */}
            <div className="rounded overflow-hidden h-full">
              <h3 className="text-center font-bold py-2 bg-[#376092] text-white">
                가지급금 컨설팅
              </h3>
              <ul className="p-4 space-y-2 text-sm bg-white border border-gray-200 text-[#333333] h-[calc(100%-40px)]">
                <li>• 산업재산권 활용 솔루션</li>
                <li>• 자기주식활용 솔루션</li>
                <li>• 기타 가지급금 솔루션</li>
              </ul>
            </div>
            <div className="rounded overflow-hidden h-full">
              <h3 className="text-center font-bold py-2 bg-[#376092] text-white">
                차명주식 컨설팅
              </h3>
              <ul className="p-4 space-y-2 text-sm bg-white border border-gray-200 text-[#333333] h-[calc(100%-40px)]">
                <li>• 명의신탁주식확인신청</li>
                <li>• 명의신탁환원소송</li>
                <li>• 차명주식 회수 솔루션</li>
              </ul>
            </div>
            <div className="rounded overflow-hidden h-full">
              <h3 className="text-center font-bold py-2 bg-[#376092] text-white">
                경정청구 컨설팅
              </h3>
              <ul className="p-4 space-y-2 text-sm bg-white border border-gray-200 text-[#333333] h-[calc(100%-40px)]">
                <li>• 예상환급액 진단•분석</li>
                <li>• 사업자 경정청구 진행</li>
                <li>• 고용지원금 및 4대보험 환급진행</li>
              </ul>
            </div>
            <div className="rounded overflow-hidden h-full">
              <h3 className="text-center font-bold py-2 bg-[#376092] text-white">
                직원로열티 컨설팅
              </h3>
              <ul className="p-4 space-y-2 text-sm bg-white border border-gray-200 text-[#333333] h-[calc(100%-40px)]">
                <li>• 스톡옵션제도</li>
                <li>• 우리사주조합</li>
                <li>• 성과공유제도</li>
              </ul>
            </div>
            <div className="rounded overflow-hidden h-full">
              <h3 className="text-center font-bold py-2 bg-[#376092] text-white">
                MSO 설립
              </h3>
              <ul className="p-4 space-y-2 text-sm bg-white border border-gray-200 text-[#333333] h-[calc(100%-40px)]">
                <li>• 병의원컨설팅</li>
                <li>• 간접법인설립</li>
              </ul>
            </div>

            {/* 셋째 줄 서비스들 */}
            <div className="rounded overflow-hidden h-full">
              <h3 className="text-center font-bold py-2 bg-[#5582D5] text-white">
                정책자금 컨설팅
              </h3>
              <ul className="p-4 space-y-2 text-sm bg-white border border-gray-200 text-[#333333] h-[calc(100%-40px)]">
                <li>• 사업계획서 작성 코칭</li>
                <li>• 자격요건 및 개선방안 검토</li>
                <li>• 기보/신보 지점 연결</li>
              </ul>
            </div>
            <div className="rounded overflow-hidden h-full">
              <h3 className="text-center font-bold py-2 bg-[#5582D5] text-white">
                기업연구소설립
              </h3>
              <ul className="p-4 space-y-2 text-sm bg-white border border-gray-200 text-[#333333] h-[calc(100%-40px)]">
                <li>• 기업연구소/전담부서 설립</li>
                <li>• 연구소 사후관리</li>
              </ul>
            </div>
            <div className="rounded overflow-hidden h-full">
              <h3 className="text-center font-bold py-2 bg-[#5582D5] text-white">
                벤처인증, 각종인증
              </h3>
              <ul className="p-4 space-y-2 text-sm bg-white border border-gray-200 text-[#333333] h-[calc(100%-40px)]">
                <li>• 벤처인증, ISO인증</li>
                <li>• 이노비즈, 메인비즈 인증</li>
              </ul>
            </div>
            <div className="rounded overflow-hidden h-full">
              <h3 className="text-center font-bold py-2 bg-[#5582D5] text-white">
                투자유치 컨설팅
              </h3>
              <ul className="p-4 space-y-2 text-sm bg-white border border-gray-200 text-[#333333] h-[calc(100%-40px)]">
                <li>• 사업계획서 코칭</li>
                <li>• VC, 개인투자조합 연결</li>
              </ul>
            </div>
            <div className="rounded overflow-hidden h-full">
              <h3 className="text-center font-bold py-2 bg-[#5582D5] text-white">
                기타 전문가 상담
              </h3>
              <ul className="p-4 space-y-2 text-sm bg-white border border-gray-200 text-[#333333] h-[calc(100%-40px)]">
                <li>• 기업분쟁/노무분쟁</li>
                <li>• 세금신고, 세무조사 대응</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
