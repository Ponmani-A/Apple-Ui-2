import React from "react";
import tradein from "../../assets/tradein.jpg";
import applecard from "../../assets/applecard.jpg";

const offers = [
  {
    label: "APPLE TRADE IN",
    title:
      "Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.",
    image: tradein,
  },
  {
    label: "SPECIAL CARRIER DEALS AT APPLE",
    title: "Save up to $800 on the newest iPhone after trade-in.",
    image: null,
  },
  {
    label: "APPLE CARD",
    title:
      "Pay 0% APR over 24 months when you choose Apple Card Monthly Installments.",
    image: applecard,
  },
];

export default function WaysToSave() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        Ways to save.
        <span className="text-gray-500"> Find what works for you.</span>
      </h2>

      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow
            min-w-[270px] sm:min-w-[300px] md:min-w-[320px]
            w-[320px] h-[340px] sm:h-[350px]
            flex-shrink-0 overflow-hidden snap-start flex flex-col"
          >
            <div className="p-5 sm:p-6">
              <p className="text-[9px] font-semibold text-gray-500 mb-3">
                {offer.label}
              </p>

              <h3 className="text-lg sm:text-xl font-semibold leading-[1.2]">
                {offer.title}
              </h3>
            </div>

            {index === 1 && (
              <div className="flex flex-col items-center gap-5 mt-4">
                <p className="text-2xl font-bold text-black">🌐 AT&T</p>
                <p className="text-2xl font-semibold text-pink-600">T-Mobile</p>
                <p className="text-2xl font-bold text-black">
                  verizon<span className="text-red-500">✓</span>
                </p>
              </div>
            )}

            {offer.image && (
              <div className="mt-auto h-[140px] w-full flex items-center justify-center">
                <img
                  src={offer.image}
                  alt={offer.label}
                  className="w-full h-full object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
