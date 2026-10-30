import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductHeader from "../../components/ProductHeader/ProductHeader";
import Configurator, {
  COLORS,
  STORAGE_OPTIONS,
  MODELS,
} from "../../components/Configurator/Configurator";
import WhatsInTheBox from "../../components/WhatsInTheBox/WhatsInTheBox";
import ComparisonTable from "../../components/ComparisonTable/ComparisonTable";
import FaqSection from "../../components/FaqSection/FaqSection";
import Footer from "../../components/Footer/Footer";
import StickySummary from "../../components/StickySummary/StickySummary";
import SpecialistChatModal from "../../components/SpecialistChatModal/SpecialistChatModal";
import ShoppingBagDrawer from "../../components/ShoppingBagDrawer/ShoppingBagDrawer";

export default function Support() {
  const [selectedModel, setSelectedModel] = useState(MODELS[0]); // iPhone 12
  const [selectedColor, setSelectedColor] = useState(COLORS[0]); // Purple (matching Figma design)
  const [selectedStorage, setSelectedStorage] = useState(STORAGE_OPTIONS[1]); // 128GB (matching Figma design)
  const [tradeInOption, setTradeInOption] = useState("no");
  const [carrierOption, setCarrierOption] = useState("unlocked");
  const [paymentOption, setPaymentOption] = useState("full");
  const [isSpecialistOpen, setIsSpecialistOpen] = useState(false);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const [bagItems, setBagItems] = useState([
    {
      title: "iPhone 12",
      color: "Purple",
      storage: "128GB",
      price: 649,
      image: "/images/iphone_12_hero.jpg",
    },
  ]);

  // Dynamic price calculation
  const modelOffset = selectedModel.id === "iphone-12-mini" ? -100 : 0;
  const tradeInDiscount = tradeInOption === "yes" ? 120 : 0;
  const currentPrice = selectedStorage.price + modelOffset - tradeInDiscount;
  const currentMonthly = (currentPrice / 24).toFixed(2);

  const handleAddToBag = () => {
    const newItem = {
      title: selectedModel.name,
      color: selectedColor.name,
      storage: selectedStorage.size,
      price: currentPrice,
      image: selectedColor.image,
    };
    setBagItems((prev) => [...prev, newItem]);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      setIsBagOpen(true);
    }, 600);
  };

  const handleRemoveItem = (index) => {
    setBagItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] flex flex-col font-sf selection:bg-[#0071e3] selection:text-white pb-20">
      {/* 1. Global Navbar + Trade-In Ribbon */}
      <Navbar bagCount={bagItems.length} onOpenBag={() => setIsBagOpen(true)} />

      {/* 2. Product Header */}
      <ProductHeader
        selectedModel={selectedModel}
        price={currentPrice}
        monthlyPrice={currentMonthly}
      />

      {/* 3. Main Configurator (Gallery + Color + Storage + Trade-in + Carrier + Specialist) */}
      <main className="flex-1">
        <Configurator
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedStorage={selectedStorage}
          setSelectedStorage={setSelectedStorage}
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          tradeInOption={tradeInOption}
          setTradeInOption={setTradeInOption}
          carrierOption={carrierOption}
          setCarrierOption={setCarrierOption}
          paymentOption={paymentOption}
          setPaymentOption={setPaymentOption}
          onOpenSpecialist={() => setIsSpecialistOpen(true)}
        />

        {/* 4. What's in the Box Section */}
        <WhatsInTheBox
          selectedModel={selectedModel}
          selectedColor={selectedColor}
        />

        {/* 5. Which iPhone is right for you? Comparison Table */}
        <ComparisonTable />

        {/* 6. Frequently Asked Questions Accordion */}
        <FaqSection />
      </main>

      {/* 7. Footer with Footnotes, Navigation Links, and Copyright */}
      <Footer />

      {/* 8. Sticky Add-to-Bag Summary Bar & Floating Specialist Button */}
      <StickySummary
        selectedModel={selectedModel}
        selectedColor={selectedColor}
        selectedStorage={selectedStorage}
        price={currentPrice}
        monthlyPrice={currentMonthly}
        onAddToBag={handleAddToBag}
        onOpenSpecialist={() => setIsSpecialistOpen(true)}
        addedSuccess={addedSuccess}
      />

      {/* 9. Interactive Specialist Live Chat Modal */}
      <SpecialistChatModal
        isOpen={isSpecialistOpen}
        onClose={() => setIsSpecialistOpen(false)}
        selectedModel={selectedModel}
        selectedColor={selectedColor}
      />

      {/* 10. Apple Store Bag Slide-Over Drawer */}
      <ShoppingBagDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        items={bagItems}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
}
