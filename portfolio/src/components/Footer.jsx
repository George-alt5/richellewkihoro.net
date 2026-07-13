import { Link } from "react-router-dom";

export default function Footer (){
    const year = new.Date().getFullYear();

    return (
        <footer className="footer">
            <div className="wrap">
                <div className="footer-top">
                    <div>
                        <div className="footer-brand">Richelle W. Kihoro</div>
                        <p className="footer-tag">
                            Research Scientist at the Kenya Medical Research Institute,
                            working at the intersection of malaria, neglected tropical
                            diseases, and community health.
                        </p>
                    </div>
                    <div>
                        <div className="footer-heading">Navigate</div>
                        <ul className="footer-links">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/research">Research &amp; Publications</Link></li>
                            <li><Link to="/speaking">Speaking &amp; Awards</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}