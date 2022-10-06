import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import DarkIcon from 'shared/assets/icons/moon.svg';
import LightIcon from 'shared/assets/icons/sun.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, ThemeButton } from 'shared/ui/AppButton';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();
	const { t } = useTranslation();

	return (
		<AppButton
			className={classNames('', {}, [className])}
			theme={ThemeButton.CLEAR}
			isFill
			onClick={toggleTheme}
		>
			{theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
			{theme === Theme.LIGHT ? t('Светлая') : t('Темная')}
		</AppButton>
	);
};
