import { useState, useEffect } from "react";
import { NavLink, UNSAFE_getTurboStreamSingleFetchDataStrategy } from "react-router-dom";

const LINKS = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Research", to: "/research"},
    {label: "Speaking", to: "/speaking"},
    { label: "Contact", to: "/contact" },
];

export default function Navbar(){
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
                    className={ ({ isActive}) => "nav-link" + (isActive ? "active" : "") }
                    end={link.to === "/"}
                    >
                        {link.label}
                    </NavLink>
                ))}
                </nav>
                
                <div className="nav-cta">
                    <a href="/RWK-CV.pdf" download className="nav-link">CV</a>
                    <button
                    className="nav-toggle"
                    aria-label={ open ? "Close menu" : "Open menu" }
                    aria-expanded={ open }
                    onClick={() => setOpen((v) => !v)}
                    >
                   <span style={{ transform: open ? "translateY(7px) rotate(45deg)" : "none" }} />
                   <span style={{ opacity: open ? 0 : 1 }} />
                   <span style={{ transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }} />
                    </button>
                </div>
            </div>
            <nav className={"nav-mobile" + (open ? " open " : "")}>
                {LINKS.map((link) => (
                    <NavLink
                    key={link.to}
                    to={link.to}
                    className={({isActive}) => "nav-link" + (isActive ? "active" : "")}
                    end={link.to === "/"}
                    onClick={() => setOpen(false)}
                    >
                        {link.label}
                    </NavLink>
                ))}
                <a href="/RWK-CV.pdf" download className="nav-link" onClick={() => setOpen(false)}>
                Download CV
                </a>
            </nav>
        </header>
    );
}