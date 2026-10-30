import { Section, Card, Copy } from "../ShopMacCards/ShopMacCards";
import intro from "../../assets/airpods.jpg";
import mouse from "../../assets/airpods.jpg";
import keyboard from "../../assets/macbook.jpg";
import trackpad from "../../assets/ipad.jpg";
import ScrollRow from "../ScrollRow/ScrollRow";

const products = [
  {
    title: "Magic Mouse - Black Multi-Touch Surface",
    price: "$99.00",
    img: mouse,
  },
  {
    title: "Magic Keyboard with Touch ID and Numeric Keypad for Mac",
    price: "$199.00",
    img: keyboard,
  },
  {
    title: "Magic Trackpad - Black Multi-Touch Surface",
    price: "$149.00",
    img: trackpad,
  },
];

function ShopMacAccessories() {
  return (
    <Section dark="Accessories." light="Made for Mac." id="accessories">
      <ScrollRow>
        <Card width="lg:w-[399px]">
          <Copy title="Shop Magic accessories to complete your studio." small />
          <img
            src={intro}
            alt=""
            className="absolute bottom-0 left-0 h-[240px] w-full object-cover lg:h-[330px]"
          />
        </Card>

        {products.map((p) => (
          <Card key={p.title} width="lg:w-[313px]">
            <img
              src={p.img}
              alt={p.title}
              className="mx-auto mt-[60px] h-[110px] w-[200px] object-contain lg:mt-[100px] lg:h-[150px] lg:w-[240px]"
            />
            <div className="absolute left-1/2 top-[250px] flex -translate-x-1/2 gap-2 lg:top-[325px]">
              <span className="h-[10px] w-[10px] rounded-full bg-[#d2d2d7]" />
              <span className="h-[10px] w-[10px] rounded-full bg-[#1d1d1f]" />
            </div>
            <div className="absolute bottom-[30px] left-[30px] right-[30px]">
              <p className="text-[13px] font-semibold leading-[19px] lg:text-[14px] lg:leading-[20px]">
                {p.title}
              </p>
              <p className="mt-[10px] text-[13px] lg:text-[14px]">{p.price}</p>
            </div>
          </Card>
        ))}
      </ScrollRow>
    </Section>
  );
}

export default ShopMacAccessories;
