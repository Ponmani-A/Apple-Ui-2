import studioImg from "../../assets/displays-compare-studio.jpg";
import xdrImg from "../../assets/displays-compare-xdr.jpg";
import brightness from "../../assets/displays-icon-brightness.png";
import trueTone from "../../assets/displays-icon-truetone.png";
import camera from "../../assets/displays-icon-camera.png";
import speaker from "../../assets/displays-icon-speaker.png";
import ports from "../../assets/displays-icon-ports.png";
import standStudio from "../../assets/displays-icon-stand-studio.png";
import standXdr from "../../assets/displays-icon-stand-xdr.png";

const rows = [
  [
    { big: "27”", blocks: [["Retina display¹"]], sub: "5120 by 2880 pixels" },
    {
      big: "32”",
      blocks: [["Retina XDR display¹"]],
      sub: "6016 by 3384 pixels",
    },
  ],
  [
    { big: "5K", blocks: [["Retina display"]], sub: "218 ppi" },
    { big: "6K", blocks: [["Retina display"]], sub: "218 ppi" },
  ],
  [
    { icon: brightness, blocks: [["600 nits brightness"]] },
    { icon: brightness, blocks: [["1600 nits peak brightness"]] },
  ],
  [
    {
      icon: trueTone,
      blocks: [
        ["True Tone", "Anti-reflective coating", "Nano-texture glass option"],
      ],
    },
    {
      icon: trueTone,
      blocks: [
        ["True Tone", "Anti-reflective coating", "Nano-texture glass option"],
      ],
    },
  ],
  [
    { icon: camera, blocks: [["12MP Ultra Wide camera with Center Stage"]] },
    null,
  ],
  [
    {
      icon: speaker,
      blocks: [
        [
          "Studio-quality three-mic array",
          "Six-speaker sound system with Spatial Audio",
        ],
      ],
    },
    null,
  ],
  [
    {
      icon: ports,
      blocks: [
        ["Three USB-C ports for your accessories"],
        ["One Thunderbolt 3 port to connect and charge your compatible Mac"],
      ],
    },
    {
      icon: ports,
      blocks: [
        ["Three USB-C ports for your accessories"],
        ["One Thunderbolt 3 port to connect and charge your compatible Mac"],
      ],
    },
  ],
  [
    {
      icon: standStudio,
      blocks: [
        [
          "Tilt-adjustable stand",
          "Tilt- and height-adjustable stand option",
          "VESA mount adapter option",
        ],
      ],
    },
    {
      icon: standXdr,
      blocks: [["Pro Stand option", "VESA mount adapter option"]],
    },
  ],
];

function Cell({ cell }) {
  if (!cell) return <p className="py-[40px] text-center text-[17px]">–</p>;
  return (
    <div className="mx-auto flex max-w-[300px] flex-col items-center py-[24px] text-center">
      {cell.big && (
        <p className="text-[20px] font-semibold leading-[22px] lg:text-[22px]">
          {cell.big}
        </p>
      )}
      {cell.icon && (
        <img src={cell.icon} alt="" className="mb-[12px] h-[34px] w-auto" />
      )}
      {cell.blocks.map((lines, i) => (
        <div
          key={i}
          className={i > 0 ? "mt-[14px]" : cell.big ? "mt-[6px]" : ""}
        >
          {lines.map((l) => (
            <p key={l} className="text-[13px] leading-[17px] lg:text-[14px]">
              {l}
            </p>
          ))}
        </div>
      ))}
      {cell.sub && (
        <p className="text-[13px] leading-[17px] text-[#6e6e73] lg:text-[14px]">
          {cell.sub}
        </p>
      )}
    </div>
  );
}

function DisplaysCompare() {
  return (
    <section className="bg-[#fafafa] px-3 pb-[60px] pt-[60px] lg:pb-[100px] lg:pt-[118px]">
      <h2 className="text-center text-[28px] font-semibold leading-[1.1] sm:text-[36px] lg:text-[44px]">
        Which display is right for you?
      </h2>

      <div className="mx-auto mt-[40px] grid max-w-[700px] grid-cols-2 gap-x-4 lg:mt-[70px]">
        {[
          { img: studioImg, name: "Studio Display", price: "From $1599" },
          { img: xdrImg, name: "Pro Display XDR", price: "From $4999" },
        ].map((p) => (
          <div key={p.name} className="flex flex-col items-center text-center">
            <div className="flex h-[190px] items-end">
              <img
                src={p.img}
                alt={p.name}
                className="h-auto w-[140px] sm:w-[180px] lg:w-auto"
              />
            </div>
            <h3 className="mt-[33px] text-[16px] font-semibold leading-tight lg:text-[20px]">
              {p.name}
            </h3>
            <p className="mt-2 text-[13px] lg:text-[14px]">{p.price}</p>
            <a
              href="#"
              className="mt-3 inline-flex h-[24px] items-center rounded-full bg-[#0071e3] px-3 text-[12px] text-white"
            >
              Buy
            </a>
            <a
              href="#"
              className="mt-2 text-[12px] text-[#06c] hover:underline lg:text-[13px]"
            >
              Learn more
            </a>
          </div>
        ))}

        <div className="mx-auto mt-[44px] w-full max-w-[300px] border-t border-[#d2d2d7]" />
        <div className="mx-auto mt-[44px] w-full max-w-[300px] border-t border-[#d2d2d7]" />

        {rows.flat().map((cell, i) => (
          <Cell key={i} cell={cell} />
        ))}

        <div className="mx-auto mt-[30px] w-full max-w-[300px] border-t border-[#d2d2d7] pt-[40px] text-center">
          <a
            href="#"
            className="text-[12px] text-[#06c] hover:underline lg:text-[13px]"
          >
            Studio Display Tech Specs
          </a>
        </div>
        <div className="mx-auto mt-[30px] w-full max-w-[300px] border-t border-[#d2d2d7] pt-[40px] text-center">
          <a
            href="#"
            className="text-[12px] text-[#06c] hover:underline lg:text-[13px]"
          >
            Pro Display XDR Tech Specs
          </a>
        </div>
      </div>
    </section>
  );
}

export default DisplaysCompare;
