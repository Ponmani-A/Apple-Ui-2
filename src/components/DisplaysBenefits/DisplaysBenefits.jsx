import apr from "../../assets/displays-benefit-apr.png";
import delivery from "../../assets/displays-benefit-delivery.png";
import help from "../../assets/displays-benefit-help.png";

function DisplaysBenefits() {
  return (
    <section className="bg-[#f5f5f7] px-5 pb-[40px] pt-[50px] lg:pt-[64px]">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-center md:gap-[60px] lg:-translate-x-[20px]">
        <div className="flex w-[240px] flex-col items-center">
          <img src={apr} alt="" className="h-[40px] w-auto" />
          <p className="mt-4 text-[17px] font-semibold lg:text-[19px]">
            Pay monthly at 0% APR
          </p>
          <p className="mt-1 text-[15px] leading-[21px] lg:text-[17px]">
            You can pay over time when you choose to check out with Apple Card
            Monthly Installments.†
          </p>
          <a
            href="#"
            className="mt-2 text-[14px] text-[#06c] hover:underline lg:text-[17px]"
          >
            Learn more
          </a>
        </div>

        <div className="flex w-[240px] flex-col items-center">
          <img src={delivery} alt="" className="h-[40px] w-auto" />
          <p className="mt-4 text-[17px] font-semibold lg:text-[19px]">
            Fast delivery or pickup
          </p>
          <p className="mt-1 text-[15px] leading-[21px] lg:text-[17px]">
            Enjoy two-hour delivery from an Apple Store, free delivery, or easy
            pickup.
          </p>
          <a
            href="#"
            className="mt-2 text-[14px] text-[#06c] hover:underline lg:text-[17px]"
          >
            Learn more
          </a>
        </div>

        <div className="flex w-[240px] flex-col items-center">
          <img src={help} alt="" className="h-[40px] w-auto" />
          <p className="mt-4 text-[17px] font-semibold lg:text-[19px]">
            Get help buying
          </p>
          <p className="mt-1 text-[15px] leading-[21px] lg:text-[17px]">
            Have a question? Call a Specialist or chat online. Call
            1-800-MY-APPLE.
          </p>
          <a
            href="#"
            className="mt-2 text-[14px] text-[#06c] hover:underline lg:text-[17px]"
          >
            Contact us
          </a>
        </div>
      </div>

      <div className="mx-auto mt-[60px] max-w-[980px] space-y-2 text-[11px] leading-snug text-[#6e6e73]">
        <p>Screen size is measured diagonally.</p>
        <p>
          ENERGY STAR and the ENERGY STAR mark are registered trademarks owned
          by the U.S. Environmental Protection Agency.
        </p>
      </div>
    </section>
  );
}

export default DisplaysBenefits;
