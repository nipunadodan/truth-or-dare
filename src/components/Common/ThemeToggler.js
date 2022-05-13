import React, {useContext} from 'react';
import { ThemeContext } from './ThemeContext';

const Toggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div
            className="inline-block transition duration-500 ease-in-out rounded-full py-2 px-6 bg-gray-100 dark:bg-gray-700 cursor-pointer text-gray-500 dark:text-gray-400 text-xl"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
                {theme === 'dark' ? (
                    <i className="la la-moon" />
                ) : (
                    <i className="la la-sun" />
                )}
        </div>
    );
};

export default Toggle;