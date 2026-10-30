import charger from "../../assets/airpods.jpg";
import caseOpen from "../../assets/airpods.jpg";
import caseClosed from "../../assets/airpods.jpg";
import caseSide from "../../assets/airpods.jpg";
import caseBottom from "../../assets/airpods.jpg";
import { wrap, Label, Big, Para, Side, B, G } from "../ProUI/ProUI";

const img = "mx-auto w-[220px] lg:w-[430px]";

function ProCase() {
  return (
    <section className="bg-black pt-[60px] text-white lg:pt-[140px]">
      <div className={wrap}>
        <Label>Case and battery life</Label>
        <Big className="max-w-[560px]">
          A case of unmistakable <span className="text-[#00ff40]">power.</span>
        </Big>
        <Para className="mt-6 max-w-[740px] lg:mt-[44px]">
          The new MagSafe Charging Case is loaded with features that make
          listening on the move especially convenient. An updated design offers
          more ways to keep track of the case, and extended battery life lets
          you listen, watch, and talk longer between charges. You won’t find a
          more capable case.
        </Para>
      </div>

      {/* Battery numbers + charger */}
      <div className="mt-[60px] grid border-y border-[#222] md:grid-cols-[50%_1fr] lg:mt-[110px] lg:h-[717px]">
        <div className="flex flex-col items-center justify-center gap-12 py-12 text-center lg:gap-[110px] lg:py-0">
          <div>
            <p className="text-[13px] font-semibold lg:text-[18px]">Up to</p>
            <p className="text-[64px] font-semibold leading-none lg:text-[110px]">
              <span className="text-[#00ff40]">6</span>hours
            </p>
            <p className="mx-auto max-w-[240px] text-[12px] font-semibold lg:text-[16px]">
              of listening time with Active Noise Cancellation enabled.3
            </p>
          </div>
          <div>
            <p className="text-[13px] font-semibold lg:text-[18px]">Up to</p>
            <p className="text-[64px] font-semibold leading-none lg:text-[110px]">
              <span className="text-[#00ff40]">30</span>hours
            </p>
            <p className="mx-auto max-w-[260px] text-[12px] font-semibold lg:text-[16px]">
              of total listening time with Active Noise Cancellation enabled,
              using the case.4
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden border-t border-[#222] px-6 py-10 md:border-l md:border-t-0 lg:p-0">
          <Side className="max-w-[360px] lg:absolute lg:left-[80px] lg:top-[60px]">
            Recharge the <B>MagSafe Charging Case</B> with an{" "}
            <G>Apple Watch charger or MagSafe charger</G>. You can also use the
            Lightning connector or a Qi-certified charger.
          </Side>
          <img
            src={charger}
            alt=""
            className="mx-auto mt-8 w-[260px] lg:absolute lg:right-0 lg:top-[220px] lg:mt-0 lg:w-[560px]"
          />
        </div>
      </div>

      {/* Case views */}
      <div className="px-6 py-14 text-center lg:py-[110px]">
        <img src={caseOpen} alt="" className={img} />
        <Side className="mx-auto mt-6 max-w-[280px] lg:mt-[40px]">
          A new <G>U1 chip</G> enables <B>Find My with Precision Finding</B> for
          your case, so you can exactly locate it. You can also use Find My with
          proximity view if you lose track of your AirPods Pro.5
        </Side>

        <img
          src={caseClosed}
          alt=""
          className={`${img} mt-[60px] lg:mt-[150px]`}
        />

        <div className="relative mx-auto mt-[60px] max-w-[760px] lg:mt-[150px]">
          <img
            src={caseSide}
            alt=""
            className="mx-auto w-[120px] lg:w-[140px]"
          />
          <Side className="mx-auto mt-4 max-w-[260px] text-left lg:absolute lg:left-[540px] lg:top-0 lg:mt-0 lg:w-[240px] lg:border-l lg:border-[#444] lg:pl-4">
            A <B>lanyard loop</B> allows you to attach the case to a backpack or
            handbag, so immersive sound is always within reach.6
          </Side>
        </div>

        <div className="relative mx-auto mt-[60px] max-w-[760px] lg:mt-[110px]">
          <img src={caseBottom} alt="" className={img} />
          <Side className="mx-auto mt-4 max-w-[260px] text-left lg:absolute lg:left-[540px] lg:top-[80px] lg:mt-0 lg:w-[240px] lg:border-l lg:border-[#444] lg:pl-4">
            The case’s <B>built-in speaker</B> plays sound to help you easily
            locate it, and <G>all-new tones</G> alert you when the battery is
            low or pairing is complete.
          </Side>
        </div>

        <img
          src={caseClosed}
          alt=""
          className={`${img} mt-[60px] lg:mt-[110px]`}
        />
        <Side className="mx-auto mt-6 max-w-[280px] lg:mt-[30px]">
          Both AirPods Pro and the MagSafe Charging Case are{" "}
          <B>IPX4 sweat and water resistant.</B>7
        </Side>
      </div>
    </section>
  );
}

export default ProCase;
