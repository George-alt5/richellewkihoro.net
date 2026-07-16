import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Research", to: "/research" },
  { label: "Speaking", to: "/speaking" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="nav-logo" onClick={() => setOpen(false)}>
          RWK <span>RICHELLE&nbsp;W.&nbsp;KIHORO</span>
        </NavLink>

        <nav className="nav-links">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
              end={link.to === "/"}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta">
          <a href="/Richelle W. Kihoro_CV.pdf" download className="nav-link nav-cv">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            CV
          </a>
          <button
            className="nav-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span style={{ transform: open ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </div>

      <nav className={"nav-mobile" + (open ? " open" : "")}>
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => "nav-link" + (isActive ? " active" : "")}
            end={link.to === "/"}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
        <a href="/Richelle W. Kihoro_CV.pdf" download className="nav-link nav-cv" onClick={() => setOpen(false)}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download CV
        </a>
      </nav>
    </header>
  );
}
