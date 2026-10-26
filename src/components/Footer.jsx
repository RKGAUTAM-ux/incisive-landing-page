
export default function Footer() {
  function Logo({ light = false }) {
       return <img className={`brand-logo${light ? ' brand-logo--light' : ''}`} src="/images/incisive-logo.png" alt="Incisive" />
  }
  return (
    <footer id="book">
      <h2>Join the restorative ecosystem.</h2>

      <p>
        Join 650+ dentists who traded lab chaos for one partner, one portal,
        and a team that answers the phone.
      </p>

      <a
        className="button"
        href="mailto:hello@incisive.com?subject=Book%20a%20Demo"
      >
        Book a Demo <span>→</span>
      </a>

      <div className="footer-logo">
         <Logo />
      </div>

      <p>
        Multiple labs. One portal. One support team. Built so general practices
        can deliver restorative outcomes at scale, without sacrificing the lab
        relationships that drive quality.
      </p>

      <small>The complete workflow, without going it alone.</small>
    </footer>
  );
}
