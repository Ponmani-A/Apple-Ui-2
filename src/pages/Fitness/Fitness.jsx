import Navbar from "../../components/Navbar/Navbar";
import FitnessHero from "../../components/FitnessHero/FitnessHero";
import FitnessWorkouts from "../../components/FitnessWorkouts/FitnessWorkouts";
import FitnessLibrary from "../../components/FitnessLibrary/FitnessLibrary";
import FitnessDevices from "../../components/FitnessDevices/FitnessDevices";
import FitnessMotivation from "../../components/FitnessMotivation/FitnessMotivation";
import FitnessFaq from "../../components/FitnessFaq/FitnessFaq";
import FitnessBottom from "../../components/FitnessBottom/FitnessBottom";
import Footer from "../../components/Footer/Footer";

function Fitness() {
  return (
    <>
      <Navbar />

      {/* Local nav */}
      <div className="bg-[#e6e6e6]">
        <div className="mx-auto flex h-[51px] max-w-[980px] items-center justify-between px-5">
          <span className="text-[17px] font-semibold lg:text-[21px]">
            Apple Fitness+
          </span>
          <div className="flex items-center gap-4 text-[12px]">
            <a href="#" className="text-[#6e6e73]">
              Overview
            </a>
            <a href="#" className="hidden sm:inline">
              What’s New
            </a>
            <a
              href="#"
              className="rounded-full bg-[#a5ff00] px-3 py-1 font-semibold text-black"
            >
              Try it free*
            </a>
          </div>
        </div>
      </div>

      {/* Fitness app notification bar */}
      <div className="bg-white">
        <div className="mx-auto flex h-[60px] max-w-[980px] items-center justify-center gap-3 px-5 lg:h-[71px]">
          <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-[8px] bg-black lg:h-[38px] lg:w-[38px]">
            <span className="h-[18px] w-[18px] rounded-full border-[3px] border-[#a5ff00]" />
          </span>
          <p className="text-[12px] font-semibold leading-[1.3] lg:text-[14px]">
            Find it in the Fitness app on iPhone.
            <br />
            Update to iOS 16.1 or later.
          </p>
        </div>
      </div>

      <main className="bg-[#e6e6e6] pb-[100px]">
        <FitnessHero />
        <FitnessWorkouts />
        <FitnessLibrary />
        <FitnessDevices />
        <FitnessMotivation />
        <FitnessFaq />
        <FitnessBottom />
      </main>

      <Footer />
    </>
  );
}

export default Fitness;
