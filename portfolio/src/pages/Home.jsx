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

const LEDGER = [
  { label: "Female Genital Schistosomiasis — Tana River" },
  { label: "Serological Surveillance — Homa Bay & Kwale" },
  { label: "Molecular Xenomonitoring — Lymphatic Filariasis" },
  { label: "Schistosomiasis Monitoring — Intermediate Snails" },
  { label: "Post-Treatment Surveillance — Coastal Kenya" },
  { label: "Contraceptive Use — Nairobi County" },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-photo-wrap">
          <img
            className="home-hero-photo"
            src="/richelle-kihoro.jpeg"
            alt="Richelle W. Kihoro"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </div>

        <div className="home-hero-content">
          <h1 className="home-hero-name">Richelle W. Kihoro</h1>
          <p className="home-hero-tag">NTD’s&nbsp;·&nbsp;PUBLIC HEALTH&nbsp;·&nbsp;EPIDEMIOLOGY</p>
          <div className="home-hero-actions">
            <Button to="/research" variant="primary">View my research</Button>
            <Button to="/about" variant="outline" onDark>About me</Button>
          </div>
        </div>

        <div className="home-hero-social">
          <a href="https://www.linkedin.com/in/richelle-kihoro/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden="true">
              <rect width="24" height="24" rx="4" fill="#0A66C2" />
              <path fill="#fff" d="M7.2 9.6h2.5v8.4H7.2V9.6zM8.45 8.5a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9zM11.5 9.6h2.4v1.15h.03c.33-.63 1.15-1.3 2.37-1.3 2.53 0 3 1.67 3 3.83v4.72h-2.5v-4.18c0-1 0-2.28-1.4-2.28-1.4 0-1.6 1.08-1.6 2.2v4.26h-2.5V9.6z"/>
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