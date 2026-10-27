
export default function Header() {
    function Logo() { return <img className="h-auto w-[110px] sm:w-[200px]" src="/images/incisive-logo.png" alt="Incisive" /> }
  return (
    <header className="flex  items-center sm:justify-center ">
      <a className="transition-opacity hover:opacity-75 py-[8px] sm:py-[14px] px-[16px]" href="#top" aria-label="Incisive home">
        <Logo />
      </a>
    </header>
  );
}
