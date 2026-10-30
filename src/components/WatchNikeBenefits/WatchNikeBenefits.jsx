import delivery from "../../assets/card.png";
import apr from "../../assets/search.png";
import help from "../../assets/Apple.png";

function WatchNikeBenefits() {
  return (
    <section className="bg-[#f5f5f7] px-5 pb-[20px] pt-[50px] lg:pt-[62px]">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-center md:gap-[70px] lg:-translate-x-[88px]">
        <div className="flex w-[250px] flex-col items-center">
          <img src={delivery} alt="" className="h-[32px] w-auto" />
          <p className="mt-4 text-[15px] font-semibold lg:text-[17px]">
            Fast delivery or pickup
          </p>
          <p className="mt-1 text-[14px] leading-[20px] lg:text-[15px]">
            Enjoy two-hour delivery from an Apple Store, free delivery, or easy
            pickup.
          </p>
          <a
            href="#"
            className="mt-3 text-[14px] text-[#06c] hover:underline lg:text-[15px]"
          >
            Learn more
          </a>
        </div>

        <div className="flex w-[250px] flex-col items-center">
          <img src={apr} alt="" className="h-[32px] w-auto" />
          <p className="mt-4 text-[15px] font-semibold lg:text-[17px]">
            Pay monthly at 0% APR
          </p>
          <p className="mt-1 text-[14px] leading-[20px] lg:text-[15px]">
            Pay for your Apple Watch over time, interest-free when you choose to
            check out with Apple Card Monthly Installments.†
          </p>
          <a
            href="#"
            className="mt-3 text-[14px] text-[#06c] hover:underline lg:text-[15px]"
          >
            Learn more
          </a>
        </div>

        <div className="flex w-[250px] flex-col items-center">
          <img src={help} alt="" className="h-[32px] w-auto" />
          <p className="mt-4 text-[15px] font-semibold lg:text-[17px]">
            Get help buying
          </p>
          <p className="mt-1 text-[14px] leading-[20px] lg:text-[15px]">
            Have a question? Call a Specialist or chat online. Call
            1-800-MY-APPLE.
          </p>
          <a
            href="#"
            className="mt-3 text-[14px] text-[#06c] hover:underline lg:text-[15px]"
          >
            Contact us
          </a>
        </div>
      </div>

      <div className="mx-auto mt-[60px] max-w-[1104px] space-y-2 border-t border-[#d2d2d7] pt-5 text-[11px] leading-snug text-[#6e6e73]">
        <p>
          Apple Watch Series 8 requires an iPhone 8 or later with iOS 16 or
          later.
        </p>
        <p>
          Apple Watch SE requires an iPhone 8 or later with iOS 16 or later.
        </p>
        <p>
          Features are subject to change. Some features, applications, and
          services may not be available in all regions or all languages.
        </p>
      </div>
    </section>
  );
}

export default WatchNikeBenefits;
