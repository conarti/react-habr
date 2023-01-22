import classNames from 'classnames';
import { ReactNode } from 'react';
import { AppImage } from '../AppImage';
import styles from './AppCard.module.scss';

interface AppCardProps {
    className?: string;
		head?: ReactNode;
		children: ReactNode;
		cover?: string;
}

export const AppCard = (props: AppCardProps) => {
	const {
		className,
		children,
		cover,
		head,
	} = props;

	return (
		<div className={classNames(styles.appCard, className)}>
			{cover && (
				<AppImage
					height={200}
					errorImageSize={58}
					src={cover}
					alt="card cover"
				/>
			)}
			{head && (
				<div className={classNames(styles.appCardHead)}>
					{head}
				</div>
			)}
			<div className={classNames(styles.appCardBody)}>
				{children}
			</div>
		</div>
	);
};
