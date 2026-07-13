import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

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
            </div>
        </header>
    )
}