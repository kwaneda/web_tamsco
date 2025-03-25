import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative h-[80vh] bg-white">
      {/* 배경 이미지 */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full overflow-hidden"
        style={{
          clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <Image
          src="/images/hero-bg.png"
          alt="City Background"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
      </div>

      {/* 로고와 텍스트 */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="flex flex-col items-start">
          <div
            style={{
              width: "700px",
              height: "120px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src="/tams-logo.svg"
              alt="TRINITY ASSET MANAGEMENT SERVICE INCORPORATED"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                objectPosition: "left",
              }}
              width={1920}
              height={1080}
            />
          </div>
          <p className="text-[#006086] text-lg whitespace-nowrap mt-8">
            전문가들로 구성된{" "}
            <span className="font-bold">맞춤형 비즈니스 레벨업 프로그램</span>{" "}
            을 통해 솔루션을 제공합니다
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
