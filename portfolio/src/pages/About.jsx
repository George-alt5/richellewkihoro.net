const EXPERIENCE = [
  {
    period: "Feb 2021 — Present",
    role: "Research Scientist",
    org: "Kenya Medical Research Institute (KEMRI), ESACIPAC",
    points: [
      "Perform molecular and serology laboratory assays to support epidemiological and public health research",
      "Coordinate field and laboratory activities across malaria and NTD studies",
      "Review proposals, manuscripts, and abstracts for scientific and ethical rigor ahead of KEMRI's Scientific and Ethics Review Unit (SERU)",
      "Develop research protocols, analyze data, and author manuscripts for peer-reviewed publication",
    ],
  },
  {
    period: "Jun 2020 — Dec 2020",
    role: "Research Assistant",
    org: "School of Public Health, University of Nairobi",
    points: [
      "Supported \u201cEnhancing Ground Level Health Worker Capacity to Plan and Respond to COVID-19\u201d, an OSIEA-funded project",
      "Synthesized technical COVID-19 and health-systems literature into articles for scientific and lay audiences",
    ],
    link: {
      href: "https://healthpolicyhealthsystemandcovid19.wordpress.com/author/richellekihoro/",
      label: "Read the articles",
    },
  },
  {
    period: "Mar 2018 — Oct 2019",
    role: "Research Intern",
    org: "Kenya Medical Research Institute (KEMRI)",
    points: [
      "Supported the Early Infant Diagnosis of HIV (EID) programme, performing viral load and EID testing on Roche CAP/CTM and Abbott m2000 platforms",
      "Contributed to manuscript writing, literature review, and quality-indicator reporting for the programme",
    ],
  },
  {
    period: "Jun 2017 — Dec 2017",
    role: "Laboratory Technologist Intern",
    org: "Centre for Health Solutions (CHS)",
    points: [
      "Implemented Tegemeza Plus, a PEPFAR/CDC-funded HIV programme, across four Kenyan counties",
    ],
  },
  {
    period: "Jan 2016 — Mar 2016",
    role: "Student on Industrial Attachment",
    org: "Kenya Medical Research Institute (KEMRI)",
    points: [
      "Rotated through Molecular Biology, Radio Isotope, Immunology, Parasitology, and Entomology laboratories in the  Centre for Biotechnology Research and Development (CBRD)",
    ],
  },
  {
    period: "Jan 2014 — Mar 2014",
    role: "Student on Industrial Attachment",
    org: "National Public Health Laboratory Services (NPHLS)",
    points: [
      "Conducted laboratory work at the National HIV, Microbiology, and TB Reference Laboratories",
    ],
  },
];

export default function About() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 40 }}>
        <div className="wrap bio-grid">
          <div className="bio-portrait">
            <div className="bio-portrait-frame">
              <img
                src="/richelle-portrait.jpg"
                alt="Richelle W. Kihoro"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </div>
          </div>

          <div className="bio-text">
            <span className="section-label">About</span>
            <p className="lede">
                I'm a research scientist working to prevent and control parasitic
                disease across Kenya — from village-level surveys to the
                molecular assays that confirm what's found there.
            </p>
            <p>
                I am based at KEMRI's Eastern and Southern Africa Centre of International
                Parasite Control (ESACIPAC), where I contribute to research that advances
                the prevention and control of malaria and neglected tropical diseases.
                My work supports evidence based public health interventions that improve
                health outcomes across communities in Africa.
            </p>
            <p>
                From research design to project implementation, I help deliver studies that are
                scientifically rigorous and ethically sound. I work collaboratively in multidisciplinary
                research teams,working alongside senior research scientists to advance research in neglected
                tropical diseases.
            </p>
            <p>
                I hold a Bachelor of Science in Microbiology & Biotechnology and a
                Master of Public Health specializing in Biostatistics and Epidemiology
                from the University of Nairobi, I'm a member of the Royal Society of 
                Tropical Medicine and Hygiene (RSTMH).
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="section-label">Experience</span>
            <h2 className="section-title">Career history</h2>
          </div>
          <div className="timeline">
            {EXPERIENCE.map((item) => (
              <div className="timeline-item" key={item.period}>
                <div className="timeline-period">{item.period}</div>
                <div>
                  <div className="timeline-role">{item.role}</div>
                  <div className="timeline-org">{item.org}</div>
                  <ul className="timeline-desc">
                    {item.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                  {item.link && (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{ display: "inline-block", marginTop: 8, fontSize: "0.9rem" }}
                    >
                      {item.link.label} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-label">Education</span>
            <h2 className="section-title">Academic background</h2>
          </div>
          <table className="data-table">
            <tbody>
              <tr>
                <td>2019 – 2023</td>
                <td>
                  <strong>Master of Public Health</strong> (Biostatistics and Epidemiology)
                  <br />University of Nairobi
                </td>
              </tr>
              <tr>
                <td>2013 – 2017</td>
                <td>
                  <strong>Bachelor of Science, Microbiology and Biotechnology</strong>
                  <br />Second Class Honors (Upper Division), University of Nairobi
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: 48 }}>
            <span className="section-label">Membership</span>
            <div className="chip-row">
              <span className="chip">Royal Society of Tropical Medicine &amp; Hygiene — 2023 to date</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}