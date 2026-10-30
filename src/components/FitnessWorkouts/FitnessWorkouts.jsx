import { wrap, H2, Body } from "../FitnessUI/FitnessUI";

function ActivityRings() {
  return (
    <svg
      viewBox="0 0 830 830"
      className="mx-auto w-[300px] sm:w-[480px] lg:w-[830px]"
    >
      <defs>
        <linearGradient id="rOuter" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ff2d78" />
          <stop offset="1" stopColor="#ff1a55" />
        </linearGradient>
      </defs>

      <circle
        cx="415"
        cy="415"
        r="362"
        fill="none"
        stroke="url(#rOuter)"
        strokeWidth="105"
        strokeDasharray="2180 2275"
        strokeLinecap="round"
        transform="rotate(-90 415 415)"
      />

      <circle
        cx="415"
        cy="415"
        r="243"
        fill="none"
        stroke="#b8ff00"
        strokeWidth="105"
        strokeDasharray="1380 1527"
        strokeLinecap="round"
        transform="rotate(-90 415 415)"
      />

      <circle
        cx="415"
        cy="415"
        r="148"
        fill="none"
        stroke="#19dcf5"
        strokeWidth="105"
        strokeDasharray="780 930"
        strokeLinecap="round"
        transform="rotate(-90 415 415)"
      />
    </svg>
  );
}

function Figure() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[52px] w-[52px] lg:h-[70px] lg:w-[70px]"
      fill="black"
    >
      <circle cx="12" cy="4" r="2.2" />
      <path d="M9 8h6l2 5-2.2.8L14 11v4l3 6h-2.6L12 16l-2.4 5H7l3-6v-4l-1.8 2.8L6 13z" />
    </svg>
  );
}

const types = [
  "Kickboxing",
  "Strength",
  "HIIT",
  "Yoga",
  "Core",
  "Mindful Cooldown",
  "Pilates",
  "Dance",
  "Cycling",
  "Rowing",
  "Treadmill",
  "Meditation",
];

function FitnessWorkouts() {
  return (
    <section>
      <div className="mt-[60px] lg:mt-[270px]">
        <ActivityRings />
      </div>

      <div className={`${wrap} mt-[60px] lg:mt-[213px]`}>
        <H2>
          Workouts and meditations
          <br />
          that are just your type.
        </H2>
        <Body className="mt-5 max-w-[690px] lg:mt-[24px]">
          From HIIT to Yoga, there’s something for everyone. Choose from 12
          different workout types, meditations with specific themes like calm
          and sleep, and audio-guided walks and runs — each with the perfect
          music playlist.
        </Body>
      </div>

      <div className="no-scrollbar mt-[40px] overflow-x-auto lg:mt-[58px]">
        <div className="flex w-max gap-[27px] px-5 lg:pl-[calc(50%-490px)] lg:pr-[60px]">
          {types.map((t) => (
            <div
              key={t}
              className="flex w-[100px] shrink-0 flex-col items-center lg:w-[122px]"
            >
              <span className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#a5ff00] lg:h-[122px] lg:w-[122px]">
                <Figure />
              </span>
              <span className="mt-3 text-center text-[12px] font-semibold leading-[1.2] lg:mt-[16px] lg:text-[15px]">
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FitnessWorkouts;
