
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
    <section className="px-[5%] py-11 text-center md:px-[max(4%,calc((100%-1120px)/2))] md:py-[76px]">
      <h2 className="mb-4 text-xl leading-snug font-normal text-[#17344b] md:text-[26px] [font-family:'Libre_Baskerville',Georgia,serif]">
        From First Conversation to First Case. Here's Exactly
        <br />
        How Incisive Works.
      </h2>

      <p className="mx-auto mb-8 max-w-[900px] text-[11px] leading-relaxed text-[#606b72] md:text-[13px]">
        No complicated onboarding. No rip-and-replace of your existing
        workflow. Your practice keeps running while we build the infrastructure
        around it.
      </p>

      <div className="grid grid-cols-1 gap-3 text-left md:grid-cols-2 md:gap-6">
        {steps.map(([h, t], i) => (
          <article className="rounded-xl bg-[#3d80a5] p-5 text-white md:min-h-[225px] md:p-6">
            <span className="bg-white px-2.5 py-1 text-sm text-[#4080a4] md:text-lg [font-family:'Libre_Baskerville',Georgia,serif]">Step {i + 1}:</span>
            <h3 className="mb-2 mt-5 text-[15px] font-normal md:text-[17px] [font-family:'Libre_Baskerville',Georgia,serif]">{h}</h3>
            <p className="text-[11px] leading-relaxed text-[#e6f0f5] md:text-xs">{t}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
