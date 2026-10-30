import { useState } from "react";
import { wrap, H2 } from "../FitnessUI/FitnessUI";

const faqs = [
  {
    q: "What is Apple Fitness+?",
    a: "Apple Fitness+ is a fitness and wellness subscription with thousands of video and audio workouts and guided meditations.",
  },
  {
    q: "Which devices do I need to use Apple Fitness+?",
    a: "All you need is iPhone 8 or later, or Apple Watch Series 3 or later paired with iPhone. You can also use iPad and Apple TV.",
  },
  {
    q: "What is the difference between the iPhone and Apple Watch experiences?",
    a: "With Apple Watch you see real-time metrics onscreen, like your heart rate, the Burn Bar, and your Activity rings.",
  },
  {
    q: "Where can I find Apple Fitness+?",
    a: "Find it in the Fitness app on iPhone, iPad, or Apple TV.",
  },
  {
    q: "Does Apple Fitness+ offer all levels of fitness?",
    a: "Yes. Workouts feature modifications to match your level, from beginner to advanced.",
  },
  {
    q: "What equipment is used in the Apple Fitness+ studio?",
    a: "The studio uses a range of equipment, from dumbbells and mats to bikes, treadmills, and rowers.",
  },
  {
    q: "Do I need any equipment for Apple Fitness+ workouts?",
    a: "Many workouts need no equipment. Each workout lists what you need beforehand.",
  },
  {
    q: "What equipment is recommended when I want to use my iPhone or iPad on the go?",
    a: "A stand to prop up your device and Bluetooth headphones make working out on the go easier.",
  },
  {
    q: "Does Apple Fitness+ work on my AirPlay-enabled TV and devices?",
    a: "Yes. You can AirPlay Apple Fitness+ to compatible TVs and devices.",
  },
  {
    q: "Does Apple Fitness+ keep my data private?",
    a: "Yes. Privacy is built into Apple Fitness+ from the start.",
  },
  {
    q: "I bought a new iPhone, Apple Watch, iPad, or Apple TV. How do I redeem the offer of three months free?",
    a: "Open the Fitness app on your new device and follow the steps to claim your offer.",
  },
];

function FitnessFaq() {
  const [open, setOpen] = useState(-1);

  return (
    <section className={`${wrap} mt-[80px] lg:mt-[160px]`}>
      <H2>Questions? Answers.</H2>
      <div className="mt-8 border-t border-[#d2d2d2] lg:mt-[60px]">
        {faqs.map((f, i) => (
          <div key={f.q} className="border-b border-[#d2d2d2]">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
              className="flex w-full items-center justify-between gap-4 py-5 text-left text-[15px] font-semibold leading-[1.35] lg:py-[26px] lg:text-[19px] lg:leading-6"
            >
              {f.q}
              <svg
                viewBox="0 0 16 16"
                className={`h-4 w-4 shrink-0 text-[#6e6e73] transition-transform ${open === i ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 6l5 5 5-5" />
              </svg>
            </button>
            {open === i && (
              <p className="pb-5 text-[15px] leading-6 text-[#424245] lg:text-[17px]">
                {f.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FitnessFaq;
