import Navbar from "../../components/Navbar/Navbar";
import DisplaysSubNav from "../../components/DisplaysSubNav/DisplaysSubNav";
import DisplaysHero from "../../components/DisplaysHero/DisplaysHero";
import DisplaysCompare from "../../components/DisplaysCompare/DisplaysCompare";
import DisplaysCards from "../../components/DisplaysCards/DisplaysCards";
import DisplaysBenefits from "../../components/DisplaysBenefits/DisplaysBenefits";
import Footer from "../../components/Footer/Footer";

function Displays() {
  return (
    <>
      <Navbar />
      <DisplaysSubNav />
      <DisplaysHero />
      <DisplaysCompare />
      <DisplaysCards />
      <DisplaysBenefits />
      <Footer />
    </>
  );
}

export default Displays;
