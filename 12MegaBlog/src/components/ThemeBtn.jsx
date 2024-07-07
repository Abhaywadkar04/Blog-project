import React from 'react';
import useTheme from '../contexts/theme';

const ThemeBtn = () => {
    const { theme, lightTheme, darkTheme } = useTheme();

    const handleToggle = (e) => {
        const lightModeStatus = e.currentTarget.checked
        if (lightModeStatus) {
            lightTheme();
        } else {
            darkTheme();
        }
    };

    return (
        <label className="relative inline-block w-[2.5em] h-[1.4em]">
            <input
                type="checkbox"
                value=""
                className="opacity-0 w-0 h-0"
                checked={theme === 'light'}
                onChange={handleToggle}
            />
            <span
                className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 transition-all duration-500 rounded-[30px] ${theme === 'light' ? 'bg-[#522ba7]' : 'bg-[#28096b]'
                    }`}
            ></span>
            <span
                className={`absolute content-[''] h-[1em] w-[1em] rounded-full left-[10%] bottom-[15%] transition-all duration-500 ${theme === 'light'
                        ? 'transform translate-x-full bg-[#522ba7] shadow-[inset_15px_-4px_0px_15px_#fff000]'
                        : 'bg-[#28096b] shadow-[inset_8px_-4px_0px_0px_#fff000]'
                    }`}
            ></span>
        </label>
    );
};

export default ThemeBtn;
