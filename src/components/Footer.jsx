
export default function Footer() {
  function Logo() {
    return <img className="h-auto w-[104px] md:w-[198px]" src="/images/Incisive-logo-footer.png" alt="Incisive" />
  }
  return (
    <footer className="bg-[#112B40] text-[#ffffff] py-[48px] md:py-[72px] text-center" id="book">

       <div className="max-w-[1450px] mx-auto  px-[24px]">
           <h2 className="text-white mb-[18px] md:mb-[24px] text-[26px] md:text-[40px] leading-[1.3] font-normal [font-family:'Libre_Baskerville',Georgia,serif]">Join the restorative ecosystem.</h2>

      <p className="mb-[40px] md:mb-[58px]  text-[14px] md:text-[22px] leading-[1.3]">
        Join 650+ dentists who traded lab chaos for one partner, one portal,
        and a team that answers the phone.
      </p>

      <a
        className="inline-flex items-center justify-center gap-[8px] rounded-full bg-[#3d83a8] px-[32px] py-[8px] mb-[60px] text-[24px] md:text-[32px] w-full md:w-[355px] text-white transition hover:-translate-y-0.5 hover:bg-[#286887]  [font-family:'Libre_Baskerville',Georgia,serif]"
        href="https://joinincisive.com/contact"
      >
        Book a Demo <span>→</span>
      </a>

      <div className="mx-auto mb-[48px] table bg-white px-2 py-1">
         <Logo />
      </div>

      <p className="mb-[40px] md:mb-[58px]  text-[14px] md:text-[22px] leading-[1.3]">
        Multiple labs. One portal. One support team. Built so general practices
        can deliver restorative outcomes at scale, without sacrificing the lab
        relationships that drive quality.
      </p>

      <small className="mb-[40px] md:mb-[58px]  text-[12px] md:text-[20px] leading-[1.3]">The complete workflow, without going it alone.</small>

       </div>


    </footer>
  );
}
