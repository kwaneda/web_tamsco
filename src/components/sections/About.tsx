const About = () => {
  const advisors = [
    {
      name: "유진명",
      nameEng: "Jinmyung Yoo",
      position: "CEO/총괄Director",
      image: "/images/advisors/ad1.jpg",
      mainCareer: [
        "TAMS Consulting 공동 CEO",
        "기업승계지도사 1급 자격",
        "IOS국제심사원 자격",
        "개인투자조합 GP (업무집행조합원자격)",
        "現 MDRT협회 MDRT, COT, TOT member",
        "現 MDRT협회 종신회원(10년연속 달성자격 준수)",
      ],
      expertise: [
        "법인 자문 컨설팅",
        "증여 및 상속 플랜 컨설팅",
        "가업승계 컨설팅(증여세 과세특례,가업상속공제)",
        "개인투자조합 운영 GP (벤처기업투자)",
        "전문투자 SPC 운영 (스타벅스 DT등)",
      ],
    },
    {
      name: "신유송",
      nameEng: "Yoosong Shin",
      position: "총괄이사/수석컨설턴트",
      image: "/images/advisors/ad2.jpg",
      mainCareer: [
        "중소기업 경영컨설팅 및 기업리딩 약 100건 진행",
        "중소기업 그룹사 기업승계 컨설팅 다수 진행",
        "대형 유통센터(1000억) 경쟁분야 컨소시엄 진행",
      ],
      expertise: [
        "법인대표 전문상담",
        "기업 경영자문 서비스",
        "기업 투자 및 PF, 금융상품 투자 실무 담당",
        "전문&특수 화재보험 전문담당",
      ],
    },
    {
      name: "한인철",
      nameEng: "Incheol Han",
      position: "자문세무사",
      image: "/images/advisors/ad3.jpg",
      mainCareer: [
        "세무법인 세화 대표세무사",
        "동수원세무서장, 서산세무서장",
        "중부청 조사1국 과장, 대전청 조사2국장",
        "국세청 36년 근무, 부이사관",
      ],
      expertise: [
        "가족법인 설립/ 가업 승계 / 재건축 양도 업구",
        "법인의 가지급금, 재고자산의 효율적 운영",
        "자금출처 및 자금출처 명세서 소명",
        "양도/상속/증여세 신고 및 조사",
        "다국적 기업의 국제거래 및 이전",
        "법령해석 및 소득세/법인세 조사(3천건)",
      ],
    },
    {
      name: "이승환",
      nameEng: "SeungHwan Lee",
      position: "자문회계사",
      image: "/images/advisors/ad4.jpg",
      mainCareer: [
        "前 한영회계법인(Ernst & Young) 세무본부",
        "前 삼정회계법인(KPMG) 세무본부",
        "現 이승환회계사사무소 개업(2015년~)",
        "  - 공인회계사 3인, 직원 9인",
      ],
      expertise: [
        "고객수: 250개사(법인 80%, 개인 20%)",
        "    - 제조업부터 연예인, 병원, 벤처, 유튜버 등",
        "비상장법인 지주회사전환, 기업 외부감사",
        "세무 (조세불복, 경정청구, 세무기장, 상속증여)",
        "컨설팅 (인수자문, 상장자문, 평가)",
        "상증법상 주식평가, 승계전략, 주식 및 부동산 절세전략",
      ],
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* 회사 소개 헤딩 */}
        <div className="flex justify-center items-center w-full mb-16">
          <div className="text-center">
            <h2 className="text-[30px] font-bold text-[#333333] relative inline-block pb-[6px]">
              회사소개
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

        <div className="mb-20">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <img
                src="/meeting.jpg"
                alt="Business Meeting"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-[64px] font-black text-[#1a1a1a] mb-8 leading-none tracking-tight">
                ABOUT TAMS Inc.
              </h3>
              <p className="text-[#333333] mb-6 leading-relaxed">
                탐스 경영컨설팅은 기업이 전략적으로 성장하고 지속 가능한 경영을
                실현할 수 있도록 지원하기 위해 설립된 경영 자문 컨설팅
                회사입니다. 다양한 분야의 최고 전문가로 이루어진 탐스는
                클라이언트의목표를 이루기 위해 함께 노력하며, 절대적인 신뢰와
                협력을 바탕으로 한 맞춤형 서비스를 제공합니다. 탐스와 함께하면
                비즈니스 성과를 극대화하고, 지속 가능한 성장을 이룰 수 있습니다.
              </p>
              <div className="text-right">
                <p className="text-lg text-[#333333] mb-2 font-bold italic">
                  " 철저한 보안과 신뢰를 바탕으로 기업의 지속 성장과 성공을
                  설계합니다 "
                </p>
                <p className="text-[#333333] font-bold">- 탐스㈜ CEO 엄태영</p>
              </div>
            </div>
          </div>
        </div>

        {/* 조직도 헤딩 */}
        <div className="flex justify-center items-center w-full mb-16">
          <div className="text-center">
            <h2 className="text-[30px] font-bold text-[#333333] relative inline-block pb-[6px]">
              조직도
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

        {/* 조직도 내용 */}
        <div className="mb-20">
          <div className="flex justify-center">
            <img
              src="/organization.png"
              alt="조직도"
              className="max-w-4xl w-full"
            />
          </div>
        </div>

        {/* 주요 자문인력 소개 헤딩 */}
        <div className="flex justify-center items-center w-full mb-16">
          <div className="text-center">
            <h2 className="text-[30px] font-bold text-[#333333] relative inline-block pb-[6px]">
              주요 자문인력 소개
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

        {/* 자문인력 프로필 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advisors.map((advisor) => (
            <div
              key={advisor.name}
              className="bg-gray-50 p-8 rounded-lg shadow-lg"
            >
              <div className="flex gap-8">
                {/* 좌측: 이미지, 이름, 직함 */}
                <div className="w-1/3 flex flex-col items-center">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    className="w-48 h-48 rounded-full object-cover border-4 border-[#006086] mb-4"
                  />
                  <h4 className="text-xl font-bold text-[#333333] mb-1 text-center">
                    {advisor.name}
                  </h4>
                  <p className="text-base text-[#333333] mb-1 text-center">
                    {advisor.nameEng}
                  </p>
                  <p className="text-base text-[#006086] font-medium text-center">
                    {advisor.position}
                  </p>
                </div>

                {/* 구분선 */}
                <div className="w-px bg-gray-200"></div>

                {/* 우측: 주요 자격 및 전문 분야 */}
                <div className="w-2/3">
                  <div className="mb-6">
                    <h5 className="text-lg font-bold text-[#006086] mb-3">
                      주요 자격
                    </h5>
                    <ul className="space-y-2">
                      {advisor.mainCareer.map((career, index) => (
                        <li
                          key={index}
                          className="text-base text-[#333333] flex items-start"
                        >
                          <span className="mr-2">•</span>
                          <span>{career}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="text-lg font-bold text-[#006086] mb-3">
                      전문 분야
                    </h5>
                    <ul className="space-y-2">
                      {advisor.expertise.map((exp, index) => (
                        <li
                          key={index}
                          className="text-base text-[#333333] flex items-start"
                        >
                          <span className="mr-2">•</span>
                          <span>{exp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
