import appleLogo from "../../assets/Apple.png";
import phone from "../../assets/fitnes.jpg";
import { wrap, NeonBtn } from "../FitnessUI/FitnessUI";

function FitnessHero() {
  return (
    <section className="px-0 pt-[50px] lg:pt-[91px]">
      <div className="px-5 text-center">
        <p className="flex items-center justify-center gap-1 text-[24px] font-semibold leading-none lg:text-[32px]">
          <img
            src={appleLogo}
            alt=""
            className="h-[18px] w-auto invert lg:h-[26px]"
          />
          Fitness+
        </p>
        <h1 className="mt-[14px] text-[38px] font-semibold leading-[1.15] sm:text-[52px] lg:mt-[28px] lg:text-[72px] lg:leading-[84px]">
          Fitness for everyone.
          <br />
          Now all you need is iPhone.
        </h1>

        <div className="mx-auto mt-6 h-[200px] max-w-[965px] overflow-hidden rounded-[32px] border-[6px] border-[#2a2a2c] bg-black sm:h-[320px] lg:mt-[28px] lg:h-[483px] lg:rounded-[60px] lg:border-[10px]">
          <img
            src={phone}
            alt="Fitness+ on iPhone"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="mt-[28px] lg:mt-[44px]">
          <NeonBtn big>Try it free*</NeonBtn>
        </div>
      </div>

      <div className={wrap}>
        <p className="mt-[60px] max-w-[880px] text-[20px] font-semibold leading-[1.3] text-[#1d1d1f] lg:mt-[145px] lg:text-[28px] lg:leading-[36px]">
          Everyone is welcome at Apple Fitness+. Now all you need is iPhone to
          subscribe and access thousands of video and audio workouts —
          everything from HIIT to Yoga. And guided meditations. Take it further
          with personalized metrics from Apple Watch. Find it in the Fitness app
          on iPhone, iPad, or Apple TV.
        </p>

        <div className="mt-[60px] grid gap-10 md:grid-cols-2 md:gap-[50px] lg:mt-[170px]">
          <div>
            <h3 className="text-[20px] font-semibold lg:text-[24px]">
              3 months free
            </h3>
            <p className="mt-3 max-w-[350px] text-[15px] font-semibold leading-[1.45] text-[#86868b] lg:text-[17px] lg:leading-[26px]">
              Buy an iPhone, Apple Watch, iPad, or Apple TV, and Apple Fitness+
              is free for 3 months for new subscribers. Then $9.99/month or
              $79.99 annually.1 Share Apple Fitness+ with up to five family
              members.2
            </p>
            <div className="mt-6 lg:mt-[30px]">
              <NeonBtn>Shop now</NeonBtn>
            </div>
          </div>
          <div>
            <h3 className="text-[20px] font-semibold lg:text-[24px]">
              1 month free
            </h3>
            <p className="mt-3 max-w-[350px] text-[15px] font-semibold leading-[1.45] text-[#86868b] lg:text-[17px] lg:leading-[26px]">
              New subscribers get 1 month free, then pay $9.99/month or $79.99
              annually.* Share Apple Fitness+ with up to five family members.2
            </p>
            <div className="mt-6 lg:mt-[30px]">
              <NeonBtn>Try it free</NeonBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FitnessHero;
