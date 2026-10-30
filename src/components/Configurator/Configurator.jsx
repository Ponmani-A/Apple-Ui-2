import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import iphone14Pro from "../../assets/iphone-14-pro.jpg";
import iphone14 from "../../assets/iphone-14.jpg";
import iphone13 from "../../assets/iphone-13.jpg";

// Color Options
export const COLORS = [
  {
    id: "purple",
    name: "Purple",
    hex: "#b8afe6",
    borderHex: "#9c91d4",
    image: iphone14Pro,
    boxImage: iphone14,
  },
  {
    id: "blue",
    name: "Blue",
    hex: "#2c4053",
    borderHex: "#1e2c39",
    image: iphone14,
    boxImage: iphone14Pro,
  },
  {
    id: "green",
    name: "Green",
    hex: "#dff0d8",
    borderHex: "#c2dfb8",
    image: iphone13,
    boxImage: iphone14,
  },
  {
    id: "red",
    name: "(PRODUCT)RED",
    hex: "#d82c35",
    borderHex: "#ba232b",
    image: iphone14,
    boxImage: iphone13,
  },
  {
    id: "white",
    name: "White",
    hex: "#f5f5f7",
    borderHex: "#d2d2d7",
    image: iphone13,
    boxImage: iphone14Pro,
  },
  {
    id: "black",
    name: "Black",
    hex: "#1f2124",
    borderHex: "#141517",
    image: iphone14Pro,
    boxImage: iphone14,
  },
];

// Storage Options
export const STORAGE_OPTIONS = [
  { size: "64GB", price: 599, monthly: 24.95, popular: false },
  { size: "128GB", price: 649, monthly: 27.04, popular: true },
  { size: "256GB", price: 749, monthly: 31.2, popular: false },
];

// Models
export const MODELS = [
  {
    id: "iphone-12",
    name: "iPhone 12",
    display: "6.1-inch Super Retina XDR display",
    basePrice: 599,
  },
  {
    id: "iphone-12-mini",
    name: "iPhone 12 mini",
    display: "5.4-inch Super Retina XDR display",
    basePrice: 499,
  },
];

export default function Configurator({
  selectedColor,
  setSelectedColor,
  selectedStorage,
  setSelectedStorage,
  selectedModel,
  setSelectedModel,
  tradeInOption,
  setTradeInOption,
  paymentOption,
  setPaymentOption,
  carrierOption,
  setCarrierOption,
  appleCareOption,
  setAppleCareOption,
  onOpenSpecialist,
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  const gallerySlides = [
    { title: "Lineup", image: iphone14Pro },
    { title: "Selected Color", image: selectedColor.image },
    { title: "Box Package", image: selectedColor.boxImage },
    { title: "Cable Included", image: iphone14 },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % gallerySlides.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + gallerySlides.length) % gallerySlides.length,
    );
  };

  const carriers = [
    { id: "att", name: "AT&T" },
    { id: "tmobile", name: "T-Mobile" },
    { id: "verizon", name: "Verizon" },
    { id: "unlocked", name: "Connect on your own later" },
  ];

  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* LEFT SIDE - IMAGE GALLERY */}
        <div className="lg:col-span-7 lg:sticky lg:top-24">
          <div className="relative bg-[#fbfbfd] rounded-3xl p-5 sm:p-10 flex flex-col items-center justify-center min-h-[380px] sm:min-h-[500px] overflow-hidden border border-[#f0f0f2]">
            {/* Product Image */}
            <div className="w-full h-[280px] sm:h-[380px] flex items-center justify-center">
              <img
                src={gallerySlides[activeSlide].image}
                alt={`${selectedModel.name} in ${selectedColor.name}`}
                className="max-h-full max-w-full object-contain drop-shadow-xl transition-all duration-500 hover:scale-[1.02]"
              />
            </div>

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              aria-label="Previous image"
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white hover:bg-gray-100 text-[#1d1d1f] shadow-md flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              aria-label="Next image"
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white hover:bg-gray-100 text-[#1d1d1f] shadow-md flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Pagination */}
            <div className="flex items-center gap-2 mt-5">
              {gallerySlides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Go to ${slide.title}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeSlide === idx
                      ? "w-6 bg-[#1d1d1f]"
                      : "w-2 bg-[#d2d2d7] hover:bg-[#86868b]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - CUSTOMIZATION */}
        <div className="lg:col-span-5 flex flex-col gap-9">
          {/* STEP 1 - MODEL */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Model.
              <span className="text-[#86868b] font-normal">
                {" "}
                Which is best for you?
              </span>
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {MODELS.map((model) => {
                const isSelected = selectedModel.id === model.id;

                return (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model)}
                    className={`p-3 sm:p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "border-[#0071e3] ring-1 ring-[#0071e3] bg-[#f5f9ff]"
                        : "border-[#d2d2d7] hover:border-[#86868b] bg-white"
                    }`}
                  >
                    <h3 className="font-semibold text-sm sm:text-base">
                      {model.name}
                    </h3>

                    <p className="text-xs text-[#86868b] mt-1 leading-snug">
                      {model.display}
                    </p>

                    <p className="text-xs font-medium mt-2">
                      From ${model.basePrice}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2 - COLOR */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Finish.
              <span className="text-[#86868b] font-normal">
                {" "}
                Pick your favorite color.
              </span>
            </h2>

            <p className="text-sm mb-4">
              Color —{" "}
              <span className="font-semibold">{selectedColor.name}</span>
            </p>

            <div className="flex flex-wrap items-center gap-4">
              {COLORS.map((color) => {
                const isSelected = selectedColor.id === color.id;

                return (
                  <button
                    key={color.id}
                    onClick={() => {
                      setSelectedColor(color);
                      setActiveSlide(1);
                    }}
                    title={color.name}
                    aria-label={color.name}
                    className={`w-8 h-8 rounded-full p-0.5 flex items-center justify-center transition-transform hover:scale-110 ${
                      isSelected
                        ? "ring-2 ring-offset-2 ring-[#0071e3]"
                        : "hover:ring-1 hover:ring-gray-400"
                    }`}
                  >
                    <span
                      className="w-full h-full rounded-full border border-black/10 shadow-inner"
                      style={{ backgroundColor: color.hex }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 3 - STORAGE */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Storage.
              <span className="text-[#86868b] font-normal">
                {" "}
                How much space do you need?
              </span>
            </h2>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {STORAGE_OPTIONS.map((opt) => {
                const isSelected = selectedStorage.size === opt.size;

                const finalPrice =
                  opt.price - (selectedModel.id === "iphone-12-mini" ? 100 : 0);

                const finalMonthly = (finalPrice / 24).toFixed(2);

                return (
                  <button
                    key={opt.size}
                    onClick={() => setSelectedStorage(opt)}
                    className={`p-2 sm:p-3 rounded-xl border text-center transition-all ${
                      isSelected
                        ? "border-[#0071e3] ring-1 ring-[#0071e3] bg-[#f5f9ff]"
                        : "border-[#d2d2d7] hover:border-[#86868b]"
                    }`}
                  >
                    <p className="text-lg sm:text-xl font-bold">{opt.size}</p>

                    <p className="text-[11px] text-[#6e6e73] mt-1">
                      From ${finalPrice}
                    </p>

                    <p className="text-[10px] sm:text-[11px] text-[#86868b]">
                      or ${finalMonthly}/mo.
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 4 - TRADE IN */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              Apple Trade In.
              <span className="text-[#86868b] font-normal">
                {" "}
                Get $40–$630 credit.
              </span>
            </h2>

            <p className="text-sm text-[#6e6e73] mb-3">
              Do you have a smartphone to trade in?
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setTradeInOption("yes")}
                className={`p-3 rounded-xl border text-left ${
                  tradeInOption === "yes"
                    ? "border-[#0071e3] ring-1 ring-[#0071e3] bg-[#f5f9ff]"
                    : "border-[#d2d2d7] hover:border-[#86868b]"
                }`}
              >
                <p className="font-semibold text-sm">Yes</p>
                <p className="text-[11px] text-gray-500 mt-1">
                  Save up to $630 with trade-in
                </p>
              </button>

              <button
                onClick={() => setTradeInOption("no")}
                className={`p-3 rounded-xl border text-left ${
                  tradeInOption === "no"
                    ? "border-[#0071e3] ring-1 ring-[#0071e3] bg-[#f5f9ff]"
                    : "border-[#d2d2d7] hover:border-[#86868b]"
                }`}
              >
                <p className="font-semibold text-sm">No</p>
                <p className="text-[11px] text-gray-500 mt-1">
                  Pay standard retail price
                </p>
              </button>
            </div>
          </div>

          {/* STEP 5 - CARRIER */}
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Carrier.
              <span className="text-[#86868b] font-normal">
                {" "}
                Choose your wireless provider.
              </span>
            </h2>

            <div className="grid grid-cols-2 gap-3">
              {carriers.map((car) => {
                const isSelected = carrierOption === car.id;

                return (
                  <button
                    key={car.id}
                    onClick={() => setCarrierOption(car.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "border-[#0071e3] ring-1 ring-[#0071e3] bg-[#f5f9ff]"
                        : "border-[#d2d2d7] hover:border-[#86868b]"
                    }`}
                  >
                    <p className="font-semibold text-sm">{car.name}</p>

                    <p className="text-[11px] text-[#86868b] mt-1">
                      {car.id === "unlocked"
                        ? "Works with any carrier"
                        : "Requires carrier plan"}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SPECIALIST BANNER */}
          <div className="bg-[#f5f5f7] rounded-2xl p-4 flex items-center gap-4 border border-[#e5e5ea] hover:shadow-sm transition">
            <img
              src={iphone14}
              alt="iPhone Specialist"
              className="w-14 h-14 rounded-full object-contain bg-white p-1 border-2 border-white shadow-sm flex-shrink-0"
            />

            <div className="flex-1">
              <p className="text-sm font-semibold">Need shopping help?</p>

              <p className="text-xs text-[#6e6e73]">
                Ask an iPhone Specialist online or over phone.
              </p>

              <button
                onClick={onOpenSpecialist}
                className="text-sm text-[#0071e3] hover:underline inline-flex items-center gap-1 mt-1"
              >
                Chat now
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
