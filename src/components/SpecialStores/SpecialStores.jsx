import React from "react";

import business from "../../assets/business.jpg";
import government from "../../assets/government.jpg";
import military from "../../assets/military.jpg";

const stores = [
  {
    label: "BUSINESS",
    title: "From enterprise to small business, we’ll work with you.",
    image: business,
    dark: true,
  },
  {
    label: "GOVERNMENT",
    title:
      "Special pricing is available for state, local, and federal agencies.",
    image: government,
    dark: false,
  },
  {
    label: "VETERANS AND MILITARY",
    title: "Active and veteran members may be eligible for exclusive savings.",
    image: military,
    dark: false,
  },
];

function StoreCard({ item }) {
  return (
    <div
      className={`min-w-[240px] sm:min-w-[260px] md:min-w-[280px]
      w-[280px] h-[270px] sm:h-[300px]
      rounded-2xl overflow-hidden flex-shrink-0
      snap-start shadow-sm flex flex-col
      ${item.dark ? "bg-[#1d1d1f] text-white" : "bg-white text-[#1d1d1f]"}`}
    >
      {/* Card Content */}
      <div className="p-4 sm:p-5">
        <p
          className={`text-[9px] font-medium mb-3 ${
            item.dark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {item.label}
        </p>

        <h3 className="text-base sm:text-lg font-semibold leading-tight max-w-[250px]">
          {item.title}
        </h3>
      </div>

      {/* Card Image */}
      <div className="mt-auto h-[150px] sm:h-[175px] flex items-end justify-center px-2">
        <img
          src={item.image}
          alt={item.label}
          className="max-w-full max-h-full object-contain object-bottom"
        />
      </div>
    </div>
  );
}

export default function SpecialStores() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-8 py-10">
      {/* Heading */}
      <h2 className="text-lg sm:text-xl font-semibold mb-5">
        Special stores.
        <span className="text-gray-500">
          {" "}
          Exclusive savings for businesses, the military, and more.
        </span>
      </h2>

      {/* Horizontal Cards */}
      <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
        {stores.map((item, index) => (
          <StoreCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
