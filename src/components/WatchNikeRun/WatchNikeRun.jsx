import watchRed from "../../assets/apple-watch-se-nike.jpg";
import watchBlack from "../../assets/apple-watch-series-nike.jpg";
import watchStar from "../../assets/apple-watch-se-nike.jpg";

const lead = "text-[#1d1d1f]";

function WatchNikeRun() {
  return (
    <section className="px-4">
      <div className="mx-auto mt-[40px] grid max-w-[1272px] grid-cols-3 overflow-hidden bg-[#f5f5f7] lg:mt-[69px] lg:h-[561px]">
        <img
          src={watchRed}
          alt=""
          className="h-[200px] w-full object-cover object-left sm:h-[300px] lg:h-full"
        />
        <img
          src={watchBlack}
          alt=""
          className="h-[200px] w-full object-cover object-center sm:h-[300px] lg:h-full"
        />
        <img
          src={watchStar}
          alt=""
          className="h-[200px] w-full object-cover object-right sm:h-[300px] lg:h-full"
        />
      </div>

      <div className="mx-auto mt-[40px] grid max-w-[1104px] gap-8 text-[15px] font-semibold leading-[1.5] text-[#86868b] md:grid-cols-3 md:gap-[70px] lg:mt-[58px] lg:text-[17px] lg:leading-[25px]">
        <p>
          <span className={lead}>Plans that work as hard as you do.</span>{" "}
          Whether you’re a beginner, signing up for your first 5K, or training
          for a marathon, hitting a goal starts with a solid plan. Training
          Plans on Nike Run Club have been created by experts to help you get
          started and track your progress along the way.
        </p>
        <p>
          <span className={lead}>Your guide to a better run.</span> Everyone
          needs a little voice that says “keep going.” In Guided Runs on Nike
          Run Club, expert coaches will cheer you on, stride after stride.
        </p>
        <p>
          <span className={lead}>More accessible for more runners.</span> The
          Nike Run Club app was made for everyone. With VoiceOver, Apple Watch
          can read what’s onscreen to you. Bigger text options make everything
          easier to see.
        </p>
      </div>
    </section>
  );
}

export default WatchNikeRun;
