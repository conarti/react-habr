import classNames from 'classnames';
import { ReactNode } from 'react';
import cls from './AppCard.module.scss';

interface AppCardProps {
    className?: string;
		children: ReactNode;
		cover?: string;
}

export const AppCard = (props: AppCardProps) => {
	const {
		className,
		children,
		cover,
	} = props;

	return (
		<div className={classNames(cls.appCard, className)}>
			{cover && (
				<img
					className={classNames(cls.appCardCover)}
					src={cover}
					alt="card cover"
				/>
			)}
			<div className={classNames(cls.appCardBody)}>
				{children}
			</div>
		</div>
	);
};
