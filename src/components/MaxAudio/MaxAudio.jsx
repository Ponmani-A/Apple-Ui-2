import driver from "../../assets/airpods.jpg";
import woman from "../../assets/iphone14.jpg";
import greenCup from "../../assets/homepad.jpg";

const label = "text-[15px] font-semibold lg:text-[18px]";
const h2Big =
  "text-[44px] font-semibold leading-[1.09] sm:text-[64px] lg:text-[110px] lg:leading-[120px]";
const h2Mid =
  "text-[30px] font-semibold leading-[1.25] sm:text-[44px] lg:text-[60px] lg:leading-[81px]";
const body =
  "text-[17px] font-semibold leading-[1.4] lg:text-[21px] lg:leading-[27px]";
const grey =
  "text-[15px] leading-[22px] text-[#86868b] lg:text-[17px] lg:leading-6";
const white = "font-semibold text-white";

function MaxAudio() {
  return (
    <section className="bg-black pt-[60px] text-white lg:pt-[120px]">
      <div className="mx-auto max-w-[980px] px-5">
        <p className={label}>Audio quality</p>
        <h2 className={`mt-3 ${h2Big}`}>
          Sounds like
          <br />
          an epiphany.
        </h2>
        <p className={`mt-6 lg:ml-[480px] lg:max-w-[470px] ${body}`}>
          AirPods Max combine high-fidelity audio with industry-leading Active
          Noise Cancellation to deliver an unparalleled listening experience.
          Each part of their custom-built driver works to produce sound with
          ultra-low distortion across the audible range. From deep, rich bass to
          accurate mids and crisp, clean highs, you’ll hear every note with a
          new sense of clarity.
        </p>
      </div>

      <img
        src={driver}
        alt=""
        className="mt-10 w-[90%] max-w-[940px] object-contain lg:mt-[40px]"
      />

      <div className="mx-auto mt-[60px] max-w-[980px] px-5 lg:mt-[200px]">
        <h2 className={h2Mid}>
          Computational audio.
          <br />
          Key to performance.
        </h2>
        <p className={`mt-6 max-w-[640px] ${grey}`}>
          With a powerful Apple-designed H1 chip in each cup, our custom
          acoustic design, and advanced software, AirPods Max use computational
          audio to create a breakthrough listening experience. By tapping into
          each chip’s 10 audio cores, computational audio helps block outside
          noise, adapts audio to the fit and seal of your ear cushions, and
          makes movie scenes sound like they’re happening all around you.
        </p>
      </div>

      <div className="mx-auto mt-[60px] grid max-w-[1317px] gap-6 px-4 lg:mt-[100px] lg:grid-cols-[837px_456px] lg:justify-center lg:px-0">
        <div>
          <img
            src={woman}
            alt=""
            className="h-[420px] w-full object-cover lg:h-[1308px]"
          />
          <p className={`mt-4 ${grey}`}>
            …hearing, then adjust the frequencies of your music to deliver a
            rich, consistent experience that faithfully reproduces every note.
          </p>
        </div>
        <div>
          <img
            src={greenCup}
            alt=""
            className="h-[300px] w-full object-cover lg:h-[605px]"
          />
          <p className={`mt-4 ${grey}`}>
            Industry-leading <b className={white}>Active Noise Cancellation</b>{" "}
            counters external sound with equal anti-noise, allowing you to
            immerse yourself in what you’re listening to.
          </p>
          <p className={`mt-4 ${grey}`}>
            Press the noise control button to switch to{" "}
            <b className={white}>Transparency mode</b>, which lets outside sound
            in so you can interact naturally with your surroundings.
          </p>
        </div>
      </div>

      <div className="mt-[60px] flex min-h-[420px] items-end bg-[radial-gradient(ellipse_at_center,#3a3c3a_0%,#000_75%)] px-5 pb-[80px] lg:min-h-[900px]">
        <div className="mx-auto w-full max-w-[980px]">
          <div className="max-w-[420px]">
            <p className={grey}>
              <b className={white}>
                Personalized Spatial Audio with dynamic head tracking
              </b>{" "}
              gives you a theater-like experience for movies and shows, with
              sound that surrounds you.1 Using built-in gyroscopes and
              accelerometers, AirPods Max and your iPhone, iPad, Mac, or Apple
              TV track the subtle motion of your head, anchoring sounds to your
              device.
            </p>
            <p className={`mt-5 ${grey}`}>
              And with Apple Music, Personalized Spatial Audio with dynamic head
              tracking places sound all around you to create a three-dimensional
              listening experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MaxAudio;
