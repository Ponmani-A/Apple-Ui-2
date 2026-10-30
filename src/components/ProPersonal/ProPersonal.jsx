import dust from "../../assets/banner.jpg";
import { wrap, Label, Big, Para } from "../ProUI/ProUI";

const small =
  "text-[13px] font-semibold leading-[1.5] text-white lg:text-[15px] lg:leading-[22px]";

function ProPersonal() {
  return (
    <section className="bg-black pt-[60px] text-white lg:pt-[150px]">
      <div className={wrap}>
        <Label>Personalized listening</Label>
        <Big>
          Sound.
          <br />
          Tuned to you.
        </Big>
        <Para className="mt-6 max-w-[740px] lg:mt-[44px]">
          AirPods Pro take the listening experience to a new level of
          individuality. Personalized Spatial Audio with dynamic head tracking
          works with all your devices to immerse you deeper in all-around-you
          sound.2 And Adaptive EQ accounts for the fit of AirPods Pro, so you
          hear every frequency just as it was intended.
        </Para>
      </div>

      {/* Image: 1440 x 748 with 3 small texts */}
      <div className="relative mt-[60px] lg:mt-[190px]">
        <img
          src={dust}
          alt=""
          className="h-[320px] w-full object-cover sm:h-[480px] lg:h-[748px]"
        />
        <div className="space-y-4 bg-black/60 px-6 py-6 lg:absolute lg:left-[214px] lg:top-[40px] lg:w-[260px] lg:space-y-[24px] lg:bg-transparent lg:p-0">
          <p className={small}>
            To play sound that better suits your unique ear shape, Personalized
            Spatial Audio works with the TrueDepth camera on your iPhone to
            create a custom profile based on your head’s geometry. The profile
            syncs across your devices — delivering phenomenal sound every way
            you listen.2
          </p>
          <p className={small}>
            Dynamic head tracking now brings three-dimensional audio to Group
            FaceTime calls, so conversations feel like you’re in the same room
            with your friends and family.
          </p>
          <p className={small}>
            Adaptive EQ tunes music to your ears in real time, based on the fit
            of AirPods Pro. Inward-facing microphones measure what you’re
            hearing, then adjust the low to high frequencies of a song — so you
            get consistently detailed playback, every time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProPersonal;
