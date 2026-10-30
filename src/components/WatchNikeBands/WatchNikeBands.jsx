import band1 from "../../assets/watch-set.jpg";

function WatchNikeBands() {
  return (
    <section className="px-4">
      <div className="mx-auto max-w-[1104px]">
        <p className="mt-[60px] max-w-[820px] text-[17px] font-semibold leading-[1.45] text-[#86868b] sm:text-[20px] lg:mt-[198px] lg:text-[22px] lg:leading-[30px]">
          <span className="text-[#1d1d1f]">Your favorite bands.</span> Nothing
          says you’re a runner like the Nike Sport Loop. Or add color to your
          workouts with options for the Nike Sport Band. You can customize or
          match your favorite band to your Nike watch face.
        </p>

        <a
          href="#"
          className="mt-3 inline-block text-[17px] font-semibold text-[#06c] hover:underline lg:mt-[20px] lg:text-[22px]"
        >
          Shop the latest bands
        </a>
      </div>

      <div className="no-scrollbar mx-auto mt-[40px] max-w-[1272px] overflow-x-auto rounded-[20px] bg-[#f5f5f7] lg:mt-[71px]">
        <div className="flex min-w-[620px] items-center justify-center px-4 py-8 lg:min-w-full lg:px-[75px] lg:py-[60px]">
          <img
            src={band1}
            alt="Apple Watch Nike bands"
            className="h-auto w-full max-w-[900px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default WatchNikeBands;
