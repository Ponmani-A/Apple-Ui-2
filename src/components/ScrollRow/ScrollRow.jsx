function ScrollRow({ children }) {
  return (
    <div className="mx-auto flex max-w-[980px] gap-3 overflow-x-auto px-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {children}
    </div>
  );
}

export default ScrollRow;
