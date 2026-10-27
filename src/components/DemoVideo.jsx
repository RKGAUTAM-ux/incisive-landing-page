
export default function DemoVideo() {
  return (
    <section className="px-[4%] pb-10 md:px-[max(4%,calc((100%-1120px)/2))] md:pb-[70px]">
      <p className="mb-2 text-xs">See how it works, start to finish.</p>

      <a
        className="video-panel group relative flex h-[210px] items-center justify-center overflow-hidden rounded-[14px] border border-[#80909a] text-white no-underline md:h-[420px]"
        href="#book"
        aria-label="Watch the Incisive platform overview"
      >
        <span className="absolute left-1/2 top-[43%] grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-white bg-white/20 pl-1 transition group-hover:bg-[#4383a8] md:h-[58px] md:w-[58px]">▶</span>

        <strong className="text-[30px] font-semibold tracking-[6px] md:text-[70px] md:tracking-[13px]">
          INC<span>I</span>SIVE
        </strong>
      </a>
    </section>
  );
}
