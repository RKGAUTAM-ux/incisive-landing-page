
export default function Header() {
    function Logo({ light = false }) {
       return <img className={`brand-logo${light ? ' brand-logo--light' : ''}`} src="/images/incisive-logo.png" alt="Incisive" />
    }
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Incisive home">
        <Logo />
      </a>
    </header>
  );
}
