import hero from "../../assets/displays-hero.jpg";

const name =
  "text-[32px] font-semibold leading-[1.1] sm:text-[40px] lg:text-[44px]";
const desc =
  "mx-auto mt-[14px] max-w-[380px] text-[17px] font-semibold leading-[1.2] lg:text-[21px] lg:leading-[25px]";
const buy =
  "inline-flex h-[44px] w-[72px] items-center justify-center rounded-full bg-[#0071e3] text-[17px] text-white";

function DisplaysHero() {
  return (
    <section className="bg-white px-4 pb-[60px] pt-[40px] text-center lg:pb-[98px] lg:pt-[74px]">
      <h1 className="text-[44px] font-semibold leading-none sm:text-[60px] lg:text-[72px]">
        Displays
      </h1>

      <img
        src={hero}
        alt="Studio Display and Pro Display XDR"
        className="mx-auto mt-8 w-full max-w-[1048px] lg:mt-[73px]"
      />

      <div className="mx-auto mt-10 grid max-w-[984px] gap-14 md:grid-cols-2 lg:mt-[104px] lg:-translate-x-[22px]">
        <div>
          <h2 className={name}>Studio Display</h2>
          <p className={desc}>
            An immersive 5K Retina display with outstanding camera and audio.
          </p>
          <p className="mt-[40px] text-[17px]">From $1599</p>
          <div className="mt-[30px] flex items-center justify-center gap-8">
            <a href="#" className={buy}>
              Buy
            </a>
            <a href="#" className="text-[17px] text-[#06c] hover:underline">
              Learn more
            </a>
          </div>
        </div>

        <div>
          <h2 className={name}>Pro Display XDR</h2>
          <p className={desc}>
            A brilliant 32-inch 6K Retina display, our most advanced for pros.
          </p>
          <p className="mt-[40px] text-[17px]">From $4999</p>
          <div className="mt-[30px] flex items-center justify-center gap-8">
            <a href="#" className={buy}>
              Buy
            </a>
            <a href="#" className="text-[17px] text-[#06c] hover:underline">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DisplaysHero;
