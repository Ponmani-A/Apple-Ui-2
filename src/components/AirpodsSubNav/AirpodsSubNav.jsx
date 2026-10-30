import nav2nd from "../../assets/airpods-nav-2nd.png";
import nav3rd from "../../assets/airpods-nav-3rd.png";
import navPro from "../../assets/airpods-nav-pro.png";
import navMax from "../../assets/airpods-nav-max.png";
import navCompare from "../../assets/airpods-nav-compare.png";
import navMusic from "../../assets/airpods-nav-music.png";
import watchultraiconocean1 from "../../assets/watchultra-icon-ocean-1.jpg";
import watchultraiconocean2 from "../../assets/watchultra-icon-ocean-2.jpg";
import watchultraiconocean3 from "../../assets/watchultra-icon-ocean-3.jpg";
import watchultraicon3 from "../../assets/watchultra-icon-trail-3.jpg";
import watchultraicon2 from "../../assets/watchultra-icon-trail-2.jpg";
import airpodsicon from "../../assets/airpods-icon-case-smart.png";

const items = [
  { name: "AirPods 2nd Generation", icon: nav2nd },
  { name: "AirPods 3rd Generation", icon: nav3rd },
  { name: "AirPods Pro 2nd Generation", icon: navPro },
  { name: "AirPods Max", icon: navMax },
  { name: "Compare", icon: navCompare },
  { name: "Apple Music", icon: navMusic },
  { name: "Apple Watch Ultra", icon: watchultraiconocean1 },
  { name: "Apple Watch Series 8", icon: watchultraiconocean2 },
  { name: "Apple Watch SE", icon: watchultraiconocean3 },
  { name: "Apple Watch Nike", icon: watchultraicon3 },
  { name: "Apple Watch Hermès", icon: watchultraicon2 },
  { name: "Apple Watch Studio", icon: airpodsicon },
];

function AirpodsSubNav() {
  return (
    <div className="no-scrollbar overflow-x-auto bg-white">
      <div className="mx-auto flex max-w-[980px] justify-center gap-1 px-5 py-3">
        {items.map((item) => (
          <a
            key={item.name}
            href="#"
            className="flex w-[80px] shrink-0 flex-col items-center gap-1.5 text-center text-[10px] leading-tight text-[#1d1d1f]"
          >
            <img
              src={item.icon}
              alt=""
              className="h-[32px] w-[32px] object-contain"
            />
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default AirpodsSubNav;
