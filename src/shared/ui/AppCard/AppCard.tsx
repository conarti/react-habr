import classNames from 'classnames';
import { ReactNode } from 'react';
import { AppImage } from '../AppImage';
import styles from './AppCard.module.scss';

interface AppCardProps {
    className?: string;
		head?: ReactNode;
		size?: 'sm' | 'md' | 'lg';
		children: ReactNode;
		cover?: string;
}

export const AppCard = (props: AppCardProps) => {
	const {
		className,
		children,
		cover,
		head,
		size = 'md',
	} = props;

	return (
		<div className={classNames(
			styles.appCard,
			className,
			styles[`app-card--is-${size}`],
		)}
		>
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
