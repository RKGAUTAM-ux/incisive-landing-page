
export default function Header() {
    function Logo() { return <img className="h-auto w-28" src="/images/incisive-logo.png" alt="Incisive" /> }
  return (
    <header className="flex h-16 items-center justify-center md:h-20">
      <a className="transition-opacity hover:opacity-75" href="#top" aria-label="Incisive home">
        <Logo />
      </a>
    </header>
  );
}
