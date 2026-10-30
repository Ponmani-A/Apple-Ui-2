// Text container: 1012px, left 214px @1440
export const wrap = "mx-auto w-full max-w-[1012px] px-5";

export function Label({ children }) {
  return (
    <p className="text-[14px] font-semibold text-white lg:text-[20px]">
      {children}
    </p>
  );
}

export function Big({ children, className = "" }) {
  return (
    <h2
      className={`mt-4 break-words text-[44px] font-semibold leading-[1.1] text-white sm:text-[64px] lg:mt-[30px] lg:text-[90px] lg:leading-[100px] ${className}`}
    >
      {children}
    </h2>
  );
}

// large = 38/52, normal = 26/34
export function Para({ children, large = false, className = "" }) {
  return (
    <p
      className={`font-semibold text-white ${
        large
          ? "text-[22px] leading-[1.4] lg:text-[38px] lg:leading-[52px]"
          : "text-[17px] leading-[1.4] lg:text-[26px] lg:leading-[34px]"
      } ${className}`}
    >
      {children}
    </p>
  );
}

// Side text: grey, with <B> white bold and <G> green highlight
export function Side({ children, className = "" }) {
  return (
    <p
      className={`text-[14px] font-semibold leading-[1.5] text-[#86868b] lg:text-[18px] lg:leading-[28px] ${className}`}
    >
      {children}
    </p>
  );
}
export const B = ({ children }) => (
  <b className="font-semibold text-white">{children}</b>
);
export const G = ({ children }) => (
  <b className="font-semibold text-[#00ff40]">{children}</b>
);
