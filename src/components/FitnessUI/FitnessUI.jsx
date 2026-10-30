export const wrap = "mx-auto max-w-[980px] px-5";

export function H2({ children, className = "" }) {
  return (
    <h2
      className={`text-[34px] font-semibold leading-[1.2] sm:text-[44px] lg:text-[56px] lg:leading-[67px] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Body({ children, className = "" }) {
  return (
    <p
      className={`text-[16px] font-semibold leading-[1.35] text-[#86868b] lg:text-[21px] lg:leading-[25px] ${className}`}
    >
      {children}
    </p>
  );
}

// Neon green button. big = hero size (151 x 58)
export function NeonBtn({ children, big = false }) {
  return (
    <a
      href="#"
      className={`inline-flex items-center justify-center rounded-full bg-[#a5ff00] font-semibold text-black ${
        big
          ? "h-[48px] w-[140px] text-[17px] lg:h-[58px] lg:w-[151px] lg:text-[19px]"
          : "h-[40px] w-[170px] text-[15px] lg:h-[48px] lg:w-[202px] lg:text-[17px]"
      }`}
    >
      {children}
    </a>
  );
}

export function Rail({ children }) {
  return (
    <div>
      <div className="no-scrollbar overflow-x-auto">
        <div className="flex w-max gap-[25px] px-5 lg:pl-[calc(50%-490px)] lg:pr-[60px]">
          {children}
        </div>
      </div>
      <div className={`${wrap} mt-6 flex justify-end lg:mt-[40px]`}>
        <span className="flex h-[29px] w-[29px] items-center justify-center rounded-full border border-black">
          <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
