
const cards = [
  [
    'Our Partner Labs',
    '7+ US-based specialty labs, each vetted for turnaround, communication, and clinical outcomes. Every case type: CB, implants, full-arch, removable, ortho, esthetics.',
  ],
  [
    'The Equipment',
    'One intraoral scanner or full arch system and more (TRIOS, Sirona X3 or iCAM) matched to your practice’s case mix and lab spend. Placed, installed, calibrated, trained, serviced, and fully warranted at no cost to your practice.',
  ],
  [
    'The Portal',
    'One login. Real-time case status across every partner lab. One consolidated monthly invoice regardless of how many labs touched your cases.',
  ],
  [
    'The Clinical Team',
    '85 years of combined clinical experience. A dedicated available for review before submission. Your advocate with every partner lab, every case.',
  ],
];

export default function Infrastructure() {
  return (
    <section className="px-[5%] py-11 text-center md:px-[max(4%,calc((100%-1120px)/2))] md:py-[76px]">
      <h2 className="mb-4 text-xl leading-snug font-normal text-[#17344b] md:text-[26px] [font-family:'Libre_Baskerville',Georgia,serif]">
        Incisive Is the Infrastructure Your Lab Relationships
        <br />
        Were Never Built to Be.
      </h2>

      <p className="mx-auto mb-8 max-w-[900px] text-[11px] leading-relaxed text-[#606b72] md:text-[13px]">
        One platform replaces the fragmented stack of portals, reps, invoices,
        and equipment costs your practice has been managing separately. Here’s
        what comes with every Incisive partnership, with no subscription
        required.
      </p>

      <div className="grid grid-cols-2 gap-x-2.5 gap-y-6 text-left md:grid-cols-4 md:gap-[18px]">
        {cards.map(([h, t], i) => (
          <article className="relative min-h-[250px] rounded-[14px] border border-[#91a9b7] px-3 pb-4 pt-10 md:min-h-[315px] md:px-[22px] md:pb-[22px] md:pt-[50px]" key={h}>
            <b className="absolute -top-4 left-1/2 grid h-[34px] w-[34px] -translate-x-1/2 place-items-center rounded-full border-4 border-white bg-[#3e80a6] text-lg leading-none text-white md:h-10 md:w-10 md:text-[22px] [font-family:Georgia,serif]">{i + 1}</b>
            <h3 className="text-xs font-bold text-[#284357] md:text-[15px]">{h}</h3>
            <p className="text-[10px] leading-relaxed text-[#53616a] md:text-xs">{t}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
