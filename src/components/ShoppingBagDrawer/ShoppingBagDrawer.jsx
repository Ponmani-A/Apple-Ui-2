import React from "react";
import { X, Trash2, ArrowRight, ShieldCheck, Truck, Lock } from "lucide-react";

export default function ShoppingBagDrawer({
  isOpen,
  onClose,
  items,
  onRemoveItem,
}) {
  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs transition-opacity animate-fadeIn">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-slideLeft">
        {/* Header */}
        <div className="p-6 border-b border-[#d2d2d7] flex items-center justify-between">
          <div>
            <h2 className="text-[22px] font-semibold text-[#1d1d1f]">
              Review your Bag
            </h2>
            <p className="text-[12px] text-[#6e6e73]">
              Free delivery and free returns
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#f5f5f7] hover:bg-[#e8e8ed] flex items-center justify-center text-[#1d1d1f] transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="text-center py-16 text-[#86868b]">
              <p className="text-[17px] font-medium text-[#1d1d1f] mb-1">
                Your Bag is empty
              </p>
              <p className="text-[13px]">Items you add will appear here.</p>
            </div>
          ) : (
            items.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 pb-6 border-b border-[#e5e5ea]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 object-contain bg-[#fbfbfd] rounded-xl p-2 border border-[#f0f0f2]"
                />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="font-semibold text-[15px] text-[#1d1d1f]">
                      {item.title}
                    </h3>
                    <span className="font-semibold text-[15px] text-[#1d1d1f]">
                      ${item.price}.00
                    </span>
                  </div>
                  <p className="text-[12px] text-[#6e6e73] mt-0.5">
                    {item.color} • {item.storage}
                  </p>
                  <p className="text-[11px] text-[#0071e3] mt-1 flex items-center gap-1">
                    <Truck className="w-3 h-3" /> In stock • Free 2-hour
                    delivery
                  </p>
                  <button
                    onClick={() => onRemoveItem(index)}
                    className="text-[12px] text-red-500 hover:text-red-700 flex items-center gap-1 mt-3 transition"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Remove
                  </button>
                </div>
              </div>
            ))
          )}

          {items.length > 0 && (
            <div className="bg-[#f5f5f7] rounded-xl p-4 text-[12px] space-y-2 text-[#6e6e73]">
              <div className="flex items-center gap-2 font-medium text-[#1d1d1f]">
                <ShieldCheck className="w-4 h-4 text-[#0071e3]" />
                <span>Apple Store Quality Guarantee</span>
              </div>
              <p>
                Every purchase includes AppleCare 1-year limited warranty and 90
                days of complimentary technical support.
              </p>
            </div>
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#d2d2d7] bg-[#fbfbfd] space-y-4">
            <div className="space-y-1.5 text-[14px]">
              <div className="flex justify-between text-[#6e6e73]">
                <span>Subtotal</span>
                <span>${subtotal}.00</span>
              </div>
              <div className="flex justify-between text-[#6e6e73]">
                <span>Shipping</span>
                <span className="text-[#0071e3] font-medium">FREE</span>
              </div>
              <div className="flex justify-between font-semibold text-[17px] text-[#1d1d1f] pt-2 border-t border-[#e5e5ea]">
                <span>Total</span>
                <span>${subtotal}.00</span>
              </div>
            </div>

            <button
              onClick={() => alert("Proceeding to Apple Secure Checkout!")}
              className="w-full bg-[#0071e3] hover:bg-[#0077ed] text-white py-3 rounded-xl font-medium text-[15px] flex items-center justify-center gap-2 shadow-sm transition apple-button"
            >
              <Lock className="w-4 h-4" /> Check Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
