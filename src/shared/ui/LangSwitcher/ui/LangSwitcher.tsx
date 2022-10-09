import { useTranslation } from 'react-i18next';
import LangIcon from 'shared/assets/icons/globe-alt.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, ThemeButton } from 'shared/ui/AppButton';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<AppButton
			className={classNames('', {}, [className])}
			theme={ThemeButton.CLEAR}
			icon={<LangIcon />}
			onClick={toggle}
		>
			{ t('Язык') }
		</AppButton>
	);
};
