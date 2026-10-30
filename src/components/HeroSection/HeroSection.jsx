import iphone14Pro from "../../assets/banner.jpg";
import iphone14 from "../../assets/iphone14.jpg";
import watch from "../../assets/watch.jpg";
import appleLogo from "../../assets/Apple.png";

function HeroSection() {
  return (
    <div>
      <section className="mb-2.5 flex h-[450px] flex-col items-center overflow-hidden bg-black px-4 pt-10 text-center text-[#f5f5f7] sm:h-[560px] md:pt-14 ">
        <h2 className="text-[40px] font-semibold leading-[1.07] md:text-[56px]">
          iPhone 14 Pro
        </h2>
        <p className="mt-1.5 max-w-[520px] text-[21px] leading-[1.19] md:text-[28px]">
          Pro. Beyond.
        </p>
        <div className="mt-3 flex gap-6 text-[17px] text-[#2997ff] md:text-[21px]">
          <a href="#" className="hover:underline">
            Learn more
          </a>
          <a href="#" className="hover:underline">
            Buy
          </a>
        </div>
        <div className="relative mt-4 min-h-0 w-full flex-1">
          <img
            src={iphone14Pro}
            alt="iPhone 14 Pro"
            className="absolute bottom-0 left-1/2 max-h-full max-w-full -translate-x-1/2 object-contain"
          />
        </div>
      </section>

      <section className="mb-2.5 flex h-[560px] flex-col items-center overflow-hidden bg-[#fafafa] px-4 pt-10 text-center text-[#1d1d1f] sm:h-[560px] md:pt-14 ">
        <h2 className="text-[40px] font-semibold leading-[1.07] md:text-[56px]">
          iPhone 14
        </h2>
        <p className="mt-1.5 max-w-[520px] text-[21px] leading-[1.19] md:text-[28px]">
          Two great sizes. Now with a splash of yellow.
        </p>
        <div className="mt-3 flex gap-6 text-[17px] text-[#06c] md:text-[21px]">
          <a href="#" className="hover:underline">
            Learn more
          </a>
          <a href="#" className="hover:underline">
            Buy
          </a>
        </div>
        <div className="relative mt-4 min-h-0 w-full flex-1">
          <img
            src={iphone14}
            alt="iPhone 14"
            className="absolute bottom-0 left-1/2 max-h-full max-w-full -translate-x-1/2 object-contain"
          />
        </div>
      </section>

      <section className="mb-2.5 flex h-[480px] flex-col items-center overflow-hidden bg-black px-4 pt-10 text-center text-[#f5f5f7] sm:h-[560px] md:pt-14">
        <h2 className="flex items-center justify-center gap-1 text-[40px] font-semibold leading-[1.07] md:text-[56px]">
          <img src={appleLogo} alt="" className="h-[32px] w-auto md:h-[42px]" />
          WATCH
        </h2>
        <p className="mt-1 text-xs tracking-[0.35em] text-[#ff453a] md:text-sm">
          SERIES 8
        </p>
        <p className="mt-1.5 max-w-[520px] text-[21px] leading-[1.19] md:text-[28px]">
          A healthy leap ahead.
        </p>
        <div className="mt-3 flex gap-6 text-[17px] text-[#2997ff] md:text-[21px]">
          <a href="#" className="hover:underline">
            Learn more
          </a>
          <a href="#" className="hover:underline">
            Buy
          </a>
        </div>
        <div className="relative mt-4 min-h-0 w-full flex-1">
          <img
            src={watch}
            alt="Apple Watch Series 8"
            className="absolute bottom-0 left-1/2 max-h-full max-w-full -translate-x-1/2 object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
