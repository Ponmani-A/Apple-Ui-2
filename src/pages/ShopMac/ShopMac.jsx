import Navbar from "../../components/Navbar/Navbar";
import ShopMacHeader from "../../components/ShopMacHeader/ShopMacHeader";
import ShopMacModels from "../../components/ShopMacModels/ShopMacModels";
import ShopMacGuides from "../../components/ShopMacGuides/ShopMacGuides";
import ShopMacAccessories from "../../components/ShopMacAccessories/ShopMacAccessories";
import ShopMacMore from "../../components/ShopMacMore/ShopMacMore";
import Footer from "../../components/Footer/Footer";

function ShopMac() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f5f5f7] pb-[80px]">
        <ShopMacHeader />
        <ShopMacModels />
        <ShopMacGuides />
        <ShopMacAccessories />
        <ShopMacMore />
      </main>
      <Footer />
    </>
  );
}

export default ShopMac;
