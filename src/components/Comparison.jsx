
const rows = [
  [
    'Equipment cost',
    '$0',
    '$30,000–$60,000',
    '$0',
  ],
  [
    'Recurring fee',
    '$0',
    'Varies',
    'Locked to one lab',
  ],
  [
    'Works with outside labs',
    'Yes',
    'Yes',
    'No, proprietary lock-in',
  ],
  [
    'PVS impressions count',
    'Yes',
    'Yes',
    'No',
  ],
  [
    'Curated specialty lab access',
    '7+ vetted labs',
    'Source yourself',
    'One lab, one quality tier',
  ],
  [
    'Pre-submission scan review',
    'Available from clinical team',
    'No',
    'No',
  ],
  [
    'Consolidated invoicing',
    'One invoice across all labs',
    'Manage separately',
    'N/A',
  ],
  [
    'Minimum commitment',
    'Lab spend you’re already making',
    'None',
    'Per-case or monthly minimum',
  ],
  [
    'Shortfall fee',
    '35% of the gap only',
    'N/A',
    'Full minimum applies',
  ],
];

export default function Comparison() {
  return (
    <section className="px-[5%] pb-12 pt-11 md:px-[max(4%,calc((100%-1120px)/2))] md:pb-20 md:pt-12">
      <h2 className="mb-4 text-center text-xl leading-snug font-normal text-[#17344b] md:text-left md:text-[26px] [font-family:'Libre_Baskerville',Georgia,serif]">
        What “No-Cost Equipment” Actually Means, and
        <br />
        What It Doesn't.
      </h2>

      <p className="mb-7 text-[11px] leading-relaxed text-[#606b72] md:text-[13px]">
        We get asked this question in every demo: “Is there a catch?” The
        answer is no. But the structure is worth understanding clearly.
      </p>

      <div className="overflow-x-auto rounded-lg border border-[#6389a0]">
        <table className="w-full border-collapse text-[10px] md:text-[13px]">
          <thead>
            <tr>
              <th className="min-w-[140px] border-b border-r border-[#9fb4c1] p-2 text-left md:min-w-[220px]"></th>
              <th className="min-w-[95px] border-b border-r border-[#9fb4c1] p-2 text-left font-normal text-[#24455b] md:p-3.5 md:text-[15px] [font-family:'Libre_Baskerville',Georgia,serif]">Incisive</th>
              <th className="min-w-[95px] border-b border-r border-[#9fb4c1] p-2 text-left font-normal text-[#24455b] md:p-3.5 md:text-[15px] [font-family:'Libre_Baskerville',Georgia,serif]">Buying Outright</th>
              <th className="min-w-[95px] border-b border-[#9fb4c1] p-2 text-left font-normal text-[#24455b] md:p-3.5 md:text-[15px] [font-family:'Libre_Baskerville',Georgia,serif]">Dandy / Single-Lab Deal</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td className="border-b border-r border-[#9fb4c1] p-2 text-[#53616a] last:border-r-0 md:p-3.5" key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-7 text-[10px] leading-relaxed text-[#606b72] md:text-xs">
        The minimum quarterly lab spend tied to your equipment deployment is
        the same lab spending your practice is already doing. We're not asking
        you to spend more. We're asking you to route what you're already
        spending through a better infrastructure. If your volume falls short in
        a given quarter, the shortfall fee is only 35% of the gap, not a flat
        penalty.
      </p>
    </section>
  );
}
