const PI_STUDIES = [
  {
    title: "Assessment of Female Genital Schistosomiasis symptoms among adolescent girls in Tana Delta sub-county, Tana River County, Kenya",
  },
  {
    title: "Factors associated with use of long-acting reversible contraceptives among women seeking family planning services at two referral hospitals in Nairobi County, Kenya",
  },
];

const COI_STUDIES = [
  {
    title: "Development of a serological method for spatio-temporal epidemiological monitoring of schistosomiasis transmission: a repeated cross-sectional study in Homa Bay and Kwale counties, Kenya",
    pi: "PI: Prof. Sammy Njenga & Prof. Shinjiro Hamano",
  },
  {
    title: "Field evaluation of a prototype serological rapid diagnostic test for detection of human Schistosoma mansoni infection",
    pi: "PI: Prof. Sammy Njenga",
  },
  {
    title: "Molecular xenomonitoring of lymphatic filariasis in Kenya: a cross-sectional post-treatment surveillance in formerly endemic foci bordering neighbouring countries",
    pi: "PI: Prof. Sammy Njenga & Wyckliff Omondi",
  },
  {
    title: "Development and application of monitoring systems for schistosomiasis infection in intermediate snails, water, and non-human mammals in Homa Bay and Kwale counties",
    pi: "PI: Prof. Sammy Njenga, Dr. Collins Ouma & Prof. Shinjiro Hamano",
  },
  {
    title: "Operational research to guide post-treatment surveillance following administration of triple drug intervention against lymphatic filariasis in Lamu and Jomvu, coastal Kenya",
    pi: "PI: Prof. Sammy Njenga",
  },
];

const PUBLICATIONS = [
  {
    year: "2026",
    title: "Determining adverse childhood experiences and their association with substance use among young adults in universities and colleges in Mombasa County, Kenya",
    authors: "Odero, M., Kihoro, R.W., Mbogo, P.W., Agure, S., Muniu, E., Muttunga, J., Kwena, Z., Njoroge, S., Okoyo, C.",
    journal: "Substance Abuse Treatment, Prevention, and Policy",
    doi: "https://doi.org/10.1186/s13011-026-00734-5",
  },
  {
    year: "2024",
    title: "Evaluation of a modified quantitative polymerase chain reaction assay for genus Schistosoma detection using stool and urine samples from schistosomiasis endemic areas in Kenya",
    authors: "Kanyi, H., Kihoro, R.W., Chieng, B., Araka, S., Emisiko, H., Ramos, T., Nogaro, S., Njenga, S.M.",
    journal: "PLOS ONE 19(9): e0310118",
    doi: "https://doi.org/10.1371/journal.pone.0310118",
  },
  {
    year: "2024",
    title: "Epidemiology of soil-transmitted helminthiasis among school-aged children in pastoralist communities of Kenya: a cross-sectional study",
    authors: "Kihoro, R.W., Mulewa, D., Okoyo, C., Ayaa, D., Korir, A., Njomo, D.W., Mwandawiro, C., Masaku, J.",
    journal: "PLOS ONE 19(5): e0304266",
    doi: "https://doi.org/10.1371/journal.pone.0304266",
  },
  {
    year: "2020",
    title: "Seroprevalence of yellow fever, dengue, West Nile and chikungunya viruses in children in Teso South Sub-County, Western Kenya",
    authors: "Inziani, M., Adungo, F., Awando, J., Kihoro, R.W., Inoue, S., Morita, K., Obimbo, E., Onyango, F., Mwau, M.",
    journal: "International Journal of Infectious Diseases 91: 104–110",
    doi: "https://doi.org/10.1016/j.ijid.2019.11.004",
  },
];

function AuthorsLine({ authors }) {
  const parts = authors.split(/(Kihoro,\s*R\.(?:W\.)?)/g);
  return (
    <>
      {parts.map((part, idx) =>
        /^Kihoro,\s*R\.(?:W\.)?$/.test(part) ? (
          <strong key={idx}>{part}</strong>
        ) : (
          <span key={idx}>{part}</span>
        )
      )}
    </>
  );
}

export default function Project() {
  return (
    <>
      <section className="hero" style={{ paddingBottom: 56 }}>
        <div className="hero-inner" style={{ paddingBottom: 40 }}>
          <span className="eyebrow">Research &amp; Publications</span>
          <h1 className="hero-title" style={{ fontSize: "clamp(2.2rem, 4.4vw, 3.4rem)" }}>
            Studies I've led, and studies I've supported
          </h1>
          <p className="hero-lede">
            A record of the research proposals I've served on as Principal
            Investigator or Co-Investigator, and the peer-reviewed research
            papers they've produced.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <span className="section-label">Research proposals</span>
            <h2 className="section-title">Field &amp; laboratory studies</h2>
          </div>

          <div className="role-label">As Principal Investigator</div>
          {PI_STUDIES.map((s) => (
            <div className="proposal-item" key={s.tag}>
              <div className="item-tag">{s.tag}</div>
              <div>
                <div className="item-title">{s.title}</div>
              </div>
            </div>
          ))}

          <div className="role-label">As Co-Investigator</div>
          {COI_STUDIES.map((s) => (
            <div className="proposal-item" key={s.tag}>
              <div className="item-tag">{s.tag}</div>
              <div>
                <div className="item-title">{s.title}</div>
                <div className="item-meta">{s.pi}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="wrap">
          <div className="section-head">
            <span className="section-label">Publications</span>
            <h2 className="section-title">Peer-reviewed research papers</h2>
          </div>

          {PUBLICATIONS.map((p, i) => (
            <div className="pub-item" key={i}>
              <div className="item-tag">{p.year}</div>
              <div>
                <div className="item-title">{p.title}</div>
                <div className="item-meta"><AuthorsLine authors={p.authors} /></div>
                <div className="item-meta">
                  {p.journal} · <a href={p.doi} target="_blank" rel="noreferrer">View DOI</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}