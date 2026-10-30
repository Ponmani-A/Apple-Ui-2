import airpods1 from "../../assets/airpods-compare-pro.png";
import airpods2 from "../../assets/airpods-compare-3rd.png";
import airpods3 from "../../assets/airpods-compare-2nd.png";

const products = [
  {
    name: "AirPods (2nd generation)",
    image: airpods1,
    price: "$129",
    imgClass: "h-[245px]",
  },
  {
    name: "AirPods (3rd generation) with Lightning Charging Case",
    image: airpods2,
    price: "$169",
    imgClass: "h-[225px]",
  },
  {
    name: "AirPods Pro (2nd generation)",
    image: airpods3,
    price: "$249",
    imgClass: "h-[215px]",
  },
];

function CompareHeader() {
  return (
    <div>
      <h1 className="pt-[60px] text-center text-[34px] font-semibold leading-[1.1] sm:text-[44px] lg:pt-[90px] lg:text-[56px]">
        Compare AirPods models
      </h1>
      <a
        href="#"
        className="mt-7 block text-center text-[17px] text-[#06c] hover:underline"
      >
        See all models
      </a>
      <p className="mt-9 text-center text-[17px]">
        Get help choosing.{" "}
        <a href="#" className="text-[#06c] hover:underline">
          Chat with a Specialist
        </a>
      </p>

      <div className="mt-[50px] grid grid-cols-3 gap-x-[30px] lg:mt-[75px]">
        {products.map((p) => (
          <div key={p.name} className="flex flex-col items-center">
            {/* Selector box */}
            <div className="relative flex h-[60px] w-full items-center rounded-[10px] border border-[#d2d2d7] bg-white pl-[15px] pr-9">
              <span className="truncate text-[15px] font-semibold">
                {p.name}
              </span>
              <svg
                viewBox="0 0 16 16"
                className="absolute right-3 h-3.5 w-3.5 text-[#6e6e73]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 6l5 5 5-5" />
              </svg>
            </div>

            <div className="mt-[60px] flex h-[260px] w-full items-end justify-center lg:mt-[100px]">
              <img
                src={p.image}
                alt={p.name}
                className={`${p.imgClass} w-auto max-w-full object-contain`}
              />
            </div>

            <span className="mt-[40px] block h-[41px] w-[41px] rounded-full border-2 border-[#0071e3] bg-white" />
            <p className="mt-2 text-[11px]">White</p>

            <div className="mt-[28px] w-full border-t border-[#d2d2d7]" />

            <p className="mt-[28px] text-[17px]">{p.price}</p>
            <a
              href="#"
              className="mt-3 inline-flex h-[32px] items-center rounded-full bg-[#0071e3] px-5 text-[14px] text-white"
            >
              Buy
            </a>
            <a
              href="#"
              className="mt-3 text-[14px] text-[#06c] hover:underline"
            >
              Learn more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompareHeader;
