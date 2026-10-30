import AnnouncementBar from "../../components/AnnouncementBar/AnnouncementBar";
import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import StoreHero from "../../components/StoreHero/StoreHero";
import CategoryRail from "../../components/CategoryRail/CategoryRail";
import TheLatestCarousel from "../../components/TheLatestCarousel/TheLatestCarousel";
import HelpCarousel from "../../components/HelpCarousel/HelpCarousel";
import AppleDifference from "../../components/AppleDifference/AppleDifference";
import WatchBandStudio from "../../components/WatchBandStudio/WatchBandStudio";
import AccessoriesSection from "../../components/AccessoriesSection/AccessoriesSection";
import SoundVisionSection from "../../components/SoundVisionSection/SoundVisionSection";
import ExperienceApple from "../../components/ExperienceApple/ExperienceApple";
import SpecialSavings from "../../components/SpecialSavings/SpecialSavings";
import TradeInBanner from "../../components/TradeInBanner/TradeInBanner";
import DeviceComparison from "../../components/DeviceComparison/DeviceComparison";
import QuickLinks from "../../components/QuickLinks/QuickLinks";
import Footer from "../../components/Footer/Footer";
import ProductModal from "../../components/ProductModal/ProductModal";
import BagDrawer from "../../components/BagDrawer/BagDrawer";
import SpecialistChatModal from "../../components/SpecialistChatModal/SpecialistChatModal";
import SearchModal from "../../components/SearchModal/SearchModal";
import StoreLocatorModal from "../../components/StoreLocatorModal/StoreLocatorModal";
import TodayAtAppleModal from "../../components/TodayAtAppleModal/TodayAtAppleModal";
import GeniusBarModal from "../../components/GeniusBarModal/GeniusBarModal";
import { Check } from "lucide-react";

export default function Tv() {
  const [bagItems, setBagItems] = useState([
    {
      name: "iPhone 16 Pro (Desert Titanium)",
      price: 999.0,
      image:
        "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop",
      details: "256GB • Desert Titanium",
    },
  ]);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [isSpecialistOpen, setIsSpecialistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStoreLocatorOpen, setIsStoreLocatorOpen] = useState(false);
  const [isSessionModalOpen, setIsSessionModalOpen] = useState(false);
  const [isGeniusModalOpen, setIsGeniusModalOpen] = useState(false);
  const [activeProductModal, setActiveProductModal] = useState(null);
  const [activeCategory, setActiveCategory] = useState("iphone");
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToBag = (item) => {
    setBagItems((prev) => [...prev, item]);
    showToast(`Added ${item.name} to your Bag`);
  };

  const handleRemoveFromBag = (indexToRemove) => {
    setBagItems((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleClearBag = () => {
    setBagItems([]);
  };

  const scrollToTradeIn = () => {
    const el = document.getElementById("trade-in-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId === "accessories") {
      const el = document.getElementById("accessories-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (categoryId === "airpods" || categoryId === "homepod") {
      const el = document.getElementById("sound-vision-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (categoryId === "watch") {
      const el = document.getElementById("watch-studio");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      const el = document.getElementById("latest-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-[#f5f5f7] font-sf text-[#1d1d1f] flex flex-col justify-between selection:bg-[#0071e3] selection:text-white">
        {toastMessage && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#1d1d1f] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center space-x-2 text-xs font-medium animate-in slide-in-from-bottom duration-300">
            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
              <Check size={12} className="text-white" />
            </div>
            <span>{toastMessage}</span>
          </div>
        )}

        <div>
          <AnnouncementBar onOpenTradeIn={scrollToTradeIn} />
        </div>

        <main id="store" className="flex-grow">
          <StoreHero
            onOpenSpecialistChat={() => setIsSpecialistOpen(true)}
            onOpenStoreLocator={() => setIsStoreLocatorOpen(true)}
          />

          <CategoryRail
            activeCategory={activeCategory}
            onSelectCategory={handleCategorySelect}
          />

          <div id="latest-section">
            <TheLatestCarousel
              onSelectProduct={(product) => setActiveProductModal(product)}
            />
          </div>

          <div id="help-section">
            <HelpCarousel
              onOpenSpecialistChat={() => setIsSpecialistOpen(true)}
              onOpenSessionModal={() => setIsSessionModalOpen(true)}
              onOpenGeniusModal={() => setIsGeniusModalOpen(true)}
            />
          </div>

          <AppleDifference onOpenTradeIn={scrollToTradeIn} />

          <div id="watch-studio">
            <WatchBandStudio onAddToBag={handleAddToBag} />
          </div>

          <DeviceComparison
            onSelectProduct={(product) => setActiveProductModal(product)}
          />

          <div id="accessories-section">
            <AccessoriesSection onAddToBag={handleAddToBag} />
          </div>

          <div id="sound-vision-section">
            <SoundVisionSection onAddToBag={handleAddToBag} />
          </div>

          <div id="entertainment-section">
            <ExperienceApple />
          </div>

          <SpecialSavings />

          <div id="trade-in-section">
            <TradeInBanner />
          </div>

          <QuickLinks />
        </main>

        <Footer />

        <ProductModal
          product={activeProductModal}
          onClose={() => setActiveProductModal(null)}
          onAddToBag={handleAddToBag}
        />

        <BagDrawer
          isOpen={isBagOpen}
          onClose={() => setIsBagOpen(false)}
          bagItems={bagItems}
          onRemoveItem={handleRemoveFromBag}
          onClearBag={handleClearBag}
        />

        <SpecialistChatModal
          isOpen={isSpecialistOpen}
          onClose={() => setIsSpecialistOpen(false)}
        />

        <SearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onSelectProduct={(product) => setActiveProductModal(product)}
        />

        <StoreLocatorModal
          isOpen={isStoreLocatorOpen}
          onClose={() => setIsStoreLocatorOpen(false)}
        />

        <TodayAtAppleModal
          isOpen={isSessionModalOpen}
          onClose={() => setIsSessionModalOpen(false)}
        />

        <GeniusBarModal
          isOpen={isGeniusModalOpen}
          onClose={() => setIsGeniusModalOpen(false)}
        />
      </div>
    </div>
  );
}
