import Button from "../components/Button";

export default function Contact() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div className="section-head">
            <span className="section-label">Contact</span>
            <h2 className="section-title">Let's talk</h2>
            <p className="section-sub">
                Great research begins with meaningful connections. Whether you're
                interested in collaborating, supporting a project, inviting me to
                speak, or discussing new ideas, I'd be happy to connect. Feel free
                to reach out directly or connect with me on LinkedIn.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-panel">
              <div className="contact-row">
                <div className="contact-label">Personal Email</div>
                <div className="contact-value">
                  <a href="mailto:richellewrk@gmail.com">richellewrk@gmail.com</a>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-label">Work Email</div>
                <div className="contact-value">
                  <a href="mailto:rkihoro@kemri.go.ke">rkihoro@kemri.go.ke</a>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-label">ORCID</div>
                <div className="contact-value">
                  <a href="https://orcid.org/0000-0003-2512-1645" target="_blank" rel="noreferrer">
                    orcid.org/0000-0003-2512-1645
                  </a>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-label">LinkedIn</div>
                <div className="contact-value">
                  <a href="https://www.linkedin.com/in/richelle-kihoro/" target="_blank" rel="noreferrer">
                    linkedin.com/in/richelle-kihoro
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-panel dark">
              <span className="section-label" style={{ marginBottom: 18 }}>Prefer a document?</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.6rem" }}>
                CV, ready to download
              </h3>
              <p style={{ marginTop: 14, color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
                Includes career history, education, publications, research
                proposals.
              </p>
              <div style={{ marginTop: 28 }}>
                <Button href="/Richelle W. Kihoro_CV.pdf" download variant="outline" onDark>
                  Download CV (PDF)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
