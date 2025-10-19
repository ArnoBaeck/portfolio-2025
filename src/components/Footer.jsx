import "../Styles/Footer.css"

export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="left">
                    <div className="email">
                        <p>Email:</p>
                        <a href="mailto:arno.baeck@student.ehb.be">arno.baeck@student.ehb.be</a>
                    </div>
                    <div className="phone-number">
                        <p>Phone:</p>
                        <a href="tel:+32472996978">+32 4729 96978</a>
                    </div>
                </div>
                <div className="center">
                    <p>{(new Date().getFullYear())} — Arno Baeck</p>
                </div>
                <div className="right">
                    <div className="footer-links">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">My work</a></li>
                            <li><a href="#">About me</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}