
const items = [
  [
    '650+',
    'Dentists on the\nIncisive Platform',
  ],
  [
    '95%',
    'Annulation Rate',
  ],
  [
    '8.5',
    'Years Combined\nClinical Experience on\nthe Support Team',
  ],
  [
    '7+',
    'Labs Accepted\nOut of Hundreds\nInterviewed',
  ],
];

export default function Metrics() {
  return (
    <section className="bg-[#3e80a6]  py-[16px] mb-[40px]  md:mb-[64px]">
      <div className="max-w-[1450px] mx-auto px-[24px] grid grid-cols-2 gap-[24px] text-white lg:grid-cols-4 lg:gap-[40px] ">
      {items.map(([n, t]) => (
        <div className="flex items-center gap-[8px]  md:gap-[16px]" key={n}>

          <div className="flex h-[50px] w-[50px]  md:h-[90px] md:w-[90px] justify-center items-center shrink-0 relative">
<b className="text-[14px] md:text-[24px] font-[Georgia,'Times_New_Roman',serif]">{n}</b>
<img className="absolute top-0 left-0 h-full- w-full" src="/images/stat-round-bg.svg" alt="" />
          </div>

          <p className="text-[12px] md:text-[18px] xl:text-[24px] leading-[1.2]">{t}</p>
        </div>
      ))}
      </div>
    </section>
  );
}
