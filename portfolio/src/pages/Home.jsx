import Button from "../components/Button"

const FOCUS_AREAS = [
    {
        title: "Neglected Tropical Diseases",
        body: "Field and epidemiological studies on schistosomiasis, soil-transmitted helminths, and lymphatic filariasis across endemic communities in Kenya.",
    },
    {
        title: "Molecular & Field Diagnostics",
        body: "Developing and evaluating qPCR assays, serological methods, and xenomonitoring tools for parasitic disease surveillance.",
    },
    {
        title:"Research Ethics & Review",
        body: "Reviewing proposals, manuscripts, and abstracts for scientific and ethical rigor ahead of submission to KEMRI's Scientific and Ethics Review Unit.",
    },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-photo-wrap">
          <img
            className="home-hero-photo"
            src="/richelle-portrait.jpg"
            alt="Richelle W. Kihoro"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </div>

        <div className="home-hero-content">
          <h1 className="home-hero-name">Richelle W. Kihoro</h1>
          <p className="home-hero-tag">Malaria&nbsp;·&nbsp;NTDs&nbsp;·&nbsp;Community Health</p>
          <div className="home-hero-actions">
            <Button to="/research" variant="primary">View my research</Button>
            <Button to="/about" variant="outline" onDark>About me</Button>
          </div>
        </div>

        <div className="home-hero-social">
          <a href="https://www.linkedin.com/in/richelle-kihoro/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
          </a>
          <a href="mailto:rkihoro@kemri.go.ke" aria-label="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
          </a>
        </div>
      </section>

      <div className="ledger" aria-hidden="true">
        <div className="ledger-track">
          {[...LEDGER, ...LEDGER].map((item, i) => (
            <span className="ledger-item" key={i}>
              <b>{item.tag}</b> {item.label}
            </span>
          ))}
        </div>
      </div>

      <div className="wrap">
        <div className="stat-row">
          <div className="stat-cell">
            <div className="stat-num">10+</div>
            <div className="stat-label">Years in health research</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">7</div>
            <div className="stat-label">Research proposals, PI &amp; co-I</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">4</div>
            <div className="stat-label">Peer-reviewed publications</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num">4</div>
            <div className="stat-label">Awards &amp; grants since 2023</div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-label">Focus areas</span>
            <h2 className="section-title">Where the science meets the field</h2>
            <p className="section-sub">
                My work sits at the intersection of laboratory science and community health,
                designing research that is scientifically rigorous, ethically grounded, and
                responsive to the needs of communities most affected by parasitic diseases.
            </p>
          </div>

          <div className="focus-grid">
            {FOCUS_AREAS.map((f, i) => (
              <div className="focus-card" key={f.title}>
                <span className="focus-index">0{i + 1}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap bio-grid" style={{ alignItems: "center" }}>
          <div>
            <span className="section-label">About me</span>
            <h2 className="section-title">
              Passionate about health research and lasting impact
            </h2>
            <p className="section-sub" style={{ marginTop: 22, maxWidth: 520 }}>
              I'm domiciled at KEMRI's Eastern and Southern Africa Centre of International
              Parasite Control (ESACIPAC), where I coordinate field and laboratory work,
              develop research protocols, and help bring findings to peer-reviewed
              publication.
            </p>
            <div style={{ marginTop: 28 }}>
              <Button to="/about" variant="ghost">
                Read my full story →
              </Button>
            </div>
          </div>
          <div>
            <div className="bio-portrait-frame">
              <img
                src="/richelle-portrait.jpg"
                alt="Richelle W. Kihoro"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="section-label">Let's work together</span>
          <h2 className="section-title">
            Open to collaboration on NTD &amp; malaria research
          </h2>
          <p className="section-sub" style={{ margin: "20px auto 0", textAlign: "center" }}>
            Whether it's a review, a joint proposal, or a speaking invitation — I'd love
            to hear from you.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center", marginTop: 32 }}>
            <Button to="/contact" variant="primary">Get in touch</Button>
            <Button href="/RWK-CV.pdf" download variant="outline" onDark>Download CV</Button>
          </div>
        </div>
      </section>
    </>
  );
}
