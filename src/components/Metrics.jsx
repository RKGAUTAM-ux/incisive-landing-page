
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
    <section className="grid grid-cols-2 gap-3 bg-[#3e80a6] px-[4%] py-4 text-white md:grid-cols-4 md:gap-8 md:px-[max(4%,calc((100%-1180px)/2))]">
      {items.map(([n, t]) => (
        <div className="flex items-center gap-2 text-[10px] leading-tight whitespace-pre-line md:gap-3 md:text-[13px]" key={n}>
          <b className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-[3px] border-[#173c53] text-xs md:h-[60px] md:w-[60px] md:text-[17px]">{n}</b>
          <span>{t}</span>
        </div>
      ))}
    </section>
  );
}
