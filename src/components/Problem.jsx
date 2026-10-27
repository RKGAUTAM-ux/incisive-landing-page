
const pain = [
  'Your front desk is spending hours each week across three lab portals, two phone trees, and a spreadsheet nobody trusts.',
  'Your staff is reconciling separate invoices from five different labs every billing cycle.',
  'Remakes are eroding chair time and patient confidence. They were preventable.',
  'You invested in a scanner, or you want to, but a $30,000-$60,000 capital ask is sitting between you and going digital.',
  'You need specialist-grade lab access for all-arch, implants, and esthetics, but you have no scalable way to spend enough to qualify.',
  'Nobody is watching your cases proactively. When something goes wrong, you find out at the worst possible moment.',
];

export default function Problem() {
  return (
    <section className="bg-[#112e43] px-[5%] py-11 text-center text-[#eaf0f4] md:px-[max(6%,calc((100%-1050px)/2))] md:py-[70px]">
      <h2 className="mb-5 text-xl leading-snug font-normal text-white md:text-[26px] [font-family:'Libre_Baskerville',Georgia,serif]">
        Your Lab Relationships Were Built Over Years.
        <br />
        Consolidation Erased Them in Months.
      </h2>

      <p className="mx-auto text-[11px] leading-relaxed text-[#d1dce3] md:text-[13px]">
        The independent dental lab you practice depended on for a decade has
        been acquired, restructured, or quietly retired. The ceramicist whose
        work your prep is known for has been replaced by a production floor
        with a different turnaround promise and no one accountable when a case
        comes back wrong. Meanwhile, the administrative layer around your lab
        work only got more complex.
      </p>

      <div className="my-5 grid grid-cols-1 gap-2.5 md:my-8 md:grid-cols-2 md:gap-[18px]">
        {pain.map((x, i) => (
          <div className="flex gap-2.5 rounded-[10px] border border-[#537084] p-3 text-left text-[11px] leading-relaxed md:p-[18px] md:text-[13px]" key={x}>
            <b className="text-[#6da4c0]">{i % 3 === 0 ? '✦' : i % 3 === 1 ? '✓' : '↗'}</b>
            {x}
          </div>
        ))}
      </div>

      <p className="mt-6 text-[11px] md:mt-8 md:text-[13px]">
        These aren't edge cases. They're the operational baseline for most
        practices spending $2,000+ per month in lab fees. Incisive was built to
        replace that baseline entirely.
      </p>
    </section>
  );
}
