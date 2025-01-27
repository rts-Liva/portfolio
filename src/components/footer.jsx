import { CiLinkedin } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router";
import { useDarkmode } from "./darkmode-context";
import '../scss/components/footer.scss';

function Footer() {
    const { darkmode } = useDarkmode();

    return (
        <footer className="footer">
            <div className="footer__menu">
                <nav>
                    <ul className="footer__list">
                        <li><Link to='/' className="footer__list-item">Hjem</Link></li>
                        <li><Link to='/about-me' className="footer__list-item">Om mig</Link></li>
                        <li><Link to='/projects' className="footer__list-item">Projekter</Link></li>
                    </ul>
                </nav>
                <nav>
                    <ul className="footer__list">
                        <li><a href="tel:+42250625"><FiPhone color={darkmode ? '#FFF' : '#000'} className="footer__list-icon" /></a></li>
                        <li><a href="mailto:liva@baretten.dk"><FiMail color={darkmode ? '#FFF' : '#000'} className="footer__list-icon" /></a></li>
                        <li><a href="https://www.linkedin.com/in/liva-kuhlmann-695194292/" target="_blank"><CiLinkedin color={darkmode ? '#FFF' : '#000'} className="footer__list-icon" /></a></li>
                        <li><a href="https://github.com/rts-Liva" target="_blank"><IoLogoGithub color={darkmode ? '#FFF' : '#000'} className="footer__list-icon" /></a></li>
                    </ul>
                </nav>
            </div>
            <small className="footer__small">Liva Kuhlmann <FaRegCopyright /> 2025</small>
        </footer>
    );
}

export default Footer;