function CompareSection({ title, sup, children }) {
  return (
    <section className="mt-[90px] lg:mt-[150px]">
      <h2 className="border-b border-[#d2d2d7] pb-5 text-[24px] font-semibold leading-tight lg:text-[28px]">
        {title}
        {sup && <sup className="ml-0.5 text-[16px] font-normal">{sup}</sup>}
      </h2>
      <div className="mt-8 lg:mt-[58px]">{children}</div>
    </section>
  );
}

export default CompareSection;
