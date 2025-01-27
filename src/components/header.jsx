import { Link } from "react-router";
import { useDarkmode } from "./darkmode-context";
import Darkmode from "./toggle-darkmode";
import '../scss/components/header.scss';

function Header({ current }) {
    const { darkmode } = useDarkmode()

    const style = {
        home: {
            color: current === 'home' ? '#7687FC' : darkmode ? '#FFF' : '#000',
            borderTop: current === 'home' ? '2px solid #7687FC' : 'none'
        },
        aboutMe: {
            color: current === 'about-me' ? '#7687FC' : darkmode ? '#FFF' : '#000',
            borderTop: current === 'about-me' ? '2px solid #7687FC' : 'none'
        },
        projects: {
            color: current === 'projects' ? '#7687FC' : darkmode ? '#FFF' : '#000',
            borderTop: current === 'projects' ? '2px solid #7687FC' : 'none'
        },
    }
    return (
        <header className="header">
            <Link to='/'><img src="logo.svg" alt="logo" className="header__logo" /></Link>
            <nav>
                <ul className="header__list">
                    <li><Link to='/' className="header__list-item" style={style.home}>Hjem</Link></li>
                    <li><Link to='/about-me' className="header__list-item" style={style.aboutMe}>Om mig</Link></li>
                    <li><Link to='/projects' className="header__list-item" style={style.projects}>Projekter</Link></li>
                    <Darkmode />
                </ul>
            </nav>
        </header>
    );
}

export default Header;