import { createContext, useState, useEffect, useContext } from 'react';

const DarkmodeContext = createContext();

export const useDarkmode = () => useContext(DarkmodeContext);

export const DarkmodeProvider = ({ children }) => {
    const [darkmode, setDarkmode] = useState(() => {
        return localStorage.getItem('darkmode') === 'true';
    });

    useEffect(() => {
        localStorage.setItem('darkmode', darkmode.toString());
    }, [darkmode]);

    const toggleDarkmode = () => {
        setDarkmode(!darkmode);
    };
    
    darkmode ? document.body.classList.add('dark') : document.body.classList.remove('dark');

    return (
        <DarkmodeContext.Provider value={{ darkmode, toggleDarkmode }}>
            {children}
        </DarkmodeContext.Provider>
    );
};