import Navbar from "../../components/Navbar/Navbar";
import MaxHero from "../../components/MaxHero/MaxHero";
import MaxDesign from "../../components/MaxDesign/MaxDesign";
import MaxColors from "../../components/MaxColors/MaxColors";
import MaxAudio from "../../components/MaxAudio/MaxAudio";
import MaxMagic from "../../components/MaxMagic/MaxMagic";
import MaxBattery from "../../components/MaxBattery/MaxBattery";
import MaxCards from "../../components/MaxCards/MaxCards";
import WhichAirpods from "../../components/WhichAirpods/WhichAirpods";
import AirpodsBenefits from "../../components/AirpodsBenefits/AirpodsBenefits";
import Footer from "../../components/Footer/Footer";

function AirpodsMax() {
  return (
    <>
      <Navbar />

      <div className="border-b border-[#d2d2d7] bg-white">
        <div className="mx-auto flex h-[51px] max-w-[980px] items-center justify-between px-5">
          <span className="text-[17px] font-semibold lg:text-[21px]">
            AirPods Max
          </span>
          <div className="flex items-center gap-4 text-[12px]">
            <a href="#" className="text-[#6e6e73]">
              Overview
            </a>
            <a href="#" className="hidden sm:inline">
              Tech Specs
            </a>
            <a href="#" className="hidden sm:inline">
              Compare
            </a>
            <a
              href="#"
              className="rounded-full bg-[#0071e3] px-3 py-1 text-white"
            >
              Buy
            </a>
          </div>
        </div>
      </div>

      <MaxHero />
      <MaxDesign />
      <MaxColors />
      <MaxAudio />
      <MaxMagic />
      <MaxBattery />
      <MaxCards />

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

export default AirpodsMax;
