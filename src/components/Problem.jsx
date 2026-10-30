
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
    <section className="bg-[#112B40]  py-[48px] md:py-[72px] text-center text-[#ffffff]">
      <div className="max-w-[1450px] mx-auto  px-[24px]">
       <h2 className="max-w-[950px] mx-auto text-white mb-[18px] md:mb-[24px] text-[26px] md:text-[40px] leading-[1.3] font-normal font-[Georgia,'Times_New_Roman',serif]">
        Your Lab Relationships Were Built Over Years. Consolidation Erased Them in Months.
      </h2>

      <p className="mb-[40px] md:mb-[48px]  text-[14px] md:text-[22px] leading-[1.3]">
        The independent dental lab you practice depended on for a decade has
        been acquired, restructured, or quietly retired. The ceramicist whose
        work your prep is known for has been replaced by a production floor
        with a different turnaround promise and no one accountable when a case
        comes back wrong. Meanwhile, the administrative layer around your lab
        work only got more complex.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]  md:gap-[30px] lg:gap-x-[64px] mb-[30px] md:mb-[48px]">
        {pain.map((x, i) => (
          <div className="flex gap-2.5 rounded-[10px] border border-[#fff] p-[16px] md:p-[24px]  text-left  leading-[1.3] text-[12px] md:text-[20px]" key={x}>
            <b className="text-[#fff] ">{i % 3 === 0 ? '•' : i % 3 === 1 ? '•' : '•'}</b>
            {x}
          </div>
        ))}
      </div>

      <p className="text-[14px] md:text-[22px] leading-[1.3] italic">
        These aren't edge cases. They're the operational baseline for most
        practices spending $2,000+ per month in lab fees. Incisive was built to
        replace that baseline entirely.
      </p>
      </div>
    </section>
  );
}
