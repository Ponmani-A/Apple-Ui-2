import React, { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqs = [
    {
      q: "How does trade-in work?",
      a: "Whether you’re buying a new iPhone online or in an Apple Store, you can trade in your current device for credit toward your purchase or an Apple Gift Card. Just answer a few questions regarding your model and condition, and we will provide an estimated value. Once we receive your device and inspect it, your credit is applied to your original payment method.",
    },
    {
      q: "What makes an iPhone an iPhone?",
      a: "iPhone is designed to protect your privacy and give you control over your information. It’s built to last with durable materials, water and dust resistance, and long-term iOS updates. It’s also simple to use, seamlessly connects with your Mac, iPad, and Apple Watch, and comes with industry-leading support.",
    },
    {
      q: "Why should I buy an unlocked iPhone on apple.com?",
      a: "An unlocked iPhone purchased from apple.com gives you maximum flexibility. It isn’t tied to a single carrier plan or long-term contract, allowing you to choose your own carrier and switch plans anytime, both domestically and internationally.",
    },
    {
      q: "Will my new iPhone be unlocked?",
      a: "Yes. Every iPhone purchased from apple.com comes unlocked, with the exception of an iPhone purchased with AT&T Installment Plans. This means you can use your iPhone with any carrier that provides service.",
    },
    {
      q: "How do I transfer my data and set up my new iPhone?",
      a: "Transferring your data is easier than ever with Quick Start. Simply place your old iPhone near your new iPhone to begin transferring your data, settings, photos, and apps automatically over Wi-Fi. You can also restore from an iCloud backup or use the Move to iOS app from an Android device.",
    },
    {
      q: "Can I buy an iPhone with Apple Card Monthly Installments?",
      a: "Yes. If you choose Apple Card Monthly Installments, you can pay for your new iPhone over 24 months interest-free when you pay with Apple Card. You’ll also get 3% Daily Cash back right away on the full purchase price.",
    },
    {
      q: "What carrier options are available?",
      a: 'You can choose between AT&T, T-Mobile, Verizon, or Boost Mobile when purchasing your iPhone, or choose "Connect to any carrier later" to activate with your preferred wireless provider after your iPhone arrives.',
    },
    {
      q: "What if I don’t see my carrier listed here?",
      a: 'No problem. Just select "Connect on your own later" during checkout. You will receive an unlocked iPhone that works with hundreds of carriers worldwide. Simply insert your active nano-SIM card or download an eSIM profile provided by your carrier.',
    },
    {
      q: "Will my iPhone work worldwide?",
      a: "Yes. All iPhone models are world phones, supporting LTE and 5G bands globally. You can use your iPhone with local carrier networks when you travel abroad, or purchase international roaming plans through your domestic carrier.",
    },
    {
      q: "Can I return my iPhone if I don’t like it?",
      a: "Yes. Apple offers a 14-day return policy. If you aren’t completely satisfied with your purchase, you can return your undamaged iPhone within 14 days of receipt for a full refund.",
    },
    {
      q: "What is AppleCare+?",
      a: "Every iPhone comes with one year of hardware repair coverage through its limited warranty and up to 90 days of complimentary technical support. AppleCare+ extends your coverage to two years and includes unlimited incidents of accidental damage protection, 24/7 priority access to Apple experts, and express replacement service.",
    },
    {
      q: "Is connecting a new iPhone to a carrier difficult?",
      a: "Not at all. In most cases, if you provide your carrier details during purchase, your iPhone arrives already linked to your phone number and account. All you have to do is turn it on and follow the on-screen instructions.",
    },
    {
      q: "What’s the deal with eSIM?",
      a: "An eSIM is a digital SIM that eliminates the need for a physical nano-SIM card. It makes switching carriers, setting up multiple numbers, and traveling internationally more convenient and secure because it can’t be physically removed if your phone is lost or stolen.",
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-[#d2d2d7]/50">
      <div className="max-w-[880px] mx-auto px-4">
        {/* Title */}
        <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#1d1d1f] mb-10 text-left">
          Frequently Asked Questions
        </h2>

        {/* Accordion List */}
        <div className="divide-y divide-[#d2d2d7]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-5 transition-colors">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="text-[17px] md:text-[19px] font-normal text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors pr-4">
                    {faq.q}
                  </span>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center text-[#86868b] group-hover:text-[#0071e3] transition">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#0071e3]" : ""
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-3.5 pr-8 text-[14px] md:text-[15px] leading-relaxed text-[#6e6e73] animate-fadeIn">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
