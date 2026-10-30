import { wrap, H2, Body, Rail } from "../FitnessUI/FitnessUI";
import ipadShot from "../../assets/ipad.jpg";
import phoneShot from "../../assets/fitnes.jpg";
import watchShot from "../../assets/watch.jpg";
import prog1 from "../../assets/phonecard.jpg";
import prog2 from "../../assets/fitnes.jpg";
import prog3 from "../../assets/airpods.jpg";

const programs = [
  { img: prog1, title: "14-Day HIIT and Strength Challenge" },
  { img: prog2, title: "Workouts for Beginners" },
  { img: prog3, title: "6 Weeks to Restart Your Fitness" },
];

function FitnessDevices() {
  return (
    <section>
      <div className={`${wrap} mt-[60px] lg:mt-[160px]`}>
        <H2>For every level. In every workout.</H2>
        <Body className="mt-5 max-w-[690px] lg:mt-[24px]">
          Fitness+ meets you wherever you are in your fitness journey, from
          beginner to advanced. Workouts feature modifications to match your
          level. Turn it up or turn it down — it’s all up to you.
        </Body>
        <div className="mt-8 h-[220px] overflow-hidden rounded-[24px] border-[6px] border-[#2a2a2c] bg-black sm:h-[360px] lg:mt-[60px] lg:h-[735px] lg:rounded-[40px] lg:border-[10px]">
          <img src={ipadShot} alt="" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className={`${wrap} mt-[80px] lg:mt-[250px]`}>
        <H2>
          Get with the Programs.
          <br />
          Conquer the Collections.
        </H2>
        <Body className="mt-5 max-w-[690px] lg:mt-[24px]">
          Complete a Program designed for a specific season in life. Or take on
          a Collection curated from the Fitness+ library to help you reach a
          goal. Our Programs and Collections are expertly created for making
          progress.
        </Body>
      </div>
      <div className="mt-[30px] lg:mt-[60px]">
        <Rail>
          {programs.map((p) => (
            <div
              key={p.title}
              className="relative h-[160px] w-[280px] shrink-0 overflow-hidden rounded-[16px] lg:h-[280px] lg:w-[496px]"
            >
              <img src={p.img} alt="" className="h-full w-full object-cover" />
              <p className="absolute left-4 top-4 max-w-[220px] text-[13px] font-semibold leading-[1.25] text-white lg:left-[26px] lg:top-[26px] lg:text-[17px]">
                {p.title}
              </p>
            </div>
          ))}
        </Rail>
      </div>

      <div className={`${wrap} mt-[80px] lg:mt-[170px]`}>
        <H2>Now all you need is iPhone.</H2>
        <Body className="mt-5 max-w-[690px] lg:mt-[24px]">
          With just your iPhone, you can subscribe and access over 3000 workouts
          and meditations. Stay motivated with onscreen coaching, timers, and
          trainer callouts as you work out. And track your daily fitness goals
          with your Move ring.
        </Body>
        <div className="mt-8 h-[180px] max-w-[889px] overflow-hidden rounded-[32px] border-[6px] border-[#2a2a2c] bg-black sm:h-[300px] lg:mt-[60px] lg:h-[431px] lg:rounded-[56px] lg:border-[10px]">
          <img src={phoneShot} alt="" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className={`${wrap} mt-[80px] lg:mt-[200px]`}>
        <H2>Take it further with Apple Watch.</H2>
        <Body className="mt-5 max-w-[690px] lg:mt-[24px]">
          See real-time, personalized metrics onscreen, like your heart rate,
          the Burn Bar, and all three Activity rings. And experience the freedom
          of audio-guided walks, runs, and meditations with just your watch and
          Bluetooth headphones.
        </Body>
        <div className="mt-8 h-[200px] overflow-hidden rounded-[32px] bg-black sm:h-[320px] lg:mt-[60px] lg:h-[435px] lg:w-[1093px] lg:rounded-[56px]">
          <img src={watchShot} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export default FitnessDevices;
