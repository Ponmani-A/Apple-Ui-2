import React from "react";

import compareIphone from "../../assets/compare-iphone.jpg";
import specialistVideo from "../../assets/specialist-video.jpg";
import esimIphone from "../../assets/esim-iphone.jpg";

const guides = [
  {
    label: "COMPARE ALL MODELS",
    title: "Which iPhone is right for you?",
    image: compareIphone,
    type: "image",
  },
  {
    label: "NEW",
    title: "Shop with a Specialist over video.",
    description: "Choose your next iPhone in a guided, one-way video session.",
    image: specialistVideo,
    type: "dark",
  },
  {
    label: "WATCH AND LEARN",
    title: "How to trade in your iPhone.",
    description: "Get a quick one-minute overview.",
    type: "text",
  },
];

const support = [
  {
    label: "CARRIER CONNECTIVITY",
    title: "iPhone and eSIM — a new, simpler way to connect to your carrier.",
    image: esimIphone,
    type: "image",
  },
  {
    label: "WATCH AND LEARN",
    title: "Use Quick Start to set up and transfer data.",
    description: "Watch Jeannie's one-minute overview on how easy it can be.",
    type: "text",
  },
  {
    label: "WATCH AND LEARN",
    title: "Want to activate your new iPhone?",
    description: "Watch this simple 40-second overview from T-Mobile.",
    type: "text",
  },
];

function GuideCard({ item }) {
  return (
    <div
      className={`min-w-[270px] sm:min-w-[300px] md:min-w-[320px]
      w-[320px] h-[340px] sm:h-[350px]
      rounded-2xl overflow-hidden flex-shrink-0 snap-start
      shadow-sm hover:shadow-md transition-shadow
      flex flex-col
      ${item.type === "dark" ? "bg-[#10212c] text-white" : "bg-white text-[#1d1d1f]"}`}
    >
      <div className="p-5 sm:p-6">
        <p
          className={`text-[9px] font-semibold mb-3 ${
            item.type === "dark" ? "text-orange-400" : "text-gray-500"
          }`}
        >
          {item.label}
        </p>

        <h3 className="text-lg sm:text-xl font-semibold leading-tight max-w-[260px]">
          {item.title}
        </h3>

        {item.type === "dark" && (
          <p className="text-xs mt-2 max-w-[150px] leading-relaxed">
            {item.description}
          </p>
        )}
      </div>

      {item.image && (
        <div className="mt-auto flex-1 min-h-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain object-bottom"
          />
        </div>
      )}

      {item.type === "text" && (
        <div className="mt-auto p-5 flex items-end justify-between gap-3">
          <p className="text-[11px] leading-relaxed max-w-[230px]">
            {item.description}
          </p>
          <span className="w-5 h-5 rounded-full bg-gray-500 flex-shrink-0" />
        </div>
      )}
    </div>
  );
}

function HorizontalSection({ title, subtitle, items }) {
  return (
    <section className="mt-12">
      <h2 className="text-lg sm:text-xl font-semibold mb-5">
        {title}
        <span className="text-gray-500"> {subtitle}</span>
      </h2>

      <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {items.map((item, index) => (
          <GuideCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function ShoppingGuides() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pb-12">
      <HorizontalSection
        title="Shopping guides."
        subtitle="Can’t decide? Start here."
        items={guides}
      />

      <HorizontalSection
        title="Setup and support."
        subtitle="Our Specialists are here to help."
        items={support}
      />
    </div>
  );
}
