import ipad from "../../assets/ipad.jpg";
import macbook from "../../assets/macbook.jpg";
import homepod from "../../assets/homepad.jpg";
import airpods from "../../assets/airpods.jpg";
import fitness from "../../assets/fitnes.jpg";
import appleCard from "../../assets/phonecard.jpg";
import appleLogo from "../../assets/Apple.png";

function TileGrid() {
  return (
    <div className="mb-2.5 grid grid-cols-1 gap-2.5 px-2.5 md:grid-cols-2">
      <section className="flex h-[440px] flex-col items-center overflow-hidden bg-[#fbfbfb] px-4 pt-10 text-center text-[#1d1d1f] sm:h-[500px] md:pt-[58px] lg:h-[580px]">
        <h2 className="text-[32px] font-semibold leading-[1.1] md:text-[40px]">
          iPad
        </h2>
        <p className="mt-2 max-w-[360px] text-[17px] leading-[1.19] md:text-[21px]">
          Lovable. Drawable. Magical.
        </p>
        <div className="mt-3.5 flex gap-6 text-[17px] text-[#06c] md:text-[19px]">
          <a href="#" className="hover:underline">
            Learn more
          </a>
          <a href="#" className="hover:underline">
            Buy
          </a>
        </div>
        <div className="relative mt-4 min-h-0 w-full flex-1 ">
          <img
            src={ipad}
            alt="iPad"
            className="absolute bottom-0 left-1/2 max-h-full max-w-full -translate-x-1/2 object-contain"
          />
        </div>
      </section>

      <section className="flex h-[440px] flex-col items-center overflow-hidden bg-black px-4 pt-10 text-center text-[#f5f5f7] sm:h-[500px] md:pt-[58px] lg:h-[580px]">
        <h2 className="text-[32px] font-semibold leading-[1.1] md:text-[40px]">
          MacBook Pro
        </h2>
        <p className="mt-2 max-w-[360px] text-[17px] leading-[1.19] md:text-[21px]">
          Supercharged by M2 Pro and M2 Max.
        </p>
        <div className="mt-3.5 flex gap-6 text-[17px] text-[#2997ff] md:text-[19px]">
          <a href="#" className="hover:underline">
            Learn more
          </a>
          <a href="#" className="hover:underline">
            Buy
          </a>
        </div>
        <div className="relative mt-4 min-h-0 w-full flex-1">
          <img
            src={macbook}
            alt="MacBook Pro"
            className="absolute bottom-0 left-1/2 max-h-full max-w-full -translate-x-1/2 object-contain"
          />
        </div>
      </section>

      <section className="flex h-[440px] flex-col items-center overflow-hidden bg-black px-4 pt-10 text-center text-[#f5f5f7] sm:h-[500px] md:pt-[58px] lg:h-[580px]">
        <h2 className="text-[32px] font-semibold leading-[1.1] md:text-[40px]">
          HomePod
        </h2>
        <p className="mt-2 max-w-[360px] text-[17px] leading-[1.19] md:text-[21px]">
          Profound sound.
        </p>
        <div className="mt-3.5 flex gap-6 text-[17px] text-[#2997ff] md:text-[19px]">
          <a href="#" className="hover:underline">
            Learn more
          </a>
          <a href="#" className="hover:underline">
            Buy
          </a>
        </div>
        <div className="relative mt-4 min-h-0 w-full flex-1">
          <img
            src={homepod}
            alt="HomePod"
            className="absolute bottom-0 left-1/2 max-h-full max-w-full -translate-x-1/2 object-contain"
          />
        </div>
      </section>

      <section className="relative h-[440px] overflow-hidden sm:h-[500px] lg:h-[580px]">
        <img
          src={airpods}
          alt="AirPods Pro"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative z-10 flex flex-col items-center px-4 pt-10 text-center text-white md:pt-[58px]">
          <h2 className="text-[32px] font-semibold leading-[1.1] md:text-[40px]">
            AirPods Pro
          </h2>
          <p className="mt-2 max-w-[360px] text-[17px] leading-[1.19] md:text-[21px]">
            Up to 2x more Active Noise Cancellation.
          </p>
          <div className="mt-3.5 flex gap-6 text-[17px] md:text-[19px]">
            <a href="#" className="hover:underline">
              Learn more
            </a>
            <a href="#" className="hover:underline">
              Buy
            </a>
          </div>
        </div>
      </section>

      <section className="flex h-[440px] flex-col items-center overflow-hidden bg-[#f5f5f7] px-4 pt-10 text-center text-[#1d1d1f] sm:h-[500px] md:pt-[58px] lg:h-[580px]">
        <h2 className="flex items-center justify-center gap-1 text-[32px] font-semibold leading-[1.1] md:text-[40px]">
          <img
            src={appleLogo}
            alt=""
            className="h-[24px] w-auto invert md:h-[30px]"
          />
          Fitness+
        </h2>
        <p className="mt-2 max-w-[360px] text-[17px] leading-[1.19] md:text-[21px]">
          Welcome to the year of you. Now all you need is iPhone.
        </p>
        <div className="mt-3.5 flex gap-6 text-[17px] text-[#06c] md:text-[19px]">
          <a href="#" className="hover:underline">
            Learn more
          </a>
          <a href="#" className="hover:underline">
            Try it free:
          </a>
        </div>
        <div className="relative mt-4 min-h-0 w-full flex-1">
          <img
            src={fitness}
            alt="Fitness+"
            className="absolute bottom-0 left-1/2 max-h-full max-w-full -translate-x-1/2 object-contain"
          />
        </div>
      </section>

      <section className="flex h-[440px] flex-col items-center overflow-hidden bg-[#fbfbfd] px-4 pt-10 text-center text-[#1d1d1f] sm:h-[500px] md:pt-[58px] lg:h-[580px]">
        <h2 className="flex items-center justify-center gap-1 text-[32px] font-semibold leading-[1.1] md:text-[40px]">
          <img
            src={appleLogo}
            alt=""
            className="h-[24px] w-auto invert md:h-[30px]"
          />
          Card
        </h2>
        <p className="mt-2 max-w-[360px] text-[17px] leading-[1.19] md:text-[21px]">
          Get up to 3% Daily Cash back with every purchase.
        </p>
        <div className="mt-3.5 flex gap-6 text-[17px] text-[#06c] md:text-[19px]">
          <a href="#" className="hover:underline">
            Learn more
          </a>
          <a href="#" className="hover:underline">
            Apply now
          </a>
        </div>
        <div className="relative mt-4 min-h-0 w-full flex-1">
          <img
            src={appleCard}
            alt="Apple Card"
            className="absolute bottom-0 left-1/2 max-h-full max-w-full -translate-x-1/2 object-contain"
          />
        </div>
      </section>
    </div>
  );
}

export default TileGrid;
