import { Section, Card } from "../ShopMacCards/ShopMacCards";
import laptop from "../../assets/macbook.jpg";
import ScrollRow from "../ScrollRow/ScrollRow";

const models = [
  {
    title: "MacBook Air with M1 chip",
    price: "From $999 or $83.25/mo. for 12 mo.*",
    dots: ["#8e8e93", "#e3e4e6", "#f0d9c6"],
  },
  {
    title: "MacBook Air with M2 chip",
    price: "From $1199 or $99.91/mo. for 12 mo.*",
    dots: ["#2d3b4c", "#e8d9c8", "#3b3b3d", "#d8d8dc"],
  },
  {
    title: "MacBook Pro 13”",
    price: "From $1299 or $108.25/mo. for 12 mo.*",
    dots: ["#8e8e93", "#e3e4e6"],
  },
];

function ShopMacModels() {
  return (
    <Section dark="All models." light="Take your pick." id="models">
      <ScrollRow>
        {models.map((m) => (
          <Card key={m.title} width="lg:w-[398px]">
            <h3 className="px-[30px] pt-[56px] text-[20px] font-semibold leading-[28px] lg:text-[24px]">
              {m.title}
            </h3>

            <img
              src={laptop}
              alt={m.title}
              className="absolute left-1/2 top-[130px] h-[110px] w-[190px] -translate-x-1/2 object-contain lg:top-[167px] lg:h-[152px] lg:w-[264px]"
            />

            <div className="absolute left-1/2 top-[330px] flex -translate-x-1/2 gap-2 lg:top-[398px]">
              {m.dots.map((c) => (
                <span
                  key={c}
                  className="h-[10px] w-[10px] rounded-full"
                  style={{ background: c }}
                />
              ))}
            </div>

            <div className="absolute bottom-[30px] left-[30px] right-[29px] flex items-end justify-between">
              <p className="text-[12px] lg:text-[14px]">{m.price}</p>
              <a
                href="#"
                className="inline-flex h-[36px] w-[62px] items-center justify-center rounded-full bg-[#0071e3] text-[14px] text-white"
              >
                Buy
              </a>
            </div>
          </Card>
        ))}
      </ScrollRow>
    </Section>
  );
}

export default ShopMacModels;
