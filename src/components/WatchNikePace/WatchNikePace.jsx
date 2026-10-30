import watchSe from "../../assets/apple-watch-se-nike.jpg";
import watchS8 from "../../assets/apple-watch-series-nike.jpg";

function WatchNikePace() {
  return (
    <section className="px-4">
      <div className="mx-auto max-w-[1104px]">
        <p className="mt-[60px] max-w-[880px] text-[17px] font-semibold leading-[1.45] text-[#86868b] sm:text-[20px] lg:mt-[194px] lg:text-[22px] lg:leading-[30px]">
          <span className="text-[#1d1d1f]">Set a new pace.</span> Apple Watch SE
          has a dual-core processor for a faster performance. And Apple Watch
          Series 8 has been designed with advanced sensors and technology to
          provide insights and help you better understand your health. These
          powerful options were born to run.
        </p>
        <a
          href="#"
          className="mt-3 block text-[17px] font-semibold text-[#06c] hover:underline lg:mt-[12px] lg:text-[22px]"
        >
          Shop Apple Watch
        </a>
      </div>

      <div className="mx-auto mt-[40px] grid max-w-[1272px] gap-10 md:grid-cols-2 lg:mt-[71px] lg:gap-[61px]">
        <div>
          <div className="h-[320px] overflow-hidden bg-[#f6f6f6] sm:h-[420px] lg:h-[635px]">
            <img
              src={watchSe}
              alt="Apple Watch SE"
              className="h-full w-full object-contain"
            />
          </div>
          <p className="mt-6 text-[15px] font-semibold leading-[1.5] text-[#86868b] lg:mt-[57px] lg:pl-[84px] lg:text-[17px] lg:leading-[26px]">
            <span className="text-[#1d1d1f]">Apple Watch SE</span> Starlight
            Aluminum Case
            <br />
            with Olive Grey / Black Nike Sport Band
          </p>
        </div>

        <div>
          <div className="h-[320px] overflow-hidden bg-[#f6f6f6] sm:h-[420px] lg:h-[635px]">
            <img
              src={watchS8}
              alt="Apple Watch Series 8"
              className="h-full w-full object-contain"
            />
          </div>
          <p className="mt-6 text-[15px] font-semibold leading-[1.5] text-[#86868b] lg:mt-[57px] lg:pl-[82px] lg:text-[17px] lg:leading-[26px]">
            <span className="text-[#1d1d1f]">Apple Watch Series 8</span>{" "}
            Midnight Aluminum Case
            <br />
            with Game Royal / Midnight Navy Nike Sport Loop
          </p>
        </div>
      </div>
    </section>
  );
}

export default WatchNikePace;
