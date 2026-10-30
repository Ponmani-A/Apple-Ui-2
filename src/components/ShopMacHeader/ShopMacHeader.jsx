import specialist from "../../assets/iphone14.jpg";
import store from "../../assets/card.png";

const tabs = [
  "Shopping Guides",
  "Ways to Save",
  "Accessories",
  "Setup and Support",
  "The Mac Experience",
  "Special Stores",
];

function ShopMacHeader() {
  return (
    <header className="mx-auto max-w-[980px] px-5 pt-[50px] lg:pt-[80px]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <h1 className="text-[34px] font-semibold leading-[1.1] sm:text-[40px] lg:text-[44px]">
          Shop Mac
        </h1>

        <div className="flex flex-col gap-4 text-[12px] leading-[16px] lg:mt-[4px]">
          <div className="flex items-center gap-3">
            <img
              src={specialist}
              alt=""
              className="h-[32px] w-[32px] rounded-full object-cover"
            />
            <div>
              <p className="font-semibold">Need shopping help?</p>
              <a href="#" className="text-[#06c] hover:underline">
                Ask a Mac Specialist
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <img
              src={store}
              alt=""
              className="h-[32px] w-[32px] object-contain"
            />
            <div>
              <p className="font-semibold">Visit an Apple Store</p>
              <a href="#" className="text-[#06c] hover:underline">
                Find one near you
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="no-scrollbar mt-[40px] flex gap-[40px] overflow-x-auto whitespace-nowrap text-[14px] lg:mt-[75px] lg:text-[15px]">
        {tabs.map((t) => (
          <a key={t} href="#" className="shrink-0 hover:text-[#6e6e73]">
            {t}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default ShopMacHeader;
