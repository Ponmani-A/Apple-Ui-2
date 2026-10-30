import caseImg from "../../assets/airpods.jpg";

function MaxBattery() {
  return (
    <section className="bg-white px-5 pb-[80px] pt-[40px] text-center lg:pt-[100px]">
      <h2 className="text-[30px] font-semibold leading-[1.15] sm:text-[44px] lg:text-[56px]">
        A case with staying power.
      </h2>
      <p className="mx-auto mt-5 max-w-[570px] text-[15px] leading-[22px] text-[#6e6e73] lg:text-[17px] lg:leading-6">
        When stored in their soft, slim{" "}
        <b className="font-semibold text-black">Smart Case</b>, AirPods Max
        enter an ultra-low-power state that preserves charge.
      </p>

      <img
        src={caseImg}
        alt="Smart Case"
        className="mx-auto mt-6 w-full max-w-[935px] lg:mt-[40px]"
      />

      <h2 className="mt-[40px] text-[30px] font-semibold leading-[1.2] sm:text-[44px] lg:mt-[120px] lg:text-[56px] lg:leading-[83px]">
        A battery that
        <br />
        keeps stayin’ alive.
      </h2>
      <p className="mt-2 text-[120px] font-semibold leading-none tracking-tight sm:text-[200px] lg:text-[clamp(200px,32vw,540px)]">
        20
      </p>
      <p className="mx-auto mt-4 max-w-[570px] text-[14px] font-semibold leading-[1.4] lg:text-[17px] lg:leading-6">
        hours of listening, movie watching, or talk time — with Active Noise
        Cancellation and Spatial Audio enabled.5 Simply charge via Lightning
        connector. A quick 5-minute charge delivers 1.5 hours of listening.6
      </p>
    </section>
  );
}

export default MaxBattery;
