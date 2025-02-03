import { Link } from "react-router";
import { useDarkmode } from "./darkmode-context";
import Darkmode from "./toggle-darkmode";
import '../scss/components/header.scss';

function Header({ current }) {
    const { darkmode } = useDarkmode()

    const style = {
        home: {
            color: current === 'home' ? '#7687FC' : darkmode ? '#FFF' : '#000',
        },
        aboutMe: {
            color: current === 'about-me' ? '#7687FC' : darkmode ? '#FFF' : '#000',
        },
        projects: {
            color: current === 'projects' ? '#7687FC' : darkmode ? '#FFF' : '#000',
        },
    }
    return (
        <header className="header">
            <Link to='/'><img src="/logo.svg" alt="logo" className="header__logo" /></Link>
            <nav>
                <ul className="header__list">
                    <li><Link to='/' className={current === 'home' ? 'header__list-item current' : 'header__list-item'} style={style.home}>Hjem</Link></li>
                    <li><Link to='/about-me' className={current === 'about-me' ? 'header__list-item current' : 'header__list-item'} style={style.aboutMe}>Om mig</Link></li>
                    <li><Link to='/projects' className={current === 'projects' ? 'header__list-item current' : 'header__list-item'} style={style.projects}>Projekter</Link></li>
                    <Darkmode />
                </ul>
            </nav>
        </header>
    );
}

export default Header;