import Image from "next/image";

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
        "現 MDRT협회 TOT 종신회원",
      ],
      expertise: [
        "법인 자문 컨설팅",
        "증여 및 상속 플랜 컨설팅",
        "가업승계 컨설팅(증여세 과세특례,가업상속공제)",
        "M&A, IPO 중계자문",
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

        <div className="flex flex-col md:flex-row w-full gap-8">
  {/* 좌측 타임라인 */}
  <div className="md:w-1/2 w-full flex flex-col items-start">
    <div className="relative pl-4">
      {/* 세로선: 타임라인 전체를 관통 */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#4F81BD] z-0" />
      {[
        { year: '2018', title: '트리니티 에셋 매니지먼트 출범', desc: '고액 자산가 및 법인전문 자산관리 컨설팅 개시\n200여건의 컨설팅 진행' },
        { year: '2019', title: '탐스 주식회사 설립', desc: '법인 전문 컨설팅으로 확대\n80여개 고객사 자산관리 진행' },
        { year: '2020', title: '노무법인/회계법인/법무법인 파트너십 체결', desc: '업무 협력 및 연합자문 TF팀 구성' },
        { year: '2022', title: 'A to Z 컨설팅 패키지 서비스', desc: '기업/자산가 대상 패키지, 자산가 대상 패밀리 패키지 개시' },
        { year: '2023', title: '세무 전략컨설팅 부서 신설', desc: '세무 조사, 법인 이전, 양도세 솔루션 전문\n누적 상담 800여회' },
        { year: '2024~', title: '글로벌 자산배분 컨설팅 개시', desc: '베트남 부동산 컨설팅' },
      ].map((item) => (
        <div key={item.year} className="flex items-start mb-8 relative z-10">
          {/* 연도 */}
          <div className="w-16 text-[#4F81BD] font-bold text-lg text-right pr-4 flex-shrink-0">
            {item.year}
          </div>
          {/* 시점원 */}
          <div className="relative" style={{ width: 32, height: 32 }}>
            <div
              className="absolute left-1/2 top-1/2 w-4 h-4 rounded-full border-2 border-white"
              style={{
                background: '#4F81BD',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
              }}
            />
          </div>
          {/* 내용 */}
          <div className="pl-4">
            <div className="font-bold text-[#222]">{item.title}</div>
            <div className="text-gray-500 whitespace-pre-line">{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
          {/* 우측 회사소개 ... */}
          <div className="w-full md:w-1/2">
            <h3 className="text-[64px] font-black text-[#1a1a1a] mb-8 leading-none tracking-tight">
              ABOUT TAMS Inc.
            </h3>
            <p className="text-[#333333] mb-6 leading-relaxed">
              탐스 경영컨설팅은 기업의 지속 가능한 성장과 자산가의 안정적인 승계를 지원하기<br/>
              위해 설립된 세무 및 경영 전문 컨설팅 기업입니다. 자산과 경영 전반에 걸친 세무 전략의<br/>
              중심축을 다루며 세무, 회계, 법무, 부동산 등 각 분야의 전문가들이 협업하여 정밀한<br/>
              분석과 실행 중심의 전략으로 고객의 세무 리스크를 최소화하고 자산 가치를 극대화<br/>
              합니다.
            </p>
            <p className="text-[#333333] mb-6 leading-relaxed">
              세무 이슈 해결은 물론, 지속 가능한 경영과 자산 보호까지.단순한 자문을 넘어 고객과<br />
              함께 성장하는 동반자적 컨설팅을 제공하는TAMS와 함께 전략적 미래를 설계하십시오.<br/>
            </p>
            <div className="text-right">
              <p className="text-lg text-[#333333] mb-2 font-bold italic">
                &quot; 철저한 보안과 신뢰를 바탕으로 기업의 지속 성장과 성공을
                설계합니다 &quot;
              </p>
              <p className="text-[#333333] font-bold">탐스 ㈜ </p>
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
            <Image
              src="/organization.png"
              alt="조직도"
              width={1000}
              height={500}
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
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    width={192}
                    height={192}
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
