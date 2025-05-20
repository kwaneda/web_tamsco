import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] bg-white">
      {/* 배경 이미지 */}
      <div
  className={`
    absolute top-0 right-0 w-full h-full overflow-hidden
    opacity-20 md:opacity-100
    md:w-[65%] lg:w-[55%]
    [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]
    md:[clip-path:polygon(25%_0,100%_0,100%_100%,0_100%)]
  `}
      >
        <Image
          src="/hero-bg.png"
          alt="City Background"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
          priority
        />
      </div>

      {/* 로고와 텍스트 */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="flex flex-col items-start w-full md:w-auto">
          <div className="w-full md:w-[500px] lg:w-[700px] h-[80px] md:h-[100px] lg:h-[120px] flex items-center">
            <Image
              src="/tams-logo.svg"
              alt="TRINITY ASSET MANAGEMENT SERVICE INCORPORATED"
              className="w-full h-full object-contain object-left"
              width={1920}
              height={1080}
              priority
            />
          </div>
          <p className="text-[#006086] text-base md:text-lg whitespace-pre-wrap md:whitespace-nowrap mt-4 md:mt-8">
            전문가들로 구성된{" "}
            <span className="font-bold">맞춤형 비즈니스 레벨업 프로그램</span>
            {"\n"}을 통해 솔루션을 제공합니다
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;