export const enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
	AUTO = 'auto',
}

export interface ThemeContextProps {
	theme?: Theme;
	setTheme?: (theme: Theme) => void;
}
