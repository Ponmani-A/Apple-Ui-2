import img2nd from "../../assets/airpods-compare-2nd.png";
import img3rd from "../../assets/airpods-compare-3rd.png";
import imgPro from "../../assets/airpods-compare-pro.png";
import imgMax from "../../assets/airpods-compare-max.png";
import iconSpatial from "../../assets/airpods-icon-spatial.png";
import iconAnc from "../../assets/airpods-icon-anc.png";
import iconSweat from "../../assets/airpods-icon-sweat.png";
import caseLightning from "../../assets/airpods-icon-case-lightning.png";
import caseMagsafe from "../../assets/airpods-icon-case-magsafe.png";
import casePro from "../../assets/airpods-icon-case-pro.png";
import caseSmart from "../../assets/airpods-icon-case-smart.png";

// "" = andha row la "–" kaattum
const models = [
  {
    image: img2nd,
    name: "AirPods",
    gen: "2nd generation",
    price: "$129",
    spatial: "",
    anc: "",
    sweat: "",
    caseIcon: caseLightning,
    caseText: "Lightning Charging Case",
    hours: "5 hrs",
    battery: "Up to 5 hours of listening time with a single charge",
  },
  {
    image: img3rd,
    name: "AirPods",
    gen: "3rd generation",
    price: "From $169",
    spatial: "Personalized Spatial Audio with dynamic head tracking",
    anc: "",
    sweat: "Sweat and water resistant",
    caseIcon: caseMagsafe,
    caseText: "Lightning Charging Case or MagSafe Charging Case5",
    hours: "6 hrs",
    battery: "Up to 6 hours of listening time with a single charge",
  },
  {
    image: imgPro,
    name: "AirPods Pro",
    gen: "2nd generation",
    price: "$249",
    spatial: "Personalized Spatial Audio with dynamic head tracking",
    anc: "Active Noise Cancellation and Adaptive Transparency",
    sweat: "Sweat and water resistant",
    caseIcon: casePro,
    caseText: "MagSafe Charging Case with speaker and lanyard loop",
    hours: "6 hrs",
    battery: "Up to 6 hours of listening time with a single charge",
  },
  {
    image: imgMax,
    name: "AirPods Max",
    gen: "",
    price: "$549",
    spatial: "Personalized Spatial Audio with dynamic head tracking",
    anc: "Active Noise Cancellation and Transparency mode",
    sweat: "",
    caseIcon: caseSmart,
    caseText: "Smart Case",
    hours: "20 hrs",
    battery: "Up to 20 hours of listening time with a single charge",
  },
];

const cell = "flex flex-col items-center justify-start gap-2 text-center";
const text = "text-[12px] leading-snug text-[#1d1d1f] lg:text-[14px]";

function WhichAirpods() {
  return (
    <section className="pt-24 lg:pt-[180px]">
      <h2 className="text-center text-[34px] font-semibold leading-[1.14] sm:text-[44px] lg:text-[56px]">
        Which AirPods are
        <br />
        right for you?
      </h2>

      <div className="no-scrollbar mx-auto mt-14 max-w-[1000px] overflow-x-auto px-5 lg:mt-[90px]">
        <div className="grid min-w-[780px] grid-cols-4 gap-6">
          {models.map((m, i) => (
            <div key={i} className="flex flex-col gap-12">
              <div className="flex min-h-[260px] flex-col items-center text-center">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-[120px] w-auto object-contain"
                />
                <h3 className="mt-6 text-[20px] font-semibold lg:text-[24px]">
                  {m.name}
                </h3>
                {m.gen && <p className="text-[13px] lg:text-[15px]">{m.gen}</p>}
                <p className="mt-3 text-[13px] lg:text-[15px]">{m.price}</p>
                <a
                  href="#"
                  className="mt-2 rounded-full bg-[#0071e3] px-3.5 py-1 text-[12px] text-white"
                >
                  Buy
                </a>
                <a
                  href="#"
                  className="mt-2 text-[12px] text-[#06c] hover:underline"
                >
                  Learn more
                </a>
              </div>

              <div className={`${cell} min-h-[90px]`}>
                {m.spatial ? (
                  <>
                    <img src={iconSpatial} alt="" className="h-8 w-auto" />
                    <p className={text}>{m.spatial}</p>
                  </>
                ) : (
                  <p className={text}>–</p>
                )}
              </div>

              <div className={`${cell} min-h-[90px]`}>
                {m.anc ? (
                  <>
                    <img src={iconAnc} alt="" className="h-8 w-auto" />
                    <p className={text}>{m.anc}</p>
                  </>
                ) : (
                  <p className={text}>–</p>
                )}
              </div>

              <div className={`${cell} min-h-[70px]`}>
                {m.sweat ? (
                  <>
                    <img src={iconSweat} alt="" className="h-8 w-auto" />
                    <p className={text}>{m.sweat}</p>
                  </>
                ) : (
                  <p className={text}>–</p>
                )}
              </div>

              <div className={`${cell} min-h-[100px]`}>
                <img src={m.caseIcon} alt="" className="h-9 w-auto" />
                <p className={text}>{m.caseText}</p>
              </div>

              <div className={`${cell} min-h-[110px]`}>
                <p className="text-[28px] font-semibold leading-none lg:text-[32px]">
                  {m.hours}
                </p>
                <p className={text}>{m.battery}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#"
        className="mt-14 block text-center text-[17px] text-[#06c] hover:underline"
      >
        Compare all AirPods models
      </a>
    </section>
  );
}

export default WhichAirpods;
