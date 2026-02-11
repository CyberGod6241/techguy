function Liner() {
  return (
    <div className="fixed top-0 bottom-0 w-full pointer-events-none">
      <div className="relative mx-auto max-w-[53rem] h-full">
        <div className="absolute left-0 top-0 h-screen w-[1px] bg-zinc-500 opacity-50"></div>
        <div className="absolute right-0 top-0 h-screen w-[1px] bg-zinc-500 opacity-50"></div>
      </div>
    </div>
  );
}

export default Liner;
