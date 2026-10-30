import React from "react";
import { Bookmark, Truck } from "lucide-react";

export default function ProductHeader({ selectedModel, price, monthlyPrice }) {
  return (
    <div className="pt-8 pb-6 border-b border-[#d2d2d7]/50">
      <div className="max-w-[1024px] mx-auto px-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[40px] md:text-[48px] font-semibold tracking-tight text-[#1d1d1f] leading-none mb-2">
            Buy {selectedModel.name}
          </h1>
          <p className="text-[17px] text-[#6e6e73]">
            From ${price} or ${monthlyPrice}/mo. for 24 mo. before trade-in*
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end text-[12px] text-[#6e6e73] space-y-1.5">
          <div className="inline-flex items-center gap-1.5 bg-[#f5f5f7] px-3 py-1.5 rounded-full text-[#1d1d1f] font-medium">
            <Truck className="w-3.5 h-3.5 text-[#0071e3]" />
            <span>Fast, free 2-hour delivery or free pickup</span>
          </div>
          <button className="inline-flex items-center gap-1 text-[#0071e3] hover:underline pt-0.5">
            <Bookmark className="w-3.5 h-3.5" />
            <span>Save to Your Saved Items for later</span>
          </button>
        </div>
      </div>
    </div>
  );
}
