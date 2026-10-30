import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import iphone14Pro from "../../assets/iphone-14-pro.jpg";
import iphone14 from "../../assets/iphone-14.jpg";
import iphone13 from "../../assets/iphone-13.jpg";
import WaysToSave from "../../components/WaysToSave/WaysToSave";
import ShoppingGuides from "../../components/ShoppingGuides/ShoppingGuides";
import AccessoriesExperience from "../../components/AccessoriesExperience/AccessoriesExperience";
import SpecialStores from "../../components/SpecialStores/SpecialStores";
const products = [
  {
    badge: "NEW",
    name: "iPhone 14 Pro & iPhone 14 Pro Max",
    image: iphone14Pro,
  },
  {
    badge: "NEW",
    name: "iPhone 14 & iPhone 14 Plus",
    image: iphone14,
  },
  {
    badge: "",
    name: "iPhone 13 mini & iPhone 13",
    image: iphone13,
  },
];

const tabs = [
  "All Models",
  "Ways to Save",
  "Shopping Guides",
  "Setup and Support",
  "Accessories",
  "The iPhone Experience",
];

export default function Iphone() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f]">
        <section className="max-w-[1200px] mx-auto px-5 sm:px-8 pt-10 pb-16">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
            <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Shop iPhone
            </h1>

            <div className="flex flex-col gap-3 text-xs">
              <div className="flex items-center gap-3">
                <span className="text-xl">👩🏻</span>
                <div>
                  <p className="font-semibold">Need shopping help?</p>
                  <a href="#" className="text-blue-600 hover:underline">
                    Ask an iPhone Specialist
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xl">♧</span>
                <div>
                  <p className="font-semibold">Visit an Apple Store</p>
                  <a href="#" className="text-blue-600 hover:underline">
                    Find one near you
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-b border-gray-200 overflow-x-auto">
            <div className="flex items-center gap-7 sm:gap-9 min-w-max pb-3 text-xs sm:text-sm">
              {tabs.map((tab, index) => (
                <a
                  href="#"
                  key={tab}
                  className={`whitespace-nowrap pb-1 ${
                    index === 0
                      ? "font-semibold border-b border-[#1d1d1f]"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {tab}
                </a>
              ))}
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold mt-9 mb-5">
            All models.
            <span className="text-gray-500"> Take your pick.</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col min-h-[390px]"
              >
                <div className="min-h-[85px]">
                  {product.badge && (
                    <p className="text-[10px] text-orange-600 font-bold mb-1">
                      {product.badge}
                    </p>
                  )}

                  <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                    {product.name}
                  </h3>
                </div>

                <div className="h-[175px] flex items-center justify-center my-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full max-w-full object-contain"
                  />
                </div>

                <div className="flex justify-center items-center gap-1.5 mt-2 mb-4">
                  {(product.colors || []).map((color, colorIndex) => (
                    <span
                      key={colorIndex}
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-2">
                  <div className="text-[11px] leading-relaxed">
                    <p>{product.price}</p>
                    <p>before trade-in. *</p>
                  </div>

                  <button className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs rounded-full px-4 py-1.5 transition-colors">
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
          <WaysToSave />
          <ShoppingGuides />
          <AccessoriesExperience />
          <SpecialStores />
        </section>
      </main>
      <Footer />
    </>
  );
}
