import appleLogo from "../../assets/Apple.png";
import arImg from "../../assets/airpods.jpg";
import engraveImg from "../../assets/airpods.jpg";
import musicImg from "../../assets/airpods.jpg";

const dots = ["#e3e4e6", "#4a4a4c", "#3d5f8a", "#e5565a", "#cfe0d0"];
const h3 =
  "text-[28px] font-semibold leading-[1.2] lg:text-[40px] lg:leading-[52px]";

function MaxCards() {
  return (
    <section className="space-y-5 bg-white px-4 pb-[80px]">
      <div className="mx-auto max-w-[1317px] space-y-5">
        <div className="grid items-center overflow-hidden bg-[#f2f2f2] lg:h-[463px] lg:grid-cols-2">
          <img
            src={arImg}
            alt=""
            className="h-[220px] w-full object-contain lg:h-[360px]"
          />
          <div className="px-8 pb-10 lg:p-0">
            <h3 className={h3}>
              Use AR to see
              <br />
              AirPods Max.
            </h3>
            <p className="mt-3 max-w-[300px] text-[15px] leading-6 text-[#86868b] lg:text-[19px]">
              Open this page using Safari on your iPhone or iPad.
            </p>
            <div className="mt-4 flex gap-3">
              {dots.map((c) => (
                <span
                  key={c}
                  className="h-5 w-5 rounded-full"
                  style={{ background: c }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid items-center overflow-hidden bg-[#f2f2f2] lg:h-[463px] lg:grid-cols-2">
          <div className="px-8 py-10 lg:p-0 lg:pl-[109px]">
            <h3 className={h3}>
              Say it in a way
              <br />
              only you can.
            </h3>
            <p className="mt-3 max-w-[300px] text-[15px] leading-6 lg:text-[17px]">
              Discover new engraving options for AirPods. Mix emoji, text, and
              numbers.
            </p>
            <a
              href="#"
              className="mt-1 block text-[15px] text-[#06c] hover:underline lg:text-[17px]"
            >
              Buy AirPods Max
            </a>
          </div>
          <img
            src={engraveImg}
            alt=""
            className="h-[220px] w-full object-contain lg:h-[360px]"
          />
        </div>

        <div className="grid items-center overflow-hidden bg-[#f2f2f2] lg:h-[463px] lg:grid-cols-2">
          <img
            src={musicImg}
            alt=""
            className="h-[220px] w-full object-contain lg:h-[360px]"
          />
          <div className="px-8 pb-10 lg:p-0">
            <p className="flex items-center gap-1 text-[17px] font-semibold lg:text-[21px]">
              <img
                src={appleLogo}
                alt=""
                className="h-[16px] w-auto invert lg:h-[20px]"
              />
              Music
            </p>
            <h3 className={`mt-2 ${h3}`}>
              Get 6 months
              <br />
              of Apple Music
              <br />
              free with your
              <br />
              AirPods Max.*
            </h3>
            <a
              href="#"
              className="mt-2 block text-[15px] text-[#06c] hover:underline lg:text-[17px]"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MaxCards;
