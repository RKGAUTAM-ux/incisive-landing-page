
const benefits = [
  [
    '▧',
    'Crown & Bridge',
    'Consistent marginal fit, predictable turnaround, and direct access to the ceramicist, not a production coordinator.',
  ],
  [
    '◉',
    'Implants & Implant-Supported Restorations',
    'Labs that understand the implant-restorative interface. No per-case running implant costs on the side.',
  ],
  [
    '⬡',
    'Full-Arch & All-on-X',
    'A specialist lab for full-arch implant cases, including photogrammetry workflows. The infrastructure to take on more complex cases without building it yourself.',
  ],
  [
    '♙',
    'Elite Esthetics',
    'For cases where the esthetic is the priority: full cases on the prescription. Pre-vetted for communication, artistry, and clinical outcome documentation.',
  ],
  [
    '▣',
    'Removable & Partial',
    'Consistent fit, predictable delivery, and accountability when adjustments are needed, without chasing a rep.',
  ],
  [
    '▤',
    'Ortho & Appliances',
    'Retainers, nightguards, sleep appliances, and clear aligner fabrication from labs that specialize, not substitute.',
  ],
];

export default function Benefits() {
  return (
    <section className="benefits">
      <h2>
        7+ Labs. Every Case Type. Every One Accepted
        <br />
        for a Reason.
      </h2>

      <p className="intro">
        Most practices work with whoever they can find and trust whatever they get.
        Incisive spent years interviewing hundreds of US-based labs to find the ones
        that meet clinical and operational standards rigorous enough to stake a
        95%+ retention rate on.
      </p>

      <div className="benefit-grid">
        {benefits.map(([icon, title, copy]) => (
          <article key={title}>
            <span>{icon}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
