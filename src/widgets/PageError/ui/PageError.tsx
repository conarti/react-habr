import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { AppButton, AppButtonSize } from 'shared/ui/AppButton';
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
		<div className={classNames(cls.pageError, className)}>
			<h1 className={classNames(cls.pageErrorTitle)}>{t('Произошла ошибка')}</h1>
			<AppButton
				size={AppButtonSize.SM}
				onClick={reloadPage}
			>
				{t('Обновить страницу')}
			</AppButton>
		</div>
	);
};
