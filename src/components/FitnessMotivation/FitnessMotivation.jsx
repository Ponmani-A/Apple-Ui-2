import { wrap, H2, Body, Rail, NeonBtn } from "../FitnessUI/FitnessUI";
import t1 from "../../assets/fitnes.jpg";
import t2 from "../../assets/iphone14.jpg";
import t3 from "../../assets/airpods.jpg";
import t4 from "../../assets/watch.jpg";
import iphone from "../../assets/iphone14.jpg";
import ipad from "../../assets/ipad.jpg";
import appletv from "../../assets/tedlesso.jpg";
import watch from "../../assets/watch.jpg";

const trainers = [
  { img: t1, name: "Jenn Lau" },
  { img: t2, name: "Brian Cochrane" },
  { img: t3, name: "Nez Daily" },
  { img: t4, name: "Dice Iida-Klein" },
];

const devices = [
  { img: iphone, name: "iPhone" },
  { img: ipad, name: "iPad" },
  { img: appletv, name: "Apple TV" },
  { img: watch, name: "Apple Watch" },
];

function FitnessMotivation() {
  return (
    <section>
      <svg
        viewBox="0 0 746 746"
        className="mx-auto mt-[80px] w-[260px] sm:w-[420px] lg:mt-[200px] lg:w-[746px]"
      >
        <circle
          cx="373"
          cy="373"
          r="320"
          fill="none"
          stroke="#d9efb8"
          strokeWidth="105"
        />
        <circle
          cx="373"
          cy="373"
          r="320"
          fill="none"
          stroke="#aaff00"
          strokeWidth="105"
          strokeLinecap="round"
          strokeDasharray="1480 2011"
          transform="rotate(-90 373 373)"
        />
      </svg>

      <div className={`${wrap} mt-[80px] lg:mt-[200px]`}>
        <H2>
          All the motivation
          <br />
          you need.
        </H2>
        <Body className="mt-5 max-w-[690px] lg:mt-[24px]">
          Fitness+ trainers are welcoming individuals, chosen as much for their
          incredible expertise as for their friendly approach. They don’t just
          create their own routines, they also appear in each other’s videos and
          work with Apple Music experts to create motivating playlists. It’s a
          true collaboration that lifts the whole team up.
        </Body>
      </div>

      <div className="mt-[30px] lg:mt-[60px]">
        <Rail>
          {trainers.map((t) => (
            <div
              key={t.name}
              className="relative h-[200px] w-[200px] shrink-0 overflow-hidden rounded-[16px] lg:h-[280px] lg:w-[280px]"
            >
              <img
                src={t.img}
                alt={t.name}
                className="h-full w-full object-cover grayscale"
              />
              <p className="absolute left-4 top-4 text-[13px] font-semibold text-white lg:left-[26px] lg:top-[24px] lg:text-[17px]">
                {t.name}
              </p>
            </div>
          ))}
        </Rail>
      </div>

      <div
        className={`${wrap} mt-[60px] grid gap-10 md:grid-cols-3 lg:mt-[130px] lg:gap-[0px]`}
      >
        <div>
          <h3 className="text-[20px] font-semibold lg:text-[24px]">
            3 months free
          </h3>
          <p className="mt-3 max-w-[300px] text-[15px] font-semibold leading-[1.45] text-[#86868b] lg:text-[17px] lg:leading-[26px]">
            Buy an iPhone, Apple Watch, iPad, or Apple TV, and Apple Fitness+ is
            free for 3 months for new subscribers. Then $9.99/month or $79.99
            annually.1 Share Apple Fitness+ with up to five family members.2
          </p>
          <div className="mt-6">
            <NeonBtn>Shop now</NeonBtn>
          </div>
        </div>
        <div>
          <h3 className="text-[20px] font-semibold lg:text-[24px]">
            1 month free
          </h3>
          <p className="mt-3 max-w-[300px] text-[15px] font-semibold leading-[1.45] text-[#86868b] lg:text-[17px] lg:leading-[26px]">
            New subscribers get 1 month free, then pay $9.99/month or $79.99
            annually.* Share Apple Fitness+ with up to five family members.2
          </p>
          <div className="mt-6">
            <NeonBtn>Try it free</NeonBtn>
          </div>
        </div>
        <div>
          <h3 className="text-[20px] font-semibold lg:text-[24px]">
            Apple One
          </h3>
          <p className="mt-3 max-w-[300px] text-[15px] font-semibold leading-[1.45] text-[#86868b] lg:text-[17px] lg:leading-[26px]">
            Bundle Apple Fitness+ with five other great services for one low
            monthly price. And enjoy more for less.
          </p>
          <a
            href="#"
            className="mt-2 block text-[14px] font-semibold text-[#06c] hover:underline lg:text-[15px]"
          >
            Learn more
          </a>
          <div className="mt-4">
            <NeonBtn>Try Apple One free3</NeonBtn>
          </div>
        </div>
      </div>

      <div className={`${wrap} mt-[80px] lg:mt-[160px]`}>
        <H2>
          Apple Fitness+
          <br />
          compatibility.
        </H2>
        <Body className="mt-5 max-w-[690px] lg:mt-[30px]">
          To subscribe to Apple Fitness+ all you need is iPhone 8 or later with
          iOS 16.1 or later or Apple Watch Series 3 or later with watchOS 7.2 or
          later paired with iPhone 6s or later with iOS 14.3 or later.
        </Body>
        <Body className="mt-5 max-w-[690px] lg:mt-[30px]">
          You can also access Apple Fitness+ from your Apple TV with tvOS 14.3
          or later and iPad with iPadOS 14.3 or later.
        </Body>
        <Body className="mt-5 max-w-[690px] lg:mt-[30px]">
          To get the newest features, make sure your devices are running the
          latest software version.
        </Body>

        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:mt-[60px] lg:gap-0">
          {devices.map((d) => (
            <div key={d.name} className="flex flex-col items-center">
              <img
                src={d.img}
                alt=""
                className="h-[50px] w-[80px] object-contain lg:h-[80px] lg:w-[110px]"
              />
              <span className="mt-3 text-[12px] font-semibold lg:mt-[18px] lg:text-[14px]">
                {d.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FitnessMotivation;
