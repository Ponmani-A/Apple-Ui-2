import accessories from "../../assets/airpods.jpg";
import mac from "../../assets/macbook.jpg";
import earth from "../../assets/displays-earth.jpg";

const heading =
  "text-[32px] font-semibold leading-[1.15] sm:text-[40px] lg:text-[44px] lg:leading-[52px]";

function DisplaysCards() {
  return (
    <section className="bg-white px-3 pb-[30px] pt-[25px] lg:px-[30px]">
      <div className="mx-auto max-w-[1380px]">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="relative flex min-h-[480px] flex-col items-center overflow-hidden rounded-[18px] bg-[#fafafa] pt-[40px] text-center lg:h-[596px] lg:pt-[57px]">
            <p className="text-[15px] font-semibold lg:text-[17px]">
              Accessories
            </p>
            <h2 className={`mt-[19px] ${heading}`}>
              Explore Mac
              <br />
              accessories.
            </h2>
            <a
              href="#"
              className="mt-6 inline-flex h-[37px] items-center rounded-full bg-[#0071e3] px-5 text-[17px] text-white"
            >
              Shop
            </a>
          </div>

          <div className="relative flex min-h-[480px] flex-col items-center overflow-hidden rounded-[18px] bg-[#fafafa] pt-[40px] text-center lg:h-[596px] lg:pt-[57px]">
            <p className="text-[15px] font-semibold lg:text-[17px]">Mac</p>
            <h2 className={`mt-[19px] ${heading}`}>
              Find the Mac
              <br />
              that’s right for you.
            </h2>
            <a
              href="#"
              className="mt-6 inline-flex h-[37px] items-center rounded-full bg-[#0071e3] px-5 text-[17px] text-white"
            >
              Shop
            </a>
            <a
              href="#"
              className="mt-3 text-[17px] text-[#06c] hover:underline"
            >
              Compare all models
            </a>
          </div>
        </div>

        <div className="relative mt-5 flex flex-col items-center overflow-hidden rounded-[18px] bg-[#fafafa] px-6 py-10 lg:block lg:h-[600px] lg:p-0">
          <img
            src={earth}
            alt=""
            className="h-[300px] w-auto lg:absolute lg:left-[288px] lg:top-[59px] lg:h-[509px]"
          />
          <div className="mt-8 lg:absolute lg:left-[618px] lg:top-[128px] lg:mt-0 lg:w-[490px]">
            <h2 className="text-[32px] font-semibold leading-[1.15] text-[#03a10e] sm:text-[40px] lg:text-[44px] lg:leading-[52px]">
              Designed with
              <br />
              the earth in mind.
            </h2>
            <p className="mt-6 text-[17px] leading-[1.45] lg:mt-[40px] lg:text-[21px] lg:leading-[25px]">
              Every Apple display has been carefully designed to minimize its
              environmental impact. The enclosures of both Studio Display and
              Pro Display XDR are made with low-carbon aluminum, and the solder
              of the logic boards uses 100 percent recycled tin. Both displays
              are ENERGY STAR® certified² and free of numerous harmful
              substances, like mercury and PVC. All the virgin wood fiber in our
              packaging comes from responsibly managed forests.
            </p>
            <a
              href="#"
              className="mt-6 block text-[17px] text-[#06c] hover:underline lg:mt-[35px]"
            >
              Learn more about Apple and the environment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DisplaysCards;
