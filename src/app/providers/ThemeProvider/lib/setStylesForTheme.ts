import { Theme } from '../config';

export const setStylesForTheme = (theme: Theme) => {
	document.body.dataset.theme = theme;
};
