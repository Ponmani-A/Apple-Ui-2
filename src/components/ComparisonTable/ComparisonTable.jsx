import React from "react";
import {
  ChevronRight,
  Smartphone,
  Zap,
  Shield,
  Battery,
  Cpu,
  Radio,
  Sparkles,
} from "lucide-react";

export default function ComparisonTable() {
  const models = [
    {
      name: "iPhone 14 Pro",
      tagline: "The ultimate iPhone.",
      price: "From $999",
      colors: ["#594f63", "#e3e4e6", "#f4e8ce", "#403e3d"],
      screen: "6.7″ or 6.1″",
      screenType: "Super Retina XDR display with ProMotion & Always-On",
      dynamicIsland:
        "Dynamic Island\nA magical new way to interact with iPhone",
      safety: "Emergency SOS via satellite\nCrash Detection",
      camera: "Pro camera system\n48MP Main | Ultra Wide | Telephoto",
      battery: "Up to 29 hours\nvideo playback",
      chip: "A16 Bionic chip\nwith 5-core GPU",
      auth: "Face ID",
      cellular: "Superfast 5G cellular",
    },
    {
      name: "iPhone 14",
      tagline: "As amazing as ever.",
      price: "From $799",
      colors: [
        "#222930",
        "#faf6f2",
        "#e11c2a",
        "#a0b4c7",
        "#e3dbe7",
        "#f8e470",
      ],
      screen: "6.7″ or 6.1″",
      screenType: "Super Retina XDR display",
      dynamicIsland: "—",
      safety: "Emergency SOS via satellite\nCrash Detection",
      camera: "Advanced dual-camera system\n12MP Main | Ultra Wide",
      battery: "Up to 26 hours\nvideo playback",
      chip: "A15 Bionic chip\nwith 5-core GPU",
      auth: "Face ID",
      cellular: "Superfast 5G cellular",
    },
    {
      name: "iPhone 13",
      tagline: "An all-around powerhouse.",
      price: "From $599",
      colors: [
        "#232a31",
        "#f9f6ef",
        "#c8102e",
        "#27526d",
        "#fae0d8",
        "#3b5442",
      ],
      screen: "6.1″ or 5.4″",
      screenType: "Super Retina XDR display",
      dynamicIsland: "—",
      safety: "Emergency SOS",
      camera: "Dual-camera system\n12MP Main | Ultra Wide",
      battery: "Up to 19 hours\nvideo playback",
      chip: "A15 Bionic chip\nwith 4-core GPU",
      auth: "Face ID",
      cellular: "Superfast 5G cellular",
    },
    {
      name: "iPhone SE",
      tagline: "Serious power. Incredible value.",
      price: "From $429",
      colors: ["#1f2124", "#f9f6ef", "#bf0012"],
      screen: "4.7″",
      screenType: "Retina HD display",
      dynamicIsland: "—",
      safety: "Emergency SOS",
      camera: "Advanced camera system\n12MP Main",
      battery: "Up to 15 hours\nvideo playback",
      chip: "A15 Bionic chip\nwith 4-core GPU",
      auth: "Touch ID",
      cellular: "5G cellular",
    },
  ];

  return (
    <section className="py-24 bg-[#fbfbfd] border-t border-[#d2d2d7]/50">
      <div className="max-w-[1080px] mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-[36px] md:text-[44px] font-semibold text-center tracking-tight text-[#1d1d1f] mb-16">
          Which iPhone is right for you?
        </h2>

        {/* Comparison Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pb-12 border-b border-[#d2d2d7]">
          {models.map((m, idx) => (
            <div
              key={m.name}
              className="flex flex-col items-center text-center"
            >
              {/* Device Silhouette / Icon */}
              <div className="h-44 flex items-center justify-center mb-4">
                <div
                  className={`border-2 border-[#1d1d1f] rounded-[22px] flex flex-col items-center justify-between p-1 bg-white shadow-sm ${
                    idx === 0
                      ? "w-24 h-40"
                      : idx === 1
                        ? "w-24 h-40"
                        : idx === 2
                          ? "w-22 h-38"
                          : "w-20 h-36"
                  }`}
                >
                  {/* Top Notch or Dynamic Island */}
                  {idx === 0 ? (
                    <div className="w-8 h-2 bg-black rounded-full mt-1.5" />
                  ) : idx === 3 ? (
                    <div className="w-6 h-1 bg-black/40 rounded-full mt-1" />
                  ) : (
                    <div className="w-9 h-2 bg-black rounded-b-md" />
                  )}

                  {/* Screen Content Preview */}
                  <div className="text-[10px] text-[#86868b] font-medium my-auto">
                    {m.screen}
                  </div>

                  {/* Bottom Bar or Home Button */}
                  {idx === 3 ? (
                    <div className="w-5 h-5 rounded-full border border-black/30 mb-1" />
                  ) : (
                    <div className="w-10 h-1 bg-black/40 rounded-full mb-1" />
                  )}
                </div>
              </div>

              {/* Color Swatches */}
              <div className="flex items-center gap-1.5 mb-3 h-5">
                {m.colors.map((c, i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 rounded-full border border-black/10 inline-block shadow-xs"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>

              {/* Title & Tagline */}
              <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1d1d1f] tracking-tight">
                {m.name}
              </h3>
              <p className="text-[12px] text-[#6e6e73] min-h-[32px] mt-1 leading-snug">
                {m.tagline}
              </p>

              {/* Price */}
              <div className="text-[14px] font-medium text-[#1d1d1f] my-3">
                {m.price}
              </div>

              {/* Buy Button */}
              <button className="bg-[#0071e3] hover:bg-[#0077ed] text-white text-[12px] font-medium px-4 py-1 rounded-full transition-colors mb-8">
                Buy
              </button>

              {/* Spec Rows */}
              <div className="w-full space-y-7 text-[12px] text-[#1d1d1f] pt-4 border-t border-[#e5e5ea]">
                {/* Display */}
                <div className="min-h-[64px]">
                  <div className="font-semibold text-[14px] mb-0.5">
                    {m.screen}
                  </div>
                  <div className="text-[#6e6e73]">{m.screenType}</div>
                </div>

                {/* Dynamic Island */}
                <div className="min-h-[50px]">
                  {m.dynamicIsland !== "—" ? (
                    <div className="text-[#1d1d1f] font-medium whitespace-pre-line">
                      {m.dynamicIsland}
                    </div>
                  ) : (
                    <div className="text-[#86868b] text-[18px]">—</div>
                  )}
                </div>

                {/* Safety */}
                <div className="min-h-[44px]">
                  <div className="text-[#1d1d1f] font-medium whitespace-pre-line leading-tight">
                    {m.safety}
                  </div>
                </div>

                {/* Camera */}
                <div className="min-h-[60px]">
                  <div className="text-[#1d1d1f] font-medium whitespace-pre-line leading-snug">
                    {m.camera}
                  </div>
                </div>

                {/* Battery */}
                <div className="min-h-[44px]">
                  <div className="text-[#1d1d1f] font-medium whitespace-pre-line leading-snug">
                    {m.battery}
                  </div>
                </div>

                {/* Chip */}
                <div className="min-h-[44px]">
                  <div className="text-[#1d1d1f] font-medium whitespace-pre-line leading-snug">
                    {m.chip}
                  </div>
                </div>

                {/* Security Auth */}
                <div className="min-h-[30px]">
                  <div className="text-[#1d1d1f] font-medium">{m.auth}</div>
                </div>

                {/* Cellular */}
                <div className="min-h-[30px]">
                  <div className="text-[#1d1d1f] font-medium">{m.cellular}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="text-center mt-10">
          <a
            href="#"
            className="text-[#0071e3] hover:underline text-[15px] inline-flex items-center gap-1 font-normal"
          >
            Compare all iPhone models <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
