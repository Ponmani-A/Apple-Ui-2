import { useState } from "react";
import tedLasso from "../../assets/tedlesso.jpg";
import tvLeft from "../../assets/tv-left.jpg";
import tvRight from "../../assets/tv-right.jpg";

function TvCarousel() {
  const [active, setActive] = useState(0);
  const dots = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <section className="mb-5">
      <div className="flex h-[240px] justify-center gap-2 px-2 sm:h-[360px] md:gap-3 md:px-0 lg:h-[522px]">
        <img
          src={tvRight}
          alt=""
          className="hidden h-full w-[14.8%] object-cover md:block"
        />
        <img
          src={tedLasso}
          alt="Ted Lasso"
          className="h-full w-full object-cover md:w-[68%]"
        />
        <img
          src={tvLeft}
          alt=""
          className="hidden h-full w-[14.8%] object-cover md:block"
        />
      </div>

      <div className="mt-5 flex justify-center gap-2.5">
        {dots.map((d) => (
          <button
            key={d}
            onClick={() => setActive(d)}
            aria-label={`Slide ${d + 1}`}
            className={`h-[7px] w-[7px] cursor-pointer rounded-full ${
              d === active ? "bg-[#6e6e73]" : "bg-[#c7c7cc]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default TvCarousel;
