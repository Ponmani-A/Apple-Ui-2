import appleLogo from "../../assets/Apple.png";
import { wrap } from "../FitnessUI/FitnessUI";
import oneImg from "../../assets/airpods.jpg";
import musicImg from "../../assets/watch.jpg";

const notes = [
  "* Apple Fitness+ requires iPhone 8 or later, or Apple Watch Series 3 or later paired with iPhone 6s or later. New subscribers only. $9.99/month after trial. Plan automatically renews until cancelled. Terms apply.",
  "Requires Family Sharing. See apple.com/family-sharing for more information.",
  "The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.",
  "A subscription is required for Apple Fitness+.",
  "Apple Fitness+ requires iPhone 8 or later with iOS 16.1 or later, or Apple Watch Series 3 or later with watchOS 7.2 or later paired with an iPhone 6s or later with iOS 14.3 or later.",
  "Fitness app on Apple TV requires tvOS 14.3 or later. Fitness app on iPad requires iPadOS 14.3 or later.",
  "To get the newest features, make sure your devices are running the latest software version.",
];

function FitnessBottom() {
  return (
    <section className={`${wrap} mt-[80px] lg:mt-[160px]`}>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="flex flex-col overflow-hidden rounded-[18px] bg-white p-[30px] lg:h-[530px] lg:p-[48px]">
          <p className="flex items-center gap-1 text-[24px] font-semibold lg:text-[30px]">
            <img
              src={appleLogo}
              alt=""
              className="h-[20px] w-auto invert lg:h-[26px]"
            />
            One
          </p>
          <p className="mt-4 max-w-[290px] text-[15px] font-semibold leading-[1.4] lg:text-[17px]">
            Bundle Apple Fitness+ with five other great services. And enjoy more
            for less.
          </p>
          <div className="mt-2 flex gap-8 text-[14px] font-semibold text-[#06c]">
            <a href="#" className="hover:underline">
              Try Apple One free3
            </a>
            <a href="#" className="hover:underline">
              Learn more
            </a>
          </div>
          <img
            src={oneImg}
            alt=""
            className="mt-auto h-[180px] w-full object-contain object-left lg:h-[230px]"
          />
        </div>

        <div className="flex flex-col overflow-hidden rounded-[18px] bg-white p-[30px] lg:h-[530px] lg:p-[48px]">
          <p className="flex items-center gap-1 text-[24px] font-semibold lg:text-[30px]">
            <img
              src={appleLogo}
              alt=""
              className="h-[20px] w-auto invert lg:h-[26px]"
            />
            Music
          </p>
          <p className="mt-4 max-w-[290px] text-[15px] font-semibold leading-[1.4] lg:text-[17px]">
            Access over 100 million songs. Save and download Fitness+ playlists.
          </p>
          <div className="mt-2 flex gap-8 text-[14px] font-semibold text-[#06c]">
            <a href="#" className="hover:underline">
              Try it free4
            </a>
            <a href="#" className="hover:underline">
              Learn more
            </a>
          </div>
          <img
            src={musicImg}
            alt=""
            className="mt-auto h-[180px] w-full object-contain lg:h-[230px]"
          />
        </div>
      </div>

      <div className="mt-[50px] space-y-2 text-[11px] leading-snug text-[#6e6e73]">
        {notes.map((n) => (
          <p key={n}>{n}</p>
        ))}
      </div>
    </section>
  );
}

export default FitnessBottom;
