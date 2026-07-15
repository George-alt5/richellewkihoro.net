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
                <div className="contact-label">Email</div>
                <div className="contact-value">
                  <a href="mailto:richellewrk@gmail.com">richellewrk@gmail.com</a>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-label">Phone</div>
                <div className="contact-value">
                  <a href="tel:+254726164421">+254 726 164 421</a>
                </div>
              </div>
              <div className="contact-row">
                <div className="contact-label">Address</div>
                <div className="contact-value">P.O. Box 18357-00500, Nairobi, Kenya</div>
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
                Full CV, ready to download
              </h3>
              <p style={{ marginTop: 14, color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
                Includes full career history, education, publications, research
                proposals, and referee details.
              </p>
              <div style={{ marginTop: 28 }}>
                <Button href="/RWK-CV.pdf" download variant="outline" onDark>
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
