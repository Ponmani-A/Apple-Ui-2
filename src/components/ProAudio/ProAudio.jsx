import chip from "../../assets/Apple.png";
import xray from "../../assets/airpods.jpg";
import ring from "../../assets/banner.jpg";
import { wrap, Label, Big, Para, Side, B, G } from "../ProUI/ProUI";

function ProAudio() {
  return (
    <section className="bg-black pt-[80px] text-white lg:pt-[190px]">
      <div className={wrap}>
        <Label>Audio performance</Label>
        <Big>
          H2. More
          <br />
          immersive by
          <br />
          every measure.
        </Big>
        <Para className="mt-6 max-w-[740px] lg:mt-[44px]">
          The new Apple-designed H2 chip is the force behind AirPods Pro and its
          advanced audio performance. It works in concert with a custom-built
          driver and amplifier to deliver crisp, clear high notes and deep, rich
          bass in stunning definition — so every sound is more vivid than ever.
        </Para>
      </div>

      {/* Chip grid: 542px tall, thin lines */}
      <div className="mt-[60px] grid border-y border-[#222] md:grid-cols-[46%_1fr] lg:mt-[110px] lg:h-[542px]">
        <div className="flex items-center justify-center py-10 md:justify-start md:py-0 lg:pl-[190px]">
          <div className="flex h-[200px] w-[200px] items-center justify-center rounded-[10px] bg-[#1c1c1e] text-[40px] font-semibold lg:h-[284px] lg:w-[284px] lg:text-[60px]">
            <img
              src={chip}
              alt=""
              className="mr-1 h-[34px] w-auto lg:h-[56px]"
            />
            H2
          </div>
        </div>
        <div className="flex items-center border-t border-[#222] px-6 py-10 md:border-l md:border-t-0 md:py-0 lg:pl-[130px]">
          <Side className="max-w-[474px]">
            <B>The brand-new H2 chip</B> carries out more functions than ever,
            using <G>computational algorithms</G> to deliver even smarter noise
            cancellation, superior three-dimensional sound, and more efficient
            battery life — all at once.
          </Side>
        </div>
      </div>

      {/* X-ray earbud with side texts */}
      <div className="relative mx-auto mt-[40px] max-w-[1440px] px-5 lg:mt-[110px] lg:h-[1250px] lg:px-0">
        <Side className="max-w-[260px] lg:absolute lg:left-[214px] lg:top-0 lg:w-[260px]">
          The chip uses powerful <B>new adaptation algorithms</B> to process
          sound more quickly, tuning audio at the precise moment you hear it.
          Every detail is rendered for your specific ear shape, immersing you in{" "}
          <G>higher-fidelity sound</G>.
        </Side>
        <Side className="mt-6 max-w-[260px] lg:absolute lg:left-[214px] lg:top-[265px] lg:mt-0 lg:w-[260px]">
          <B>A redesigned inward-facing microphone</B> works with voice
          enhancement algorithms to better recognize and articulate your voice,
          so it <G>sounds more natural</G> when you’re on phone and video calls.
        </Side>
        <img
          src={xray}
          alt=""
          className="mx-auto mt-8 w-[220px] lg:absolute lg:left-[520px] lg:top-0 lg:mt-0 lg:w-[313px]"
        />
        <Side className="mt-6 max-w-[300px] lg:absolute lg:left-[843px] lg:top-[834px] lg:mt-0 lg:w-[300px]">
          <B>A custom-built driver and amplifier</B> work with the{" "}
          <G>H2 chip</G> to provide lower distortion during playback, so you’ll
          hear deeper bass and crisper highs — across all volume levels.
        </Side>
      </div>

      {/* Dust ring: 1440 x 925 */}
      <img
        src={ring}
        alt=""
        className="h-[280px] w-full object-cover sm:h-[460px] lg:h-[925px]"
      />
    </section>
  );
}

export default ProAudio;
