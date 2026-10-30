import headphones from "../../assets/airpods_max_pro.png";

function MaxHero() {
  return (
    <section className="overflow-hidden bg-white px-4 pb-[80px] pt-[20px] text-center lg:pb-[320px] lg:pt-[29px]">
      <div className="relative mx-auto w-[260px] sm:w-[360px] lg:w-[35.5vw]">
        <h1 className="absolute left-1/2 top-[30%] z-0 -translate-x-1/2 whitespace-nowrap text-[17vw] font-semibold leading-none tracking-tight lg:text-[14.2vw]">
          AirPods Max
        </h1>
        <img
          src={headphones}
          alt="AirPods Max"
          className="relative z-10 aspect-[590/662] w-full object-contain"
        />
      </div>

      <p className="mx-auto mt-8 max-w-[890px] text-[18px] font-semibold leading-[1.4] sm:text-[22px] lg:mt-[98px] lg:text-[28px] lg:leading-[39px]">
        Introducing AirPods Max — a perfect balance of exhilarating
        high-fidelity audio and the effortless magic of AirPods. The ultimate
        personal listening experience is here.
      </p>
    </section>
  );
}

export default MaxHero;
