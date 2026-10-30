import React from "react";
import { ChevronRight, Leaf } from "lucide-react";

import iphone14Pro from "../../assets/iphone-14-pro.jpg";
import iphone14 from "../../assets/iphone-14.jpg";

export default function WhatsInTheBox({ selectedModel, selectedColor }) {
  // Reuse existing iPhone images
  const boxImage = selectedColor?.boxImage || iphone14Pro;

  const cableImage = iphone14;

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-white border-t border-[#d2d2d7]/50">
      <div className="max-w-[1024px] mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold text-center tracking-tight text-[#1d1d1f] mb-10 sm:mb-14">
          What’s in the Box
        </h2>

        {/* Box Card Container */}
        <div className="bg-[#f5f5f7] rounded-3xl p-6 sm:p-10 md:p-16 mb-12 sm:mb-14 max-w-[880px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-8 md:gap-12 items-end justify-items-center">
            {/* Item 1 - iPhone */}
            <div className="flex flex-col items-center w-full">
              <div className="h-[220px] sm:h-[260px] md:h-[280px] w-full flex items-center justify-center mb-5">
                <img
                  src={iphone14Pro}
                  alt={selectedModel?.name || "iPhone"}
                  className="max-h-[220px] sm:max-h-[240px] md:max-h-[260px] max-w-full object-contain drop-shadow-md transition-transform duration-300 hover:scale-105"
                />
              </div>

              <p className="text-base sm:text-[17px] font-medium text-[#1d1d1f] text-center">
                {selectedModel?.name || "iPhone"}
              </p>
            </div>

            {/* Item 2 - Reused iPhone Image */}
            <div className="flex flex-col items-center w-full">
              <div className="h-[220px] sm:h-[260px] md:h-[280px] w-full flex items-center justify-center mb-5">
                <img
                  src={cableImage}
                  alt="USB-C to Lightning Cable"
                  className="max-h-[220px] sm:max-h-[240px] md:max-h-[260px] max-w-full object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105"
                />
              </div>

              <p className="text-base sm:text-[17px] font-medium text-[#1d1d1f] text-center">
                USB-C to Lightning Cable
              </p>
            </div>
          </div>
        </div>

        {/* Environmental Goals Section */}
        <div className="max-w-[760px] mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 text-emerald-600 text-xs sm:text-[13px] font-semibold uppercase tracking-wider">
            <Leaf className="w-4 h-4" />

            <span>Our environmental goals</span>
          </div>

          <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#6e6e73]">
            As part of our efforts to reach{" "}
            <a href="#" className="text-[#0071e3] hover:underline">
              carbon neutrality by 2030
            </a>
            , {selectedModel?.name || "iPhone"} does not include a power adapter
            or EarPods. Included in the box is a USB-C to Lightning Cable that
            supports fast charging and is compatible with USB-C power adapters
            and computer ports.
          </p>

          <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#6e6e73]">
            We encourage you to re-use your current USB-A to Lightning cables,
            power adapters, and headphones, which are compatible with these
            iPhone models. But if you need any new Apple power adapters or
            headphones, they are available for purchase.
          </p>

          {/* Learn More */}
          <div className="pt-2">
            <a
              href="#"
              className="text-[#0071e3] text-[13px] sm:text-[14px] hover:underline inline-flex items-center gap-1 font-normal"
            >
              Learn more about Apple and the environment
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
