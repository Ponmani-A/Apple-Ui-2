import cup from "../../assets/airpods_max_pro_design.png";
import dancer from "../../assets/dancer.jpg";
import mesh from "../../assets/mesh.jpg";
import cushion from "../../assets/cushion.jpg";
import bigCup from "../../assets/bigCup.png";

const label = "text-[15px] font-semibold lg:text-[18px]";
const h2Big =
  "text-[44px] font-semibold leading-[1.09] sm:text-[64px] lg:text-[110px] lg:leading-[120px]";
const body =
  "text-[17px] font-semibold leading-[1.4] lg:text-[21px] lg:leading-[26px]";
const small =
  "text-[15px] leading-[22px] text-[#6e6e73] lg:text-[17px] lg:leading-6";
const strong = "font-semibold text-black";

function MaxDesign() {
  return (
    <section className="bg-white pb-[100px]">
      <div className="mx-auto max-w-[980px] px-5">
        <p className={label}>Design</p>
        <h2 className={`mt-3 ${h2Big}`}>
          A radically
          <br />
          original
          <br />
          composition.
        </h2>
        <p className={`mt-6 lg:ml-[480px] lg:mt-0 lg:max-w-[470px] ${body}`}>
          The over-ear headphone has been completely reimagined. From cushion to
          canopy, AirPods Max are designed for an uncompromising fit that
          creates the optimal acoustic seal for many different head shapes —
          fully immersing you in every sound.
        </p>

        <div className="relative mx-auto mt-12 lg:h-[600px]">
          <img
            src={cup}
            alt="AirPods Max"
            className="mx-auto w-[220px] sm:w-[340px] lg:w-[481px]"
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-0 lg:block">
            <p
              className={`${small} lg:absolute lg:left-0 lg:top-[22px] lg:w-[258px]`}
            >
              The <b className={strong}>canopy</b> spanning the headband is made
              from a breathable knit mesh, distributing weight to reduce on-head
              pressure.
            </p>
            <p
              className={`${small} lg:absolute lg:left-0 lg:top-[214px] lg:w-[258px]`}
            >
              The <b className={strong}>stainless steel frame</b> is wrapped
              with a soft-to-the-touch material for a remarkable combination of
              strength, flexibility, and comfort.
            </p>
            <p
              className={`${small} lg:absolute lg:left-[618px] lg:top-[360px] lg:w-[258px]`}
            >
              <b className={strong}>Telescoping arms</b> smoothly extend and
              stay where you set them, for a consistent fit and seal.
            </p>
            <p
              className={`${small} lg:absolute lg:left-1/2 lg:top-[500px] lg:w-[370px] lg:-translate-x-1/2 lg:text-center`}
            >
              The <b className={strong}>beautifully anodized aluminum cups</b>{" "}
              feature a revolutionary mechanism that allows each cup to rotate
              independently and balance pressure.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[60px] grid max-w-[1317px] gap-6 px-4 lg:grid-cols-[837px_456px] lg:justify-center lg:px-0">
        <img
          src={dancer}
          alt=""
          className="h-[420px] w-full object-cover lg:h-[1310px]"
        />
        <div className="flex flex-col gap-6">
          <div>
            <img
              src={mesh}
              alt=""
              className="h-[300px] w-full object-cover lg:h-[605px]"
            />
            <p className={`mt-4 ${small}`}>
              A <b className={strong}>custom-designed mesh textile</b> wraps the
              ear cushions to provide pillow-like softness while listening.
            </p>
          </div>
          <div>
            <img
              src={cushion}
              alt=""
              className="h-[300px] w-full object-cover lg:h-[605px]"
            />
            <p className={`mt-4 ${small}`}>
              Crafted with acoustically engineered memory foam, the{" "}
              <b className={strong}>ear cushions</b> gently create an immersive
              seal that is the foundation of incredible sound.
            </p>
          </div>
        </div>
      </div>

      <img
        src={bigCup}
        alt=""
        className="ml-auto mt-[80px] h-[260px] w-[92%] object-cover lg:h-[721px] lg:w-[85%]"
      />
    </section>
  );
}

export default MaxDesign;
