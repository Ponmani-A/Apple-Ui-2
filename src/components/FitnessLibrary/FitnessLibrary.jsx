import { wrap, H2, Body, Rail } from "../FitnessUI/FitnessUI";
import img1 from "../../assets/fitnes.jpg";
import img2 from "../../assets/airpods.jpg";
import img3 from "../../assets/watch.jpg";
import banner from "../../assets/banner.jpg";

const workouts = [
  { img: img1, title: "Kickboxing with Nez", sub: "Pure Dance | 10 minutes" },
  { img: img2, title: "Strength with Sam", sub: "Pure Dance | 20 minutes" },
  { img: img3, title: "Time to Run", sub: "Rome" },
  { img: img1, title: "HIIT with Bakari", sub: "Pure Dance | 20 minutes" },
];

function FitnessLibrary() {
  return (
    <section>
      <div className={`${wrap} mt-[80px] lg:mt-[282px]`}>
        <H2>
          Always something new.
          <br />
          Just for you.
        </H2>
        <Body className="mt-5 max-w-[690px] lg:mt-[24px]">
          Fitness+ has the largest library of 4K Ultra HD fitness and wellness
          content in the world. And new workouts and meditations are added every
          week, from 5 to 45 minutes. It’s easy to stay motivated when there’s
          always something fresh.
        </Body>
      </div>

      <div className="mt-[30px] lg:mt-[59px]">
        <Rail>
          {workouts.map((w) => (
            <div key={w.title} className="w-[280px] shrink-0 lg:w-[496px]">
              <div className="relative h-[160px] overflow-hidden rounded-[16px] lg:h-[280px]">
                <img
                  src={w.img}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#a5ff00] lg:bottom-4 lg:left-4 lg:h-[44px] lg:w-[44px]">
                  <span className="h-[14px] w-[14px] rounded-full bg-black lg:h-[20px] lg:w-[20px]" />
                </span>
              </div>
              <p className="mt-3 text-[14px] font-semibold lg:mt-[14px] lg:text-[17px]">
                {w.title}
              </p>
              <p className="text-[13px] font-semibold text-[#86868b] lg:text-[17px]">
                {w.sub}
              </p>
            </div>
          ))}
        </Rail>
      </div>

      <img
        src={banner}
        alt=""
        className="mt-[60px] h-[260px] w-full object-cover sm:h-[400px] lg:mt-[120px] lg:h-[719px]"
      />

      <div className={`${wrap} mt-[40px] lg:mt-[71px]`}>
        <H2>
          Anywhere you want.
          <br />
          Anytime you want.
        </H2>
        <Body className="mt-5 max-w-[690px] lg:mt-[24px]">
          Work out or meditate where and when you want in places like your
          living room, a hotel room, the park, or the gym. Indoors or outdoors.
          With or without equipment. It’s easy to turn any space into a
          state-of-the-art studio.
        </Body>
      </div>

      <div className={`${wrap} relative mt-[60px] lg:mt-[160px]`}>
        <div className="font-light leading-[0.9] text-white">
          <p className="text-[64px] sm:text-[90px] lg:text-[150px]">26:19</p>
          <p className="text-[64px] sm:text-[90px] lg:text-[150px]">82</p>
          <p className="text-[64px] sm:text-[90px] lg:text-[150px]">154</p>
        </div>
        <div className="absolute right-[5%] top-0 flex flex-col items-center gap-4 lg:right-[8%] lg:gap-[40px]">
          <span className="h-[50px] w-[50px] rounded-full border-[7px] border-[#ffe34d] lg:h-[100px] lg:w-[100px] lg:border-[12px]" />
          <svg
            viewBox="0 0 24 24"
            className="h-[50px] w-[50px] text-[#ff3b1d] lg:h-[100px] lg:w-[100px]"
            fill="currentColor"
          >
            <path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11z" />
          </svg>
          <span className="text-[44px] font-light leading-none text-[#ff1a55] lg:text-[90px]">
            CAL
          </span>
        </div>
      </div>
    </section>
  );
}

export default FitnessLibrary;
