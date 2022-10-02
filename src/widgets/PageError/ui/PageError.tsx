import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton, ThemeButton } from 'shared/ui/AppButton';
import cls from './PageError.module.scss';

interface PageErrorProps {
	className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		window.location.reload();
	};

	return (
		<div className={classNames(cls.pageError, {}, [className])}>
			<h1>{t('Произошла ошибка')}</h1>
			<AppButton theme={ThemeButton.CLEAR} onClick={reloadPage}>
				{t('Обновить страницу')}
			</AppButton>
		</div>
	);
};
