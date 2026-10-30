import appleLogo from "../../assets/Apple.png";
import setup from "../../assets/airpods.jpg";
import arPhone from "../../assets/iphone14.jpg";
import engrave from "../../assets/airpods.jpg";
import { wrap, Label, Big, Para, Side, B, G } from "../ProUI/ProUI";

// Round icon placeholder
const Icon = () => (
  <span className="block h-[24px] w-[24px] rounded-full border-2 border-white lg:h-[28px] lg:w-[28px]" />
);

const features = [
  {
    title: "Always-on “Hey Siri”",
    text: "Play music, make calls, get directions, or check your schedule simply by using your voice. Just say “Hey Siri” to activate your favorite personal assistant and stay on top of everyday tasks.10",
  },
  {
    title: "Seamless switching",
    text: "Automatic switching allows sound to move seamlessly between your iPhone, Apple Watch, iPad, Mac, and Apple TV. If you’re playing music on your Mac, you can answer a call on your iPhone — without having to switch devices.8",
  },
  {
    title: "AirPods and accessibility",
    text: "AirPods Pro go beyond the listening experience to assist with select hearing needs. Features like Conversation Boost bring focus to voices directly in front of you. Headphone Accommodations amplify frequencies you may need to hear clearly. And if you need to focus on a guest speaker in a bustling auditorium, Live Listen works with your iPhone to pick up sound at a distance.",
  },
  {
    title: "Announce Notifications",
    text: "Siri can read your important messages or alerts as they arrive — and you can reply to messages with just your voice.10",
  },
];

function ProMagic() {
  return (
    <section className="bg-black text-white">
      <div className={`${wrap} pt-[40px] lg:pt-[110px]`}>
        <Label>Magical experience</Label>
        <Big>
          Simplicity on
          <br />a grand scale.
        </Big>
        <Para className="mt-6 max-w-[740px] lg:mt-[44px]">
          From instant setup to Siri commands, AirPods Pro hold all the
          qualities that make the AirPods family so magical. And new features
          give you the ability to move through more tasks with unprecedented
          ease.
        </Para>
      </div>

      {/* Setup + Audio sharing: phone outline + case */}
      <div className="relative mx-auto mt-[60px] max-w-[1100px] px-6 lg:mt-[110px] lg:h-[1250px]">
        <div className="mx-auto h-[420px] w-[200px] rounded-[30px] border border-[#444] lg:absolute lg:left-[400px] lg:top-0 lg:h-[620px] lg:w-[290px] lg:rounded-[44px]" />
        <img
          src={setup}
          alt=""
          className="mx-auto mt-6 w-[150px] lg:absolute lg:left-[130px] lg:top-[410px] lg:mt-0 lg:w-[240px]"
        />
        <Side className="mt-6 max-w-[260px] lg:absolute lg:left-[790px] lg:top-[120px] lg:mt-0 lg:w-[250px]">
          <B>Easy, magical setup</B> Place AirPods Pro near your iPhone and tap
          Connect to seamlessly pair with every device in your iCloud account.8
          And if your case is custom engraved, the same engraving appears on
          your device’s screen — for an even more <G>personal</G> experience.
        </Side>
        <Side className="mt-6 max-w-[260px] lg:absolute lg:left-[790px] lg:top-[880px] lg:mt-0 lg:w-[250px]">
          <B>Audio Sharing</B> Easily share a song or show between any two sets
          of AirPods. Simply bring AirPods near the iPhone, iPad, or Apple TV
          you’re listening to and connect <G>instantly.</G>9
        </Side>
      </div>

      {/* Features 2 x 2 */}
      <div
        className={`${wrap} grid gap-10 pb-[60px] sm:grid-cols-2 lg:gap-x-[70px] lg:gap-y-[70px] lg:pb-[150px]`}
      >
        {features.map((f) => (
          <div key={f.title}>
            <Icon />
            <p className="mt-3 text-[14px] font-semibold lg:text-[17px]">
              {f.title}
            </p>
            <Side className="mt-1 text-[13px] lg:text-[15px] lg:leading-[22px]">
              {f.text}
            </Side>
          </div>
        ))}
      </div>

      {/* AR card */}
      <div className="bg-[#111]">
        <div className="mx-auto grid max-w-[1100px] items-center gap-6 px-6 py-10 md:grid-cols-2 lg:h-[445px] lg:py-0">
          <div>
            <Icon />
            <h3 className="mt-4 text-[28px] font-semibold leading-[1.15] lg:text-[44px] lg:leading-[50px]">
              Use AR to see
              <br />
              AirPods Pro.
            </h3>
            <p className="mt-3 text-[14px] font-semibold lg:text-[17px]">
              Open this page using Safari on your iPhone or iPad.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <img
              src={arPhone}
              alt=""
              className="h-[240px] w-[130px] rounded-[22px] border-[4px] border-[#333] object-cover object-top lg:h-[445px] lg:w-[240px] lg:rounded-[36px]"
            />
          </div>
        </div>
      </div>

      {/* Engraving card */}
      <div className="mt-[3px] bg-[#111]">
        <div className="mx-auto grid max-w-[1100px] items-center gap-6 px-6 py-10 md:grid-cols-2 lg:h-[451px] lg:py-0">
          <div>
            <h3 className="text-[28px] font-semibold leading-[1.15] lg:text-[44px] lg:leading-[50px]">
              Say it in a way
              <br />
              only you can.
            </h3>
            <p className="mt-3 max-w-[260px] text-[14px] font-semibold leading-[1.4] lg:text-[17px]">
              Discover new engraving options for AirPods. Mix emoji, text, and
              numbers.
            </p>
            <a
              href="#"
              className="mt-1 block text-[14px] font-semibold text-[#2997ff] hover:underline lg:text-[17px]"
            >
              Buy AirPods Pro
            </a>
          </div>
          <img src={engrave} alt="" className="w-full max-w-[560px]" />
        </div>
      </div>

      {/* Apple Music card (light) */}
      <div className="mt-[3px] bg-[#fafafa] text-black">
        <div className="mx-auto max-w-[1100px] px-6 py-10 lg:flex lg:h-[447px] lg:flex-col lg:justify-center lg:py-0">
          <p className="flex items-center gap-1 text-[18px] font-semibold lg:text-[22px]">
            <img
              src={appleLogo}
              alt=""
              className="h-[16px] w-auto invert lg:h-[20px]"
            />
            Music
          </p>
          <h3 className="mt-3 text-[28px] font-semibold leading-[1.15] lg:text-[44px] lg:leading-[50px]">
            Get 6 months of
            <br />
            Apple Music free
            <br />
            with your AirPods.*
          </h3>
          <a
            href="#"
            className="mt-2 text-[14px] font-semibold text-[#06c] hover:underline lg:text-[17px]"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProMagic;
