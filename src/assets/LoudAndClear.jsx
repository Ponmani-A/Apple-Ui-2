import SectionHeading from "../SectionHeading/SectionHeading";
import ScrollRow from "../ScrollRow/ScrollRow";
import musicOffer from "../../assets/loud-music.jpg";
import homepod from "../../assets/loud-homepod.jpg";
import airpods from "../../assets/loud-airpods.jpg";
import homepodMini from "../../assets/loud-homepod-mini.jpg";

function LoudAndClear() {
  return (
    <section>
      <SectionHeading
        dark="Loud and clear."
        light="Unparalleled choices for rich, high-quality sound."
      />
      <ScrollRow>
        {/* Apple Music offer */}
        <div className="flex h-[460px] w-[300px] shrink-0 flex-col overflow-hidden rounded-[18px] bg-white p-6 md:h-[500px] md:w-[400px] md:p-7">
          <h3 className="text-2xl font-semibold">
            Get 6 months of Apple Music free.
          </h3>
          <p className="mt-2 text-sm text-[#6e6e73]">
            Included with your HomePod, AirPods, or select Beats product.*
          </p>
          <img
            src={musicOffer}
            alt="Apple Music offer"
            className="mt-auto h-auto w-full shrink-0"
          />
        </div>

        {/* HomePod */}
        <div className="flex h-[460px] w-[260px] shrink-0 flex-col rounded-[18px] bg-white p-6 md:h-[500px] md:w-[314px]">
          <div className="flex h-[260px] items-center justify-center">
            <img
              src={homepod}
              alt="HomePod"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="mt-4 flex justify-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#1d1d1f]" />
            <span className="h-2 w-2 rounded-full bg-[#d2d2d7]" />
          </div>
          <p className="mt-auto text-xs text-[#bf4800]">New</p>
          <h3 className="mt-1 text-[17px] font-semibold leading-[1.2]">
            HomePod - Midnight
          </h3>
          <p className="mt-3 text-sm">$299.00</p>
        </div>

        {/* AirPods Pro */}
        <div className="flex h-[460px] w-[260px] shrink-0 flex-col rounded-[18px] bg-white p-6 md:h-[500px] md:w-[314px]">
          <div className="flex h-[260px] items-center justify-center">
            <img
              src={airpods}
              alt="AirPods Pro"
              className="h-full w-auto object-contain"
            />
          </div>
          <p className="mt-auto text-xs text-[#bf4800]">New</p>
          <h3 className="mt-1 text-[17px] font-semibold leading-[1.2]">
            AirPods Pro (2nd generation)
          </h3>
          <p className="mt-3 text-sm">$249.00</p>
        </div>

        {/* HomePod mini */}
        <div className="flex h-[460px] w-[260px] shrink-0 flex-col rounded-[18px] bg-white p-6 md:h-[500px] md:w-[314px]">
          <div className="flex h-[260px] items-center justify-center">
            <img
              src={homepodMini}
              alt="HomePod mini"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="mt-4 flex justify-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#f5b942]" />
            <span className="h-2 w-2 rounded-full bg-[#d2d2d7]" />
          </div>
          <h3 className="mt-auto text-[17px] font-semibold leading-[1.2]">
            HomePod mini - Yellow
          </h3>
          <p className="mt-3 text-sm">$99.00</p>
        </div>
      </ScrollRow>
    </section>
  );
}

export default LoudAndClear;
