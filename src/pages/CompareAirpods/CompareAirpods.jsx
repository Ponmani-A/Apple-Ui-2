import CompareHeader from "../../components/CompareHeader/CompareHeader";
import QuickLook from "../../components/QuickLook/QuickLook";
import CompareSpecs from "../../components/CompareSpecs/CompareSpecs";
import CompareCompat from "../../components/CompareCompat/CompareCompat";
import CompareBottom from "../../components/CompareBottom/CompareBottom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function CompareAirpods() {
  return (
    <>
      <Navbar />

      <main className="bg-white pb-[100px]">
        <div className="no-scrollbar mx-auto max-w-[1020px] overflow-x-auto px-5">
          <div className="min-w-[780px]">
            <CompareHeader />
            <QuickLook />
            <CompareSpecs />
            <CompareCompat />
          </div>
        </div>
      </main>

      <CompareBottom />
      <Footer />
    </>
  );
}

export default CompareAirpods;
