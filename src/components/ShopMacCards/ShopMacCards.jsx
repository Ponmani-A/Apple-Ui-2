export function Section({ dark, light, id, children }) {
  return (
    <section id={id} className="mt-[50px] lg:mt-[73px]">
      <h2 className="mx-auto mb-[22px] max-w-[980px] px-5 text-[20px] font-semibold leading-[28px] sm:text-[24px] lg:mb-[27px]">
        <span>{dark}</span> <span className="text-[#86868b]">{light}</span>
      </h2>
      <div className="no-scrollbar overflow-x-auto">
        <div className="flex w-max gap-[22px] px-5 lg:pl-[calc(50%-490px)] lg:pr-[60px]">
          {children}
        </div>
      </div>
    </section>
  );
}

export function Card({ width = "lg:w-[478px]", dark = false, children }) {
  return (
    <div
      className={`relative h-[440px] w-[300px] flex-none overflow-hidden rounded-[18px] sm:w-[360px] lg:h-[500px] ${width} ${
        dark ? "bg-black text-white" : "bg-white text-[#1d1d1f]"
      }`}
    >
      {children}
    </div>
  );
}

// Label (chinna uppercase) + title
export function Copy({ label, title, dark = false, small = false }) {
  return (
    <div className="px-[30px] pt-[34px]">
      {label && (
        <p
          className={`text-[11px] font-semibold uppercase tracking-[0.04em] ${dark ? "text-[#a1a1a6]" : "text-[#6e6e73]"}`}
        >
          {label}
        </p>
      )}
      <h3
        className={`mt-[16px] font-semibold ${
          small
            ? "text-[20px] leading-[26px] lg:text-[24px] lg:leading-[28px]"
            : "text-[22px] leading-[28px] lg:text-[28px] lg:leading-[32px]"
        }`}
      >
        {title}
      </h3>
    </div>
  );
}

export function PlayButton() {
  return (
    <span className="absolute bottom-[30px] right-[30px] flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#4a4a4c] text-white">
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
        <path d="M7 4.5v15a1 1 0 0 0 1.5.9l12-7.5a1 1 0 0 0 0-1.8l-12-7.5A1 1 0 0 0 7 4.5z" />
      </svg>
    </span>
  );
}
