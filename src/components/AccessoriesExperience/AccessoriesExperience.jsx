import React from "react";

import accessoriesMain from "../../assets/accessories-main.jpg";
import yellowCase from "../../assets/iphone-case-yellow.jpg";
import purpleCase from "../../assets/iphone-case-purple.jpg";
import musicImage from "../../assets/apple-music.jpg";
import fitnessImage from "../../assets/fitness.jpg";
import airpodsImage from "../../assets/airpods-compare-2nd.png";

const accessories = [
  {
    type: "feature",
    title: "All in a snap.",
    description:
      "Attach a MagSafe case, wallet, or both. There's a mix to match any style.",
    image: accessoriesMain,
  },
  {
    name: "iPhone 14 Silicone Case with MagSafe - Canary Yellow",
    image: yellowCase,
    colors: ["#f8e77b", "#a5ad99", "#d7c7bc", "#e6c3a9", "#b7c9a8"],
    price: "$49.00",
    badge: "New",
  },
  {
    name: "iPhone 14 Pro Leather Case with MagSafe - Ink",
    image: purpleCase,
    colors: ["#805b4e", "#303030", "#55545b", "#333333", "#ed7353"],
    price: "$59.00",
  },
  {
    name: "iPhone Leather Wallet with MagSafe",
    image: purpleCase,
    colors: ["#805b4e", "#303030", "#55545b"],
    price: "$59.00",
  },
];

const experiences = [
  {
    label: "APPLE MUSIC",
    title: "Rihanna's iconic hits now in Spatial Audio.",
    image: musicImage,
    type: "dark",
  },
  {
    label: "FITNESS+",
    title: "Get 3 months free when you buy any iPhone.",
    image: fitnessImage,
    type: "light",
  },
  {
    label: "AIRPODS",
    title: "Magic runs in the family.",
    image: airpodsImage,
    type: "light",
  },
];

function AccessoriesCard({ item }) {
  if (item.type === "feature") {
    return (
      <div className="bg-white rounded-xl shadow-sm min-w-[200px] sm:min-w-[220px] w-[220px] h-[250px] sm:h-[280px] flex-shrink-0 p-4 sm:p-5 snap-start flex flex-col">
        <h3 className="text-sm font-semibold">{item.title}</h3>

        <p className="text-[10px] leading-relaxed mt-1 text-gray-600">
          {item.description}
        </p>

        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[150px] object-contain mt-auto"
        />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm min-w-[155px] sm:min-w-[190px] w-[190px] h-[250px] sm:h-[280px] flex-shrink-0 p-4 flex flex-col snap-start">
      <div className="h-[140px] flex items-center justify-center">
        <img
          src={item.image}
          alt={item.name}
          className="h-full max-w-full object-contain"
        />
      </div>

      <div className="flex items-center justify-center gap-1 mt-2">
        {item.colors.map((color, index) => (
          <span
            key={index}
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
        <span className="text-[9px] text-gray-500">+</span>
      </div>

      <div className="mt-auto">
        {item.badge && (
          <p className="text-[9px] text-orange-600 mb-1">{item.badge}</p>
        )}

        <h3 className="text-[10px] font-semibold leading-tight">{item.name}</h3>

        <p className="text-[9px] mt-3">{item.price}</p>
      </div>
    </div>
  );
}

function ExperienceCard({ item }) {
  return (
    <div
      className={`min-w-[250px] sm:min-w-[300px] w-[300px] h-[250px] sm:h-[280px]
      rounded-xl overflow-hidden shadow-sm flex-shrink-0 snap-start flex flex-col
      ${item.type === "dark" ? "bg-black text-white" : "bg-white text-[#1d1d1f]"}`}
    >
      <div className="p-4 sm:p-5">
        <p
          className={`text-[9px] mb-2 ${
            item.type === "dark" ? "text-white" : "text-gray-500"
          }`}
        >
          {item.label}
        </p>

        <h3 className="text-sm font-semibold leading-snug max-w-[250px]">
          {item.title}
        </h3>
      </div>

      <div className="mt-auto h-[170px]">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default function AccessoriesExperience() {
  return (
    <div className="max-w-[1200px] mx-auto px-5 sm:px-8 pb-12">
      {/* Accessories Section */}
      <section className="mt-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          Accessories.
          <span className="text-gray-500">
            {" "}
            Essentials that pair perfectly with your favorite devices.
          </span>
        </h2>

        <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {accessories.map((item, index) => (
            <AccessoriesCard key={index} item={item} />
          ))}
        </div>
      </section>

      {/* iPhone Experience Section */}
      <section className="mt-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          The iPhone experience.
          <span className="text-gray-500">
            {" "}
            Designed to connect with everything Apple.
          </span>
        </h2>

        <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {experiences.map((item, index) => (
            <ExperienceCard key={index} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
