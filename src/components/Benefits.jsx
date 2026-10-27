
const benefits = [
  [
    '▧',
    'Crown & Bridge',
    'Consistent marginal fit, predictable turnaround, and direct access to the ceramicist, not a production coordinator.',
  ],
  [
    '◉',
    'Implants & Implant-Supported Restorations',
    'Labs that understand the implant-restorative interface. No per-case running implant costs on the side.',
  ],
  [
    '⬡',
    'Full-Arch & All-on-X',
    'A specialist lab for full-arch implant cases, including photogrammetry workflows. The infrastructure to take on more complex cases without building it yourself.',
  ],
  [
    '♙',
    'Elite Esthetics',
    'For cases where the esthetic is the priority: full cases on the prescription. Pre-vetted for communication, artistry, and clinical outcome documentation.',
  ],
  [
    '▣',
    'Removable & Partial',
    'Consistent fit, predictable delivery, and accountability when adjustments are needed, without chasing a rep.',
  ],
  [
    '▤',
    'Ortho & Appliances',
    'Retainers, nightguards, sleep appliances, and clear aligner fabrication from labs that specialize, not substitute.',
  ],
];

export default function Benefits() {
  return (
    <section className="px-[5%] py-11 text-center md:px-[max(4%,calc((100%-1120px)/2))] md:py-[76px]">
      <h2 className="mb-2 text-xl leading-snug font-normal text-[#17344b] md:text-[26px] [font-family:'Libre_Baskerville',Georgia,serif]">
        7+ Labs. Every Case Type. Every One Accepted
        <br />
        for a Reason.
      </h2>

      <p className="mx-auto mb-8 max-w-[1000px] text-[11px] leading-relaxed text-[#606b72] md:text-[13px]">
        Most practices work with whoever they can find and trust whatever they get.
        Incisive spent years interviewing hundreds of US-based labs to find the ones
        that meet clinical and operational standards rigorous enough to stake a
        95%+ retention rate on.
      </p>

      <div className="grid grid-cols-2 gap-2.5 text-left md:grid-cols-3 md:gap-5">
        {benefits.map(([icon, title, copy]) => (
          <article className="min-h-[185px] rounded-[11px] border border-[#e3e9ed] p-3 shadow-sm md:min-h-[190px] md:p-6">
            <span className="grid h-[34px] w-[34px] place-items-center rounded-lg bg-[#e8f3fa] text-base text-[#4383a7] md:h-[42px] md:w-[42px] md:text-xl">{icon}</span>
            <h3 className="mb-1 mt-3 text-xs font-bold text-[#284357] md:text-[15px]">{title}</h3>
            <p className="m-0 text-[10px] leading-relaxed text-[#53616a] md:text-xs">{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
