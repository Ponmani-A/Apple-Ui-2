import delivery from "../../assets/airpods-benefit-delivery.png";
import apr from "../../assets/airpods-benefit-apr.png";
import help from "../../assets/airpods-benefit-help.png";
import engrave from "../../assets/airpods-benefit-engrave.png";

function AirpodsBenefits() {
  return (
    <section className="mx-auto mt-24 grid max-w-[1000px] gap-10 px-6 text-center sm:grid-cols-2 lg:mt-[120px] lg:grid-cols-4">
      <div className="flex flex-col items-center">
        <img src={delivery} alt="" className="h-8 w-auto" />
        <p className="mt-3 text-[13px] font-semibold">Fast, free delivery</p>
        <p className="mt-1 max-w-[200px] text-[13px] leading-snug">
          Or pick up available items at an Apple Store.
        </p>
        <a href="#" className="mt-1 text-[13px] text-[#06c] hover:underline">
          Learn more
        </a>
      </div>
      <div className="flex flex-col items-center">
        <img src={apr} alt="" className="h-8 w-auto" />
        <p className="mt-3 text-[13px] font-semibold">Pay monthly at 0% APR</p>
        <p className="mt-1 max-w-[220px] text-[13px] leading-snug">
          You can pay over time when you choose to check out with Apple Card
          Monthly Installments.†
        </p>
        <a href="#" className="mt-1 text-[13px] text-[#06c] hover:underline">
          Learn more
        </a>
      </div>
      <div className="flex flex-col items-center">
        <img src={help} alt="" className="h-8 w-auto" />
        <p className="mt-3 text-[13px] font-semibold">Get help buying</p>
        <p className="mt-1 max-w-[200px] text-[13px] leading-snug">
          Have a question? Call a Specialist or chat online. Call
          1-800-MY-APPLE.
        </p>
        <a href="#" className="mt-1 text-[13px] text-[#06c] hover:underline">
          Contact us
        </a>
      </div>
      <div className="flex flex-col items-center">
        <img src={engrave} alt="" className="h-8 w-auto" />
        <p className="mt-3 text-[13px] font-semibold">Make them yours.</p>
        <p className="mt-1 max-w-[220px] text-[13px] leading-snug">
          Engrave your AirPods with initials or favorite emoji — free. Only at
          Apple.
        </p>
        <a href="#" className="mt-1 text-[13px] text-[#06c] hover:underline">
          Learn more
        </a>
      </div>
    </section>
  );
}

export default AirpodsBenefits;
