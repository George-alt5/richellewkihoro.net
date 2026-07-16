const CONFERENCES = [
  {
    title: "KASH 16 Conference",
    date: "February 2026",
    role: "Best Abstract Presenter — two sessions",
    body: "Recognised for presentations in Scientific Session 13 (Public Health 2) and Scientific Session 33 (NTDs and One Health 2).",
  },
  {
    title: "KASH 14 Conference and 9th East African Health & Scientific Conference",
    date: "September 2023 & February 2024",
    role: " Presented oral abstracts",
    body: "Summarised findings on epidemiology of soil transmitted helminthiasis infection among school aged children of Narok County, Kenya.",
  },
];

const AWARDS = [
  {
    year: "Feb 2026",
    title: "Best Abstract Presenter — Scientific Session 13 (Public Health 2)",
    org: "KASH 16 Conference",
  },
  {
    year: "Feb 2026",
    title: "Best Abstract Presenter — Scientific Session 33 (NTDs and One Health 2)",
    org: "KASH 16 Conference",
  },
  {
    year: "2024 — date",
    title: "Early Career Grant, £5,000",
    org: "Royal Society of Tropical Medicine and Hygiene, in partnership with The Children's Investment Fund Foundation (CIFF)",
  },
  {
    year: "2023 — 2026",
    title: "President's Fund Award",
    org: "Royal Society of Tropical Medicine and Hygiene",
  },
  {
    year: "2019 — 2023",
    title: "Postgraduate Scholarship — full tuition and stipend",
    org: "University of Nairobi, for the degree of Master of Public Health",
  },
];

export default function Speaking() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="hero-inner" style={{ paddingBottom: 40 }}>
          <span className="eyebrow">Speaking, Conferences &amp; Awards</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.4rem)" }}>
            Where the work gets presented
          </h1>
          <p className="hero-lede">
            My conference experience reflects both service and scholarship—from
            supporting scientific dialogue as a rapporteur to presenting research
            recognized for its quality and impact. Each milestone represents an
            opportunity to share knowledge, collaborate, and contribute to
            advancing public health research.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-label">Conferences</span>
            <h2 className="section-title">Recent appearances</h2>
          </div>
          <div className="conf-grid">
            {CONFERENCES.map((c) => (
              <div className="conf-card" key={c.title}>
                <span className="item-tag">{c.date}</span>
                <h4 style={{ marginTop: 10 }}>{c.title}</h4>
                <p style={{ color: "var(--teal-dark)", fontWeight: 500 }}>{c.role}</p>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap">
          <div className="section-head">
            <span className="section-label">Awards &amp; grants</span>
            <h2 className="section-title">Recognition</h2>
          </div>
          <div className="award-list">
            {AWARDS.map((a, i) => (
              <div className="award-item" key={i}>
                <div className="award-year">{a.year}</div>
                <div>
                  <div className="award-title">{a.title}</div>
                  <div className="award-org">{a.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
