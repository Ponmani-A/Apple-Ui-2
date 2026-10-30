import navStudio from "../../assets/displays-nav-studio.png";
import navXdr from "../../assets/displays-nav-xdr.png";

function DisplaysSubNav() {
  return (
    <div className="bg-[#f9f9fa]">
      <div className="mx-auto flex h-[116px] max-w-[980px] items-start justify-center pt-[25px]">
        <a
          href="#"
          className="flex w-[125px] flex-col items-center gap-[15px] text-[12px]"
        >
          <img src={navStudio} alt="" className="h-[36px] w-auto" />
          Studio Display
        </a>
        <a
          href="#"
          className="flex w-[125px] flex-col items-center gap-[15px] text-[12px]"
        >
          <img src={navXdr} alt="" className="h-[36px] w-auto" />
          Pro Display XDR
        </a>
      </div>
    </div>
  );
}

export default DisplaysSubNav;
