
const benefits = [
  [
    'lb-icn-1',
    'Crown & Bridge',
    'Consistent marginal fit, predictable turnaround, and direct access to the ceramicist, not a production coordinator.',
  ],
  [
    'lb-icn-2',
    'Implants & Implant-Supported Restorations',
    'Labs that understand the implant-restorative interface. No per-case running implant costs on the side.',
  ],
  [
    'lb-icn-3',
    'Full-Arch & All-on-X',
    'A specialist lab for full-arch implant cases, including photogrammetry workflows. The infrastructure to take on more complex cases without building it yourself.',
  ],
  [
    'lb-icn-4',
    'Elite Esthetics',
    'For cases where the esthetic is the priority: full cases on the prescription. Pre-vetted for communication, artistry, and clinical outcome documentation.',
  ],
  [
    'lb-icn-5',
    'Removable & Partial',
    'Consistent fit, predictable delivery, and accountability when adjustments are needed, without chasing a rep.',
  ],
  [
    'lb-icn-6',
    'Ortho & Appliances',
    'Retainers, nightguards, sleep appliances, and clear aligner fabrication from labs that specialize, not substitute.',
  ],
];

export default function Benefits() {
  return (
    <section className="py-[35px] md:py-[50px] text-center">
      <div className="max-w-[1450px] mx-auto  px-[24px]">

        <h2 className="text-[#112B40] max-w-[960px] mx-auto text-[#112B40] mb-[18px] md:mb-[24px] text-[26px] md:text-[40px] leading-[1.3] font-normal font-[Georgia,'Times_New_Roman',serif]">
          7+ Labs. Every Case Type. Every One Accepted for a Reason.
        </h2>

        <p className="text-[#3A4249] italic mb-[40px] md:mb-[48px]  text-[14px] md:text-[22px] leading-[1.3]">
          Most practices work with whoever they can find and trust whatever they get.
          Incisive spent years interviewing hundreds of US-based labs to find the ones
          that meet clinical and operational standards rigorous enough to stake a
          95%+ retention rate on.
        </p>

        <div className="grid grid-cols-1 gap-[20px] text-left sm:grid-cols-2 lg:grid-cols-3 md:gap-[40px]">
          {benefits.map(([slug, title, copy]) => (
            <article className="bg-[#FFFFFF] rounded-[10px] md:rounded-[15px] border border-[#e3e9ed] p-[24px]  md:p-[32px]">
              <div className="">
              <img
                src={`/images/${slug}.png`}
                alt={title}
                className="h-[40px] w-[40px]  md:h-[60px] md:w-[60px]"
                loading="lazy"
              />
            </div>
              <h3 className="text-[16px] font-bold text-[#112B40] md:text-[24px] mb-[12px] md:mb-[16px] mt-[16px] leading-[1.3] ">{title}</h3>
              <p className="text-[12px] leading-[1.2] text-[#3A4249] md:text-[20px]">{copy}</p>
            </article>
          ))}
        </div>

      </div>

    </section>
  );
}
