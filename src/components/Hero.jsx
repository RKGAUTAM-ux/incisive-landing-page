
const rows = Array.from({ length: 6 }, (_, i) => i);

export default function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1>
            One Platform. 7+ Vetted Labs. No
            <br className="desktop" /> Equipment Cost. No Lab Chaos.
          </h1>

          <p>
            Incisive gives restorative and surgical practices a single portal,
            a single invoice, no-cost digital scanning equipment, and a
            dedicated clinical team sitting between your practice and every
            partner lab. All with no subscription required.
          </p>

          <p>
            Join 650+ dentists who stopped chasing portals and started
            focusing on patients.
          </p>

          <a className="button" href="#book">
            Book a Demo <span>→</span>
          </a>

          <small>
            No subscription required. No equipment cost. Minimum lab spend applies.
          </small>
        </div>

        <div className="dashboard-frame"><img src="/images/dashboard.png" alt="Incisive case management dashboard preview" /></div>
      </div>
    </section>
  );
}
