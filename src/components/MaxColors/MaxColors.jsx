import silver from "../../assets/airpods.jpg";
import green from "../../assets/homepad.jpg";

const dots = ["#e3e4e6", "#4a4a4c", "#3d5f8a", "#e5565a", "#cfe0d0"];

function MaxColors() {
  return (
    <section className="bg-white px-4 pb-[100px] pt-[60px] lg:pt-[120px]">
      <div className="mx-auto max-w-[1317px]">
        <div className="flex items-end justify-between lg:px-[44px]">
          <h2 className="text-[34px] font-semibold leading-[1.2] sm:text-[48px] lg:text-[64px] lg:leading-[83px]">
            Five colors.
            <br />
            Anything but
            <br />
            monotone.
          </h2>
          <div className="mb-3 flex gap-3 lg:mb-6 lg:mr-[30px] lg:gap-5">
            {dots.map((c) => (
              <span
                key={c}
                className="h-4 w-4 rounded-full lg:h-[26px] lg:w-[26px]"
                style={{ background: c }}
              />
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:mt-[40px] lg:grid-cols-[837px_456px] lg:justify-center">
          <div className="relative flex h-[300px] items-center justify-center bg-[#f5f5f7] lg:h-[684px]">
            <img
              src={silver}
              alt="Silver AirPods Max"
              className="h-[80%] w-auto object-contain"
            />

            <svg
              viewBox="0 0 24 24"
              className="absolute bottom-5 left-5 h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M10 8l6 4-6 4z" fill="currentColor" />
            </svg>
          </div>
          <div className="flex h-[300px] items-end justify-center overflow-hidden bg-[#f5f5f7] lg:h-[684px]">
            <img
              src={green}
              alt="Green AirPods Max"
              className="h-[90%] w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MaxColors;
