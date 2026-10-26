
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
    <section className="problem">
      <h2>
        Your Lab Relationships Were Built Over Years.
        <br />
        Consolidation Erased Them in Months.
      </h2>

      <p>
        The independent dental lab you practice depended on for a decade has
        been acquired, restructured, or quietly retired. The ceramicist whose
        work your prep is known for has been replaced by a production floor
        with a different turnaround promise and no one accountable when a case
        comes back wrong. Meanwhile, the administrative layer around your lab
        work only got more complex.
      </p>

      <div className="pain-grid">
        {pain.map((x, i) => (
          <div key={x}>
            <b>{i % 3 === 0 ? '✦' : i % 3 === 1 ? '✓' : '↗'}</b>
            {x}
          </div>
        ))}
      </div>

      <p className="closing">
        These aren't edge cases. They're the operational baseline for most
        practices spending $2,000+ per month in lab fees. Incisive was built to
        replace that baseline entirely.
      </p>
    </section>
  );
}
