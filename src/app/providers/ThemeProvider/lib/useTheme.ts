import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme } from '../config';
import { setStylesForTheme } from './setStylesForTheme';
import { ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

const getNewTheme = (theme: Theme) => {
	switch (theme) {
	case Theme.LIGHT:
		return Theme.DARK;
	case Theme.DARK:
		return Theme.AUTO;
	case Theme.AUTO:
		return Theme.LIGHT;
	default:
		throw new Error(`getNewTheme - unknown theme: ${theme}`);
	}
};

export const useTheme = (): UseThemeResult => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme = getNewTheme(theme as Theme);
		setTheme?.(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
		setStylesForTheme(newTheme);
	};

	return { theme: theme ?? Theme.AUTO, toggleTheme };
};
