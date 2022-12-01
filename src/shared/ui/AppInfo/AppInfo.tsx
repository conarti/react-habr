import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './AppInfo.module.scss';

interface AppInfoProps {
    className?: string;
    title?: string;
    label: string | number;
    icon: ReactNode;
}

export const AppInfo = (props: AppInfoProps) => {
	const {
		className,
		title,
		label,
		icon,
	} = props;

	return (
		<div
			className={classNames(styles.appInfo, className)}
			title={title}
		>
			{icon}
			<span>{label}</span>
		</div>
	);
};
