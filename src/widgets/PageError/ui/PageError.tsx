import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton';
import styles from './PageError.module.scss';

interface PageErrorProps {
	className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		window.location.reload();
	};

	return (
		<div className={classNames(styles.pageError, className)}>
			<h1 className={classNames(styles.pageErrorTitle)}>{t('Произошла ошибка')}</h1>
			<AppButton
				size="sm"
				onClick={reloadPage}
			>
				{t('Обновить страницу')}
			</AppButton>
		</div>
	);
};
