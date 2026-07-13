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
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}