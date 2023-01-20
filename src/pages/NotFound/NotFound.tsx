import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

export const NotFound = ({ className }: NotFoundProps) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(styles.notFound, className)}>
			<h1>
				{t('Страница не найдена')}
			</h1>
		</div>
	);
};
