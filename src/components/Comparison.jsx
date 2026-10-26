
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
    <section className="comparison">
      <h2>
        What “No-Cost Equipment” Actually Means, and
        <br />
        What It Doesn't.
      </h2>

      <p>
        We get asked this question in every demo: “Is there a catch?” The
        answer is no. But the structure is worth understanding clearly.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Incisive</th>
              <th>Buying Outright</th>
              <th>Dandy / Single-Lab Deal</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="fineprint">
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
