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
      location: "목천소재",
      client: "㈜*******",
      description: "서비스 개인사업자 법인전환 컨설팅",
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
      description: "대표이사개인 2개 주택 증여시 약 20억절세",
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

        {/* 자문 사례 목록 - 전체 너비 사용 */}
        <div className="w-full mb-16">
          {consultingCases.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-4 border-b border-gray-200 hover:bg-gray-50"
            >
              <div className="flex-1 flex items-center">
                <span className="text-[#333333] w-24 font-medium">
                  {item.location}
                </span>
                <span className="text-[#333333] w-32">
                  {item.client}
                </span>
              </div>
              <div className="flex-1">
                <span className="text-[#333333]">{item.description}</span>
              </div>
              <div className="flex items-center">
                <div className="bg-[#006086] text-white px-6 py-2 rounded-lg text-sm w-44 text-center">
                  valuation {item.valuation}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 통계 원형 - 가운데 정렬 */}
        <div className="flex justify-center gap-8 mt-16">
          <div className="text-center p-8 bg-[#DCE6FE] rounded-full w-48 h-48 flex flex-col justify-center relative z-10 mix-blend-multiply">
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
