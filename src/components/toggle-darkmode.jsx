import '../scss/components/toggle.scss';
import { useDarkmode } from './darkmode-context';

function Darkmode() {
    const { darkmode, toggleDarkmode } = useDarkmode();
    
    return (
        <label className="switch">
            <input
                type="checkbox"
                className="switch-input"
                checked={darkmode}
                onChange={toggleDarkmode} />
            <span className="toggle-slider"></span>
        </label>
    );
}

export default Darkmode;