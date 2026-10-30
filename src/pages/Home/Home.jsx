import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProHero from "../../components/ProHero/ProHero";
import ProAudio from "../../components/ProAudio/ProAudio";
import ProNoise from "../../components/ProNoise/ProNoise";
import ProPersonal from "../../components/ProPersonal/ProPersonal";
import ProCase from "../../components/ProCase/ProCase";
import ProMagic from "../../components/ProMagic/ProMagic";
import WhichAirpods from "../../components/WhichAirpods/WhichAirpods";
import AirpodsBenefits from "../../components/AirpodsBenefits/AirpodsBenefits";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="bg-black text-white">
        <div className="mx-auto flex h-[51px] max-w-[980px] items-center justify-between border-b border-[#2a2a2c] px-5">
          <span className="text-[15px] font-semibold lg:text-[21px]">
            AirPods Pro (2nd generation)
          </span>
          <div className="flex items-center gap-4 text-[12px]">
            <a href="#" className="text-[#86868b]">
              Overview
            </a>
            <a href="#" className="hidden sm:inline">
              Tech Specs
            </a>
            <a href="#" className="hidden sm:inline">
              Compare
            </a>
            <a href="#" className="rounded-full bg-[#0071e3] px-3 py-1">
              Buy
            </a>
          </div>
        </div>
      </div>

      <ProHero />
      <ProAudio />
      <ProNoise />
      <ProPersonal />
      <ProCase />
      <ProMagic />

      <div className="bg-white">
        <WhichAirpods />
      </div>
      <div className="flow-root bg-[#f5f5f7] pb-24">
        <AirpodsBenefits />
      </div>

      <Footer />
    </>
  );
}
