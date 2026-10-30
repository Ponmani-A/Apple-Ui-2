import CompareSection from "../CompareSection/CompareSection";
import appleLogo from "../../assets/airpods-icon-anc.png";
import card from "../../assets/airpods-icon-sweat.png";
import search from "../../assets/airpods-icon-spatial.png";

const ICON = {
  anc: appleLogo,
  adaptive: appleLogo,
  touch: card,
  spatial: search,
  sweat: card,
  siri: search,
  battery: card,
  switching: search,
  engrave: appleLogo,
  casePlain: card,
  caseMagsafe: card,
};

const rows = [
  [null, null, { icon: ICON.anc, label: "Active Noise Cancellation" }],
  [null, null, { icon: ICON.adaptive, label: "Adaptive Transparency" }],
  [
    { icon: ICON.touch, label: "Double-tap" },
    { icon: ICON.touch, label: "Force sensor" },
    { icon: ICON.touch, label: "Touch control" },
  ],
  [
    null,
    {
      icon: ICON.spatial,
      label: "Personalized Spatial Audio with dynamic head tracking¹",
    },
    {
      icon: ICON.spatial,
      label: "Personalized Spatial Audio with dynamic head tracking¹",
    },
  ],
  [
    null,
    {
      icon: ICON.sweat,
      label: "Sweat and water resistant: AirPods and charging case²",
    },
    {
      icon: ICON.sweat,
      label: "Sweat and water resistant: AirPods Pro and charging case²",
    },
  ],
  [
    { chip: "H1", label: "H1 chip" },
    { chip: "H1", label: "H1 chip" },
    { chip: "H2", label: "H2 chip" },
  ],
  [
    { icon: ICON.siri, label: "Hey Siri" },
    { icon: ICON.siri, label: "Hey Siri" },
    { icon: ICON.siri, label: "Hey Siri" },
  ],
  [
    { big: "5 hrs", label: "Up to 5 hours of listening time on one charge³" },
    { big: "6 hrs", label: "Up to 6 hours of listening time on one charge³" },
    { big: "6 hrs", label: "Up to 6 hours of listening time on one charge³" },
  ],
  [
    {
      icon: ICON.battery,
      label: "More than 24 hours of listening time with charging case³",
    },
    {
      icon: ICON.battery,
      label: "Up to 30 hours of listening time with charging case³",
    },
    {
      icon: ICON.battery,
      label: "Up to 30 hours of listening time with charging case³",
    },
  ],
  [
    { icon: ICON.switching, label: "Automatic switching" },
    { icon: ICON.switching, label: "Automatic switching" },
    { icon: ICON.switching, label: "Automatic switching" },
  ],
  [
    { icon: ICON.engrave, label: "Personalized engraving" },
    { icon: ICON.engrave, label: "Personalized engraving" },
    { icon: ICON.engrave, label: "Personalized engraving" },
  ],
  [
    { icon: ICON.casePlain, label: "Lightning Charging Case" },
    { icon: ICON.casePlain, label: "Lightning Charging Case" },
    {
      icon: ICON.caseMagsafe,
      label: "MagSafe Charging Case with speaker and lanyard loop⁴",
    },
  ],
];

function QuickLook() {
  return (
    <CompareSection title="Quick Look">
      <div className="-mt-[58px] grid grid-cols-3 gap-x-[30px]">
        {rows.flat().map((cell, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center py-[40px] text-center"
          >
            {!cell && <span className="text-[20px]">–</span>}

            {cell?.icon && (
              <img
                src={cell.icon}
                alt=""
                className="mb-[14px] h-[72px] w-[72px] object-contain"
              />
            )}

            {cell?.chip && (
              <span className="mb-[14px] flex h-[72px] w-[72px] items-center justify-center rounded-[16px] border-[3px] border-black text-[26px] font-bold">
                {cell.chip}
              </span>
            )}

            {cell?.big && (
              <p className="text-[48px] font-semibold leading-none lg:text-[64px]">
                {cell.big}
              </p>
            )}

            {cell && (
              <p className="mt-2 max-w-[210px] text-[13px] font-semibold leading-[19px] lg:text-[14px]">
                {cell.label}
              </p>
            )}
          </div>
        ))}
      </div>
    </CompareSection>
  );
}

export default QuickLook;
