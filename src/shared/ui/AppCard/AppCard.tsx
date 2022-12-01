import classNames from 'classnames';
import { ReactNode } from 'react';
import cls from './AppCard.module.scss';

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
		<div className={classNames(cls.appCard, className)}>
			{cover && (
				<img
					className={classNames(cls.appCardCover)}
					src={cover}
					alt="card cover"
				/>
			)}
			{head && (
				<div className={classNames(cls.appCardHead)}>
					{head}
				</div>
			)}
			<div className={classNames(cls.appCardBody)}>
				{children}
			</div>
		</div>
	);
};
