
const rows = Array.from({ length: 6 }, (_, i) => i);

export default function Hero() {
  return (
    <section className="pb-[40px] sm:pb-[64px] px-[24px]" id="top">
      <div className="relative max-w-[1480px] mx-auto min-h-[650px] overflow-hidden rounded-[16px] px-[16px] pt-[26px] sm:rounded-[25px] bg-[url(/images/incisive-lp-hero-bg.svg)] bg-center
">
        <div className="mx-auto text-center">
          <h1 className="max-w-[1000px] mx-auto mb-[24px] text-[32px] md:text-[56px] leading-tight font-normal text-[#112B40] md:leading-[1.25] [font-family:'Libre_Baskerville',Georgia,serif]">
            One Platform. 7+ Vetted Labs. No Equipment Cost. No Lab Chaos.
          </h1>

          <p className=" text-[#3A4249] text-[14px] md:text-[24px] leading-[1.3] mb-[20px]">
            Incisive gives restorative and surgical practices a single portal,
            a single invoice, no-cost digital scanning equipment, and a
            dedicated clinical team sitting between your practice and every
            partner lab. All with no subscription required.
          </p>

          <p className="text-[#3A4249] text-[14px] md:text-[24px] leading-[1.3] mb-[40px] sm:mb-[64px]">
            Join 650+ dentists who stopped chasing portals and started
            focusing on patients.
          </p>

          <a className="inline-flex items-center justify-center gap-[8px] rounded-full bg-[#3d83a8] px-[32px] py-[8px] mb-[20px] text-[24px] md:text-[32px] w-full md:w-[355px] text-white transition hover:-translate-y-0.5 hover:bg-[#286887]  [font-family:'Libre_Baskerville',Georgia,serif]" href="https://joinincisive.com/contact">
            Book a Demo <span>→</span>
          </a>

          <small className="block text-[12px] text-[#3A4249] md:text-[18px]">
            No subscription required. No equipment cost. Minimum lab spend applies.
          </small>
        </div>

        <div className=""><img className="mx-auto mt-[40px] sm:mt-[64px]" src="/images/dashboard.png" alt="Incisive case management dashboard preview" /></div>
      </div>
    </section>
  );
}
