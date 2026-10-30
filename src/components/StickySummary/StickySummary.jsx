import React from "react";
import {
  ShoppingBag,
  MessageSquareText,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function StickySummary({
  selectedModel,
  selectedColor,
  selectedStorage,
  price,
  monthlyPrice,
  onAddToBag,
  onOpenSpecialist,
  addedSuccess,
}) {
  return (
    <>
      {/* Sticky Bottom Bar */}
      <aside
        aria-label="Purchase summary"
        className="fixed bottom-0 left-0 right-0 z-40 bg-[#f5f5f7]/90 backdrop-blur-xl border-t border-[#d2d2d7] py-3.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
      >
        <div className="max-w-[1024px] mx-auto flex items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <div className="flex items-center gap-2">
              <span
                className="w-3.5 h-3.5 rounded-full inline-block border border-black/10"
                style={{ backgroundColor: selectedColor.hex }}
              />
              <span className="font-semibold text-[15px] text-[#1d1d1f]">
                {selectedModel.name} {selectedStorage.size} {selectedColor.name}
              </span>
            </div>
            <div className="text-[13px] text-[#6e6e73]">
              <span className="font-semibold text-[#1d1d1f]">${price}.00</span>{" "}
              or <span>${monthlyPrice}/mo. for 24 mo.</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onAddToBag}
              className={`px-5 py-2 rounded-full font-medium text-[14px] flex items-center gap-2 transition-all apple-button ${
                addedSuccess
                  ? "bg-emerald-600 text-white"
                  : "bg-[#0071e3] hover:bg-[#0077ed] text-white shadow-sm"
              }`}
            >
              {addedSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4" /> Added to Bag
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" /> Add to Bag
                </>
              )}
            </button>
          </div>
        </div>
      </aside>

      {/* Floating Specialist Live Chat Bubble (as seen on bottom right of Apple site) */}
      <button
        onClick={onOpenSpecialist}
        aria-label="Ask an iPhone Specialist"
        className="fixed bottom-20 right-6 z-40 group flex items-center gap-2 bg-white rounded-full p-1.5 pr-4 shadow-[0_4px_24px_rgba(0,0,0,0.15)] border border-[#e5e5ea] hover:shadow-xl transition-all duration-300"
      >
        <div className="relative">
          <img
            src="/images/apple_specialist.jpg"
            alt="Sarah"
            className="w-10 h-10 rounded-full object-cover border border-[#e5e5ea]"
          />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
        </div>
        <div className="text-left hidden sm:block">
          <div className="text-[12px] font-semibold text-[#1d1d1f] leading-tight">
            Ask a Specialist
          </div>
          <div className="text-[10px] text-[#86868b] leading-tight">
            Sarah is online
          </div>
        </div>
      </button>
    </>
  );
}
