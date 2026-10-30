import dust from "../../assets/banner.jpg";
import bigBud from "../../assets/airpods.jpg";
import tip from "../../assets/airpods.jpg";
import stem from "../../assets/airpods.jpg";
import { wrap, Label, Big, Para, Side, B, G } from "../ProUI/ProUI";

const line = "border-[#222]";

function ProNoise() {
  return (
    <section className="bg-black pt-[40px] text-white lg:pt-[130px]">
      <div className={wrap}>
        <Label>Noise cancellation</Label>
        <Big>
          A marvel of
          <br />
          modern silence.
        </Big>
        <Para className="mt-6 max-w-[740px] lg:mt-[44px]">
          Featuring up to two times more noise cancellation than their
          predecessor, the H2-powered AirPods Pro are built to let you listen in
          peace. With control over what you hear — and don’t hear — you’ll be
          immersed in songs and podcasts like never before.
        </Para>
      </div>

      {/* Grid: left 2 cells, right tall cell */}
      <div
        className={`mt-[60px] grid border-y ${line} md:grid-cols-[46%_1fr] lg:mt-[110px]`}
      >
        <div>
          <div className="relative flex h-[260px] flex-col items-center justify-center text-center lg:h-[370px]">
            <img
              src={dust}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-60"
            />
            <p className="relative text-[13px] font-semibold lg:text-[18px]">
              Up to
            </p>
            <p className="relative text-[64px] font-semibold leading-none lg:text-[110px]">
              2x
            </p>
            <p className="relative max-w-[200px] text-[13px] font-semibold leading-[1.3] lg:text-[18px]">
              <G>more</G> Active Noise Cancellation.1
            </p>
          </div>
          <div
            className={`flex items-center border-t ${line} px-6 py-10 lg:h-[525px] lg:py-0 lg:pl-[214px]`}
          >
            <Side className="max-w-[330px]">
              A new driver and improved acoustic algorithms help{" "}
              <B>Active Noise Cancellation</B> reduce more unwanted noise, so
              nothing interrupts listening during your commute and when you need
              to <G>focus</G>.
            </Side>
          </div>
        </div>
        <div
          className={`relative overflow-hidden border-t ${line} px-6 py-10 md:border-l md:border-t-0 lg:h-[896px] lg:px-0 lg:py-0`}
        >
          <Side className="max-w-[320px] lg:absolute lg:left-[130px] lg:top-[70px]">
            <B>Noise-cancelling microphones</B> and a rear vent are optimally
            placed to quickly detect sound coming in, working together to{" "}
            <G>counter</G> noise before it reaches your ear.
          </Side>
          <img
            src={bigBud}
            alt=""
            className="mx-auto mt-8 w-[260px] lg:absolute lg:right-0 lg:top-[250px] lg:mt-0 lg:w-[620px]"
          />
        </div>
      </div>

      {/* Silicone tips: 735px tall */}
      <div className={`border-b ${line} px-6 py-10 lg:h-[735px] lg:py-0`}>
        <div className="mx-auto max-w-[1100px] lg:pt-[110px]">
          <Side className="max-w-[640px] text-[12px] lg:text-[16px] lg:leading-[22px]">
            Now with an extra-small size, <B>four pairs of silicone tips</B> are
            included to fit a wider range of ears. The tips create an{" "}
            <G>acoustic seal</G> that closes in the sound — and secure AirPods
            Pro in place.
          </Side>
          <div className="mt-8 flex items-end justify-between gap-2 lg:mt-[110px]">
            {["XS", "S", "M", "L"].map((s) => (
              <div key={s} className="flex flex-col items-start gap-6">
                <img
                  src={tip}
                  alt=""
                  className="h-[70px] w-[70px] object-contain lg:h-[150px] lg:w-[120px]"
                />
                <span className="text-[11px] font-semibold text-[#00ff40] lg:text-[14px]">
                  {s}
                </span>
              </div>
            ))}
            <img
              src={bigBud}
              alt=""
              className="h-[140px] w-[120px] object-contain lg:h-[320px] lg:w-[280px]"
            />
          </div>
        </div>
      </div>

      {/* Adaptive Transparency + 48,000 */}
      <div
        className={`grid border-b ${line} md:grid-cols-[46%_1fr] lg:h-[480px]`}
      >
        <div className="flex items-start px-6 py-10 lg:px-0 lg:pl-[80px] lg:pt-[110px]">
          <Side className="max-w-[460px]">
            <B>Adaptive Transparency</B> harnesses the power of H2 to minimize
            the intensity of loud noises like sirens or power tools — so you can
            comfortably hear the world around you.
          </Side>
        </div>
        <div
          className={`flex flex-col items-center justify-start border-t ${line} px-6 py-10 text-center md:border-l md:border-t-0 lg:pt-[100px]`}
        >
          <p className="text-[13px] font-semibold text-[#00ff40] lg:text-[18px]">
            Reduces noise at
          </p>
          <p className="text-[56px] font-semibold leading-none lg:text-[110px]">
            48,000
          </p>
          <p className="text-[12px] font-semibold lg:text-[16px]">
            times per second.
          </p>
        </div>
      </div>

      {/* A higher level of control. */}
      <div
        className={`relative overflow-hidden border-b ${line} px-6 py-14 lg:h-[710px] lg:py-0`}
      >
        <div className="mx-auto max-w-[1100px] lg:pt-[270px]">
          <div className="flex items-center justify-between gap-4 text-[28px] font-semibold sm:text-[40px] lg:text-[56px]">
            <span>A higher level</span>
            <span>of control.</span>
          </div>
          <Side className="mt-8 max-w-[260px] lg:mt-[110px]">
            <B>Touch control</B> lets you easily manage playback functions from
            the stem. <G>Swipe up or down</G> to adjust volume, press to play
            and pause music or answer and end calls, or hold to switch between
            Active Noise Cancellation and Adaptive Transparency.
          </Side>
        </div>
        <img
          src={stem}
          alt=""
          className="absolute left-1/2 top-0 hidden h-[430px] w-[200px] -translate-x-1/2 object-contain lg:block"
        />
      </div>
    </section>
  );
}

export default ProNoise;
