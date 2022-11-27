import { Theme, useTheme } from 'app/providers/ThemeProvider';
import classNames from 'classnames';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import DarkIcon from 'shared/assets/icons/moon.svg';
import LightIcon from 'shared/assets/icons/sun.svg';
import AutoIcon from 'shared/assets/icons/theme-auto.svg';
import { AppButton, AppButtonTheme } from '../AppButton';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();
	const { t } = useTranslation();

	const icon = useMemo(() => {
		switch (theme) {
		case Theme.LIGHT:
			return <LightIcon />;
		case Theme.DARK:
			return <DarkIcon />;
		case Theme.AUTO:
			return <AutoIcon />;
		default:
			throw new Error(`icon for theme "${theme}" is not set`);
		}
	}, [theme]);

	const label = useMemo(() => {
		switch (theme) {
		case Theme.LIGHT:
			return t('Светлая');
		case Theme.DARK:
			return t('Темная');
		case Theme.AUTO:
			return t('Авто');
		default:
			throw new Error(`label for theme "${theme}" is not set`);
		}
	}, [t, theme]);

	return (
		<AppButton
			className={classNames(className)}
			theme={AppButtonTheme.CLEAR}
			icon={icon}
			onClick={toggleTheme}
		>
			{label}
		</AppButton>
	);
});
