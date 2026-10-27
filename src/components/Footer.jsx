
export default function Footer() {
  function Logo() {
    return <img className="h-auto w-28" src="/images/incisive-logo.png" alt="Incisive" />
  }
  return (
    <footer className="bg-[#112e43] px-[7%] py-12 text-center text-[#dbe6ed] md:px-[max(8%,calc((100%-950px)/2))] md:py-[70px]" id="book">
      <h2 className="mb-5 text-xl font-normal text-white md:text-[26px] [font-family:'Libre_Baskerville',Georgia,serif]">Join the restorative ecosystem.</h2>

      <p className="text-[11px] leading-relaxed md:text-[13px]">
        Join 650+ dentists who traded lab chaos for one partner, one portal,
        and a team that answers the phone.
      </p>

      <a
        className="my-5 inline-flex items-center justify-center gap-4 rounded-full bg-[#3d83a8] px-8 py-2.5 text-sm text-white transition hover:-translate-y-0.5 hover:bg-[#286887] md:mb-9 md:px-9 md:py-3 md:text-base [font-family:'Libre_Baskerville',Georgia,serif]"
        href="mailto:hello@incisive.com?subject=Book%20a%20Demo"
      >
        Book a Demo <span>→</span>
      </a>

      <div className="mx-auto mb-5 table bg-white px-2 py-1">
         <Logo />
      </div>

      <p>
        Multiple labs. One portal. One support team. Built so general practices
        can deliver restorative outcomes at scale, without sacrificing the lab
        relationships that drive quality.
      </p>

      <small className="mt-6 block text-[#b4c4cd]">The complete workflow, without going it alone.</small>
    </footer>
  );
}
