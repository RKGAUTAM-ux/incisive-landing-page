
const steps = [
  [
    'Book a 30-Minute Demo',
    'Talk to a clinical advisor who has seen this transition done hundreds of times. We review your current lab spend, case mix, and equipment situation, and show you exactly which equipment and labs make sense for your practice.',
  ],
  [
    'Equipment Is Placed at No Cost',
    'We handle placement, installation, calibration, and training. If your practice already owns a scanner, you can start running cases immediately without deploying new equipment. Your existing workflow continues uninterrupted.',
  ],
  [
    'Your Cases Route Through One Portal',
    'Submit cases digitally or via PV’s Impression. Both count. Our clinical team is available to review cases before they go to the lab, and you track every case in real time through one portal instead of five.',
  ],
  [
    'One Invoice. One Team. Zero Chaos',
    'You receive a single consolidated invoice each month regardless of how many partner labs touched your cases. Our clinical support team handles escalations, manages lab communication, and contacts you when something needs your attention, not the other way around.',
  ],
];

export default function Steps() {
  return (
    <section className="py-[35px] md:py-[50px] text-center">

      <div className="max-w-[1450px] mx-auto  px-[24px]">
        <h2 className="max-w-[1080px] mx-auto text-[#112B40] mb-[18px] md:mb-[24px] text-[26px] md:text-[40px] leading-[1.3] font-normal font-[Georgia,'Times_New_Roman',serif]">
          From First Conversation to First Case. Here's Exactly
          How Incisive Works.
        </h2>

        <p className="max-w-[1080px] mx-auto text-[#3A4249] mb-[40px] md:mb-[48px]  text-[14px] md:text-[22px] leading-[1.3]">
          No complicated onboarding. No rip-and-replace of your existing
          workflow. Your practice keeps running while we build the infrastructure
          around it.
        </p>

        <div className="grid grid-cols-1 gap-[20px] text-left md:grid-cols-2 md:gap-[32px] lg:gap-x-[80px] lg:gap-y-[64px]">
          {steps.map(([h, t], i) => (
            <article className="rounded-[10px] md:rounded-[15px] bg-[#3A78A1] p-[24px] text-white  md:p-[32px]">
              <span className="rounded-[10px] bg-[#F6FBFE] px-[14px] md:px-[20px] py-[4px] text-[24px] text-[#4080a4] md:text-[36px] font-[Georgia,'Times_New_Roman',serif]">Step {i + 1}:</span>
              <h3 className="mb-[16px] md:mb-[22px] mt-[16px] md:mt-[24px] text-[20px] font-normal md:text-[30px] leading-[1.3] font-[Georgia,'Times_New_Roman',serif]">{h}</h3>
              <p className="text-[12px] leading-[1.3] text-[#e6f0f5] md:text-[20px]">{t}</p>
            </article>
          ))}
        </div>

      </div>

    </section>
  );
}
