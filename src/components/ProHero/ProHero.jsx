import earbuds from "../../assets/airpods-nav-max.png";
import dust from "../../assets/banner.jpg";
import { wrap, Para } from "../ProUI/ProUI";

function ProHero() {
  return (
    <section className="overflow-hidden bg-black text-white">
      {/* Title + earbuds (earbuds image title mela) */}
      <div className="relative mx-auto h-[300px] max-w-[1440px] sm:h-[420px] lg:h-[909px]">
        <p className="absolute left-1/2 top-[40px] -translate-x-[120%] text-[11px] font-semibold text-[#00ff40] sm:top-[60px] sm:text-[14px] lg:top-[180px] lg:-translate-x-[60%] lg:text-[20px]">
          All-new
        </p>
        <h1 className="absolute inset-x-0 top-[110px] whitespace-nowrap text-center text-[17vw] font-semibold leading-none tracking-[-0.04em] sm:top-[150px] lg:top-[216px] lg:text-[180px]">
          AirPods Pro
        </h1>
        {/* Earbuds: 596 x 307 */}
        <img
          src={earbuds}
          alt="AirPods Pro"
          className="absolute left-1/2 top-[20px] z-10 h-[110px] w-[200px] -translate-x-1/2 object-contain sm:h-[160px] sm:w-[300px] lg:top-[110px] lg:h-[307px] lg:w-[596px]"
        />
        <div className="absolute inset-x-0 bottom-[20px] flex justify-center gap-8 text-[13px] font-semibold lg:bottom-[110px] lg:gap-[80px] lg:text-[16px]">
          <a href="#" className="hover:underline">
            Watch <i>Quiet the noise</i>
          </a>
          <a href="#" className="hover:underline">
            Watch the film
          </a>
        </div>
      </div>

      {/* Rebuilt from the sound up. */}
      <h2 className="px-[3.3vw] text-[30px] font-semibold leading-[1.1] sm:text-[44px] lg:mt-0 lg:text-[5.55vw]">
        Rebuilt from the sound up.
      </h2>

      <div className={`${wrap} mt-[60px] lg:mt-[303px]`}>
        <Para large className="max-w-[860px]">
          Up to 2x more Active Noise Cancellation than the previous generation.
          Spatial Audio takes immersion to a remarkably personal level. Touch
          control lets you adjust volume with a swipe. And a leap in power
          delivers 6 hours of battery life from a single charge.
        </Para>
      </div>

      {/* Dust image: 1440 x 748 */}
      <img
        src={dust}
        alt=""
        className="mt-[60px] h-[260px] w-full object-cover sm:h-[400px] lg:mt-[132px] lg:h-[748px]"
      />
    </section>
  );
}

export default ProHero;
