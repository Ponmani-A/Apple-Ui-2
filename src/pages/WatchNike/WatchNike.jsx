import Navbar from "../../components/Navbar/Navbar";
import WatchNikeHero from "../../components/WatchNikeHero/WatchNikeHero";
import WatchNikeRun from "../../components/WatchNikeRun/WatchNikeRun";
import WatchNikePace from "../../components/WatchNikePace/WatchNikePace";
import WatchNikeBands from "../../components/WatchNikeBands/WatchNikeBands";
import WatchNikeBenefits from "../../components/WatchNikeBenefits/WatchNikeBenefits";
import Footer from "../../components/Footer/Footer";

function WatchNike() {
  return (
    <>
      <Navbar />

      <div className="border-b border-[#d2d2d7] bg-white">
        <div className="mx-auto flex h-[51px] max-w-[980px] items-center justify-between px-5">
          <span className="text-[17px] font-semibold lg:text-[21px]">
            Apple Watch Nike
          </span>
          <a
            href="#"
            className="rounded-full bg-[#0071e3] px-3 py-1 text-[12px] text-white"
          >
            Shop bands
          </a>
        </div>
      </div>

      <main className="bg-white pb-[80px] lg:pb-[190px]">
        <WatchNikeHero />
        <WatchNikeRun />
        <WatchNikePace />
        <WatchNikeBands />
      </main>

      <WatchNikeBenefits />
      <Footer />
    </>
  );
}

export default WatchNike;
