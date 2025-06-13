export default function BySection() {
  return (
    <section className="bg-black w-full text-white py-16 px-6 relative overflow-hidden font-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between">
        <div className="text-left space-y-2">
          <div className="text-[2.5rem] md:text-[4rem] font-black leading-none tracking-tight text-gray-300">
            <span className="block">BY.</span>
            <span className="block font-black">
              SAYAN<sup className="text-3xl align-super">®</sup>
            </span>
            <span className="block">STUDIO</span>
          </div>
          <div className="w-10 h-[6px] bg-gray-400 mt-2" />
        </div>

        <div className="text-right mt-10 md:mt-0">
          <span className="text-[3rem] md:text-[4.5rem] font-black text-neutral-700 tracking-tight">
            /FROM <br />
            INDIA
          </span>
        </div>
      </div>
    </section>
  );
}
