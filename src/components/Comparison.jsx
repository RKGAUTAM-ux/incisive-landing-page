
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
    <section className="py-[35px] md:py-[50px]">

       <div className="max-w-[1450px] mx-auto  px-[24px]">
           <h2 className="text-[#112B40] mb-[18px] md:mb-[24px] text-[26px] md:text-[40px] leading-[1.3] font-normal [font-family:'Libre_Baskerville',Georgia,serif]">
        What “No-Cost Equipment” Actually Means, and
        <br />
        What It Doesn't.
      </h2>

      <p className="mb-[40px] md:mb-[48px] text-[#3A4249]  text-[14px] md:text-[22px] leading-[1.3]">
        We get asked this question in every demo: “Is there a catch?” The
        answer is no. But the structure is worth understanding clearly.
      </p>

      <div className="overflow-x-auto rounded-[15px] border-[1.5px] border-b-[0px] border-[#112B40] mb-[40px] md:mb-[48px]">
        <table className="w-full border-collapse text-[10px] md:text-[13px]">
          <thead>
            <tr>
              <th className="min-w-[140px] border-b-[1.5px] border-r-[1.5px] border-[#112B40] p-2 text-left md:min-w-[220px]"></th>
              <th className="min-w-[95px] border-b-[1.5px] border-r-[1.5px] border-[#112B40] p-2 text-left font-normal text-[#24455b] md:p-3.5 text-[14px] md:text-[24px] [font-family:'Libre_Baskerville',Georgia,serif]">Incisive</th>
              <th className="min-w-[95px] border-b-[1.5px] border-r-[1.5px] border-[#112B40] p-2 text-left font-normal text-[#24455b] md:p-3.5 text-[14px] md:text-[24px] [font-family:'Libre_Baskerville',Georgia,serif]">Buying Outright</th>
              <th className="min-w-[95px] border-b-[1.5px] border-r-[0] border-[#112B40] p-2 text-left font-normal text-[#24455b] md:p-3.5 text-[14px] md:text-[24px] [font-family:'Libre_Baskerville',Georgia,serif]">Dandy / Single-Lab Deal</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td className="text-[12px] md:text-[18px] border-b-[1.5px] border-r-[1.5px] border-[#112B40] p-2 text-[#3A4249] last:border-r-[0] md:p-3.5  first:[font-family:'Libre_Baskerville',Georgia,serif] first:text-[#112B40]" key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-[#3A4249]  text-[14px] md:text-[22px] leading-[1.3]">
        The minimum quarterly lab spend tied to your equipment deployment is
        the same lab spending your practice is already doing. We're not asking
        you to spend more. We're asking you to route what you're already
        spending through a better infrastructure. If your volume falls short in
        a given quarter, the shortfall fee is only 35% of the gap, not a flat
        penalty.
      </p>
       </div>

    </section>
  );
}
