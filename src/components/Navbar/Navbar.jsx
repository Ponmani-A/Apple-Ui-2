import { useState } from "react";
import { Link } from "react-router-dom";
import appleLogo from "../../assets/Apple.png";
import search from "../../assets/search.png";
import bag from "../../assets/card.png";

const links = [
  { name: "Store", path: "/compare-airpods" },
  { name: "Mac", path: "/shop-mac" },
  { name: "iPad", path: "/displays" },
  { name: "iPhone", path: "/ipad" },
  { name: "Watch", path: "/watch-nike" },
  { name: "AirPods", path: "/airpods-max " },
  { name: "TV & Home", path: "/Tv-Home" },
  { name: "Entertainment", path: "/fitness" },
  { name: "Accessories", path: "/iphone" },
  { name: "Support", path: "/support" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-[#424245]">
      <div className="mx-auto flex h-11 max-w-[980px] items-center px-5">
        <Link to="/">
          <img src={appleLogo} alt="Apple" className="h-[55px] w-auto" />
        </Link>

        <ul className="hidden flex-1 items-center justify-evenly lg:flex">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="text-xs text-[#e8e8ed]/90 hover:text-white"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-5 lg:ml-0">
          <a href="#">
            <img src={search} alt="Search" className="h-[55px] w-auto" />
          </a>
          <a href="#">
            <img src={bag} alt="Bag" className="h-[55px] w-auto" />
          </a>

          <button
            className="flex h-6 w-6 flex-col items-center justify-center gap-[5px] lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span
              className={`block h-px w-[18px] bg-white transition-transform duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-[18px] bg-white transition-transform duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <ul className="border-t border-white/10 px-5 pb-4 lg:hidden">
          {links.map((link) => (
            <li key={link.name} className="border-b border-white/10">
              <Link
                to={link.path}
                onClick={() => setOpen(false)}
                className="block py-3 text-[17px] text-[#e8e8ed]"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
