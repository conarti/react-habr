import classNames from 'classnames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import LangIcon from 'shared/assets/icons/globe-alt.svg';
import { AppButton, AppButtonTheme } from '../AppButton';

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<AppButton
			className={classNames(className)}
			theme={AppButtonTheme.CLEAR}
			icon={<LangIcon />}
			onClick={toggle}
		>
			{ t('Язык') }
		</AppButton>
	);
});
