
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
    <section className="infrastructure">
      <h2>
        Incisive Is the Infrastructure Your Lab Relationships
        <br />
        Were Never Built to Be.
      </h2>

      <p>
        One platform replaces the fragmented stack of portals, reps, invoices,
        and equipment costs your practice has been managing separately. Here’s
        what comes with every Incisive partnership, with no subscription
        required.
      </p>

      <div className="infra-grid">
        {cards.map(([h, t], i) => (
          <article key={h}>
            <b className="number">{i + 1}</b>
            <h3>{h}</h3>
            <p>{t}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
