import classNames from 'classnames';
import { memo } from 'react';
import styles from './AppText.module.scss';

interface AppTextProps {
    className?: string;
		message: string;
}

// TODO: implement this
// TODO: stories

export const AppText = memo(({ className, message }: AppTextProps) => (
	<div className={classNames(styles.appText, className)}>{message}</div>
));
