import appleLogo from "../../assets/Apple.png";
import hero from "../../assets/Watch_apple_2.jpg";

function WatchNikeHero() {
  return (
    <section className="bg-white px-4">
      <div className="mx-auto mt-[24px] h-[260px] max-w-[1272px] overflow-hidden bg-black sm:h-[400px] lg:mt-[40px] lg:h-[500px]">
        <img
          src={hero}
          alt="Apple Watch Nike"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mx-auto max-w-[1104px] px-1 lg:px-0">
        <div className="mt-[40px] flex items-center lg:mt-[91px]">
          <img
            src={appleLogo}
            alt=""
            className="h-[22px] w-auto invert lg:h-[32px]"
          />
          <span className="ml-1 text-[24px] font-bold leading-none tracking-tight lg:text-[34px]">
            WATCH
          </span>
          <span className="mx-4 h-[26px] w-[2px] bg-black lg:mx-6 lg:h-[36px]" />

          <svg
            viewBox="0 0 100 36"
            className="h-[18px] w-auto lg:h-[26px]"
            fill="currentColor"
          >
            <path d="M3 25c-2 4 3 8 10 8 5 0 12-2 26-9L97 2 61 13C44 18 22 19 11 15 5 13 5 20 3 25z" />
          </svg>
        </div>

        <h1 className="mt-[24px] text-[44px] font-semibold leading-[1.05] sm:text-[56px] lg:mt-[47px] lg:text-[72px]">
          Run with it.
        </h1>

        <p className="mt-[20px] max-w-[760px] text-[20px] font-semibold leading-[1.35] text-[#86868b] sm:text-[24px] lg:mt-[42px] lg:text-[28px] lg:leading-[40px]">
          Take your running even further. Add a Nike face or band to your Apple
          Watch and use the Nike Run Club app as your favorite running partner.
        </p>

        <p className="mt-[60px] max-w-[790px] text-[17px] font-semibold leading-[1.45] text-[#86868b] sm:text-[20px] lg:mt-[194px] lg:text-[22px] lg:leading-[30px]">
          <span className="text-[#1d1d1f]">Nike Run Club on Apple Watch.</span>{" "}
          Nike Run Club is your coach, community, and journal. Just like you,
          the app is always getting better. With updates that bring advanced
          features straight to Apple Watch, it will have you running like
          clockwork.
        </p>
      </div>
    </section>
  );
}

export default WatchNikeHero;
