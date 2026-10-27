
const rows = Array.from({ length: 6 }, (_, i) => i);

export default function Hero() {
  return (
    <section className="px-[3%] pb-8 pt-3 md:px-[4%] md:pb-12" id="top">
      <div className="hero-panel relative min-h-[650px] overflow-hidden rounded-2xl px-[5%] pt-8 md:rounded-[18px] md:pt-9">
        <div className="mx-auto max-w-[1000px] text-center">
          <h1 className="mb-5 text-[27px] leading-tight font-normal text-[#17344b] md:text-5xl md:leading-[1.25] [font-family:'Libre_Baskerville',Georgia,serif]">
            One Platform. 7+ Vetted Labs. No
            <br className="hidden md:block" /> Equipment Cost. No Lab Chaos.
          </h1>

          <p className="mx-auto my-2 max-w-[900px] text-xs leading-relaxed text-[#4f5c64] md:text-[15px]">
            Incisive gives restorative and surgical practices a single portal,
            a single invoice, no-cost digital scanning equipment, and a
            dedicated clinical team sitting between your practice and every
            partner lab. All with no subscription required.
          </p>

          <p className="mx-auto my-2 max-w-[900px] text-xs leading-relaxed text-[#4f5c64] md:text-[15px]">
            Join 650+ dentists who stopped chasing portals and started
            focusing on patients.
          </p>

          <a className="my-4 inline-flex items-center justify-center gap-4 rounded-full bg-[#3d83a8] px-7 py-2.5 text-sm text-white transition hover:-translate-y-0.5 hover:bg-[#286887] md:px-9 md:py-3 md:text-base [font-family:'Libre_Baskerville',Georgia,serif]" href="#book">
            Book a Demo <span>→</span>
          </a>

          <small className="block text-[10px] text-[#66747c] md:text-[11px]">
            No subscription required. No equipment cost. Minimum lab spend applies.
          </small>
        </div>

        <div className="dashboard-frame"><img src="/images/dashboard.png" alt="Incisive case management dashboard preview" /></div>
      </div>
    </section>
  );
}
