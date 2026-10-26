const items=[['650+','Dentists on the\nIncisive Platform'],['95%','Annulation Rate'],['8.5','Years Combined\nClinical Experience on\nthe Support Team'],['7+','Labs Accepted\nOut of Hundreds\nInterviewed']]
export default function Metrics(){return <section className="metrics">{items.map(([n,t])=><div className="metric" key={n}><b>{n}</b><span>{t}</span></div>)}</section>}
