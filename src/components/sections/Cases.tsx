const Cases = () => {
  const consultingCases = [
    {
      location: "충주소재",
      client: "㈜********",
      description: "주주 지배구조 및 가업승계 컨설팅",
      valuation: "500억",
    },
    {
      location: "안양소재",
      client: "㈜****그룹",
      description: "계열사 지배구조 및 가업승계 컨설팅",
      valuation: "3,000억",
    },
    {
      location: "양산소재",
      client: "㈜****",
      description: "대형 물류센터 화재보험 컨소시엄",
      valuation: "1,200억",
    },
    {
      location: "대전소재",
      client: "㈜****",
      description: "개인사업자 법인전환 컨설팅",
      valuation: "500억",
    },
    {
      location: "서울소재",
      client: "㈜****",
      description: "직원로열티 컨설팅",
      valuation: "1,000억",
    },
    {
      location: "옥천소재",
      client: "㈜*******",
      description: "개인사업자 법인전환 컨설팅",
      valuation: "300억",
    },
    {
      location: "경북소재",
      client: "㈜****그룹",
      description: "주주 지배구조 및 가업승계 컨설팅",
      valuation: "4,000억",
    },
    {
      location: "수원소재",
      client: "㈜******",
      description: "증여 및 상속 컨설팅",
      valuation: "1,000억",
    },
    {
      location: "서울소재",
      client: "㈜****",
      description: "대표이사 2개 주택 증여 20억 절세",
      valuation: "200억",
    },
    {
      location: "서울소재",
      client: "청담동 **빌딩",
      description: "시전 증여 및 상속 컨설팅",
      valuation: "1,000억",
    },
  ];

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* 헤더 부분 유지 */}
        <div className="flex justify-center items-center w-full mb-16">
          <div className="text-center">
            <h2 className="text-[30px] font-bold text-[#333333] relative inline-block pb-[6px]">
              자문사례
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

        <p className="text-center text-[#333333] mb-12">
          탐스 경영 컨설팅에서 진행한 컨설팅 사례입니다
        </p>

        {/* 자문 사례 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-20">
          {consultingCases.map((item, index) => (
  <div
    key={index}
    className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
  >
    <div className="p-4 flex flex-col h-full">
      {/* 상단 정보 (회색 배경) */}
      <div className="bg-gray-50 -mx-4 -mt-4 p-4 mb-3">
        <div className="flex justify-between items-center">
          <span className="text-[#333333] font-medium">
            {item.location}
          </span>
          <span className="text-[#333333] text-sm">
            {item.client}
          </span>
        </div>
      </div>
      
      {/* 구분선 */}
      <div className="border-b border-gray-200 mb-3"></div>

      {/* 설명 텍스트 */}
      <p className="text-[#333333] text-sm mb-4 flex-grow">
        {item.description}
      </p>

      {/* Valuation 부분 - 줄에 따라 다른 색상 적용 */}
      <div className={`text-white py-2 px-4 rounded text-center text-sm ${
        index < 5 ? 'bg-[#4F81BD]' : 'bg-[#1F497D]'
      }`}>
        valuation {item.valuation}
      </div>
    </div>
  </div>
))}
        </div>

        {/* 하단 통계 원형 - 겹치도록 배치 */}
        <div className="relative flex justify-center mt-16">
          <div className="text-center p-8 bg-[#DCE6FE] rounded-full w-48 h-48 flex flex-col justify-center relative z-10 mix-blend-multiply mr-[-30px]">
            <p className="text-[#333333] mb-2">누적 절세 금액</p>
            <p className="text-3xl font-bold text-[#006086]">980억</p>
          </div>
          <div className="text-center p-8 bg-[#DBEEF3] rounded-full w-48 h-48 flex flex-col justify-center mix-blend-multiply">
            <p className="text-[#333333] mb-2">자문 건수</p>
            <p className="text-3xl font-bold text-[#006086]">350건</p>
            <p className="text-lg text-[#006086]">이상</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
