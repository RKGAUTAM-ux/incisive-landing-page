
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
    <section className="py-[48px] md:py-[72px]">

      <div className="max-w-[1450px] mx-auto  px-[24px]">
         <h2 className="max-w-[1070px] mx-auto text-center text-[#112B40] mb-[18px] md:mb-[24px] text-[26px] md:text-[40px] leading-[1.3] font-normal [font-family:'Libre_Baskerville',Georgia,serif]">
        Incisive Is the Infrastructure Your Lab Relationships Were Never Built to Be.
      </h2>

      <p className="mb-[40px] md:mb-[56px]  text-[14px] md:text-[22px] leading-[1.3] text-center">
        One platform replaces the fragmented stack of portals, reps, invoices,
        and equipment costs your practice has been managing separately. Here’s
        what comes with every Incisive partnership, with no subscription
        required.
      </p>

      <div className="grid grid-cols-1  gap-[16px] text-left sm:grid-cols-2 lg:grid-cols-4 md:gap-[18px]">
        {cards.map(([h, t], i) => (
          <article className="relative rounded-[14px] border-[1.5px] border-[#112B40] px-[24px] py-[32px] md:px-[40px] md:py-[40px] md:pt-[56px]" key={h}>
            <b className="outline outline-[#112B40] absolute md:-top-6 -top-5 left-1/2 grid h-[40px] w-[40px] -translate-x-1/2 place-items-center rounded-full border-4 border-white bg-[#3e80a6] text-[24px] leading-none text-white md:h-[60px] md:w-[60px] md:text-[38px] [font-family:Georgia,serif]">{i + 1}</b>
            <h3 className="text-[16px] font-bold text-[#112B40] md:text-[24px] mb-[12px] md:mb-[16px] leading-[1.3]">{h}</h3>
            <p className="text-[12px] leading-[1.2] text-[#3A4249] md:text-[20px]">{t}</p>
          </article>
        ))}
      </div>

      </div>


    </section>
  );
}
