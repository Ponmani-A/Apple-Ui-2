import airpods1 from "../../assets/airpods-compare-pro.png";
import AirpodsBenefits from "../AirpodsBenefits/AirpodsBenefits";

const items = [
  { name: ["AirPods", "(2nd generation)"], imgClass: "h-[245px]" },
  { name: ["AirPods", "(3rd generation)"], imgClass: "h-[225px]" },
  { name: ["AirPods Pro", "(2nd generation)"], imgClass: "h-[215px]" },
];

function CompareBottom() {
  return (
    <section className="flow-root bg-[#f5f5f7] pb-24">
      <div className="mx-auto mt-[70px] grid max-w-[980px] grid-cols-1 gap-12 px-5 sm:grid-cols-3 sm:gap-[30px] lg:mt-[160px]">
        {items.map((it) => (
          <div
            key={it.name[1]}
            className="flex flex-col items-center text-center"
          >
            <div className="flex h-[260px] items-end justify-center">
              <img
                src={airpods1}
                alt=""
                className={`${it.imgClass} w-auto max-w-full object-contain`}
              />
            </div>
            <h3 className="mt-[35px] text-[18px] font-semibold leading-[28px] lg:text-[21px]">
              {it.name[0]}
              <br />
              {it.name[1]}
            </h3>
            <div className="mt-1 flex gap-5 text-[15px] text-[#06c]">
              <a href="#" className="hover:underline">
                Tech specs
              </a>
              <a href="#" className="hover:underline">
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>

      <AirpodsBenefits />
    </section>
  );
}

export default CompareBottom;
