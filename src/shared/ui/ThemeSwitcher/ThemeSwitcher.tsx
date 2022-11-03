import { Theme, useTheme } from 'app/providers/ThemeProvider';
import classNames from 'classnames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import DarkIcon from 'shared/assets/icons/moon.svg';
import LightIcon from 'shared/assets/icons/sun.svg';
import { AppButton, AppButtonTheme } from '../AppButton';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();
	const { t } = useTranslation();

	return (
		<AppButton
			className={classNames(className)}
			theme={AppButtonTheme.CLEAR}
			icon={theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
			onClick={toggleTheme}
		>
			{theme === Theme.LIGHT ? t('Светлая') : t('Темная')}
		</AppButton>
	);
});
