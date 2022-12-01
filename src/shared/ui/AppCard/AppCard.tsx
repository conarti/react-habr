import classNames from 'classnames';
import { ReactNode } from 'react';
import cls from './AppCard.module.scss';

interface AppCardProps {
    className?: string;
		children: ReactNode;
}

export const AppCard = ({ className, children }: AppCardProps) => (
	<div className={classNames(cls.appCard, className)}>
		{children}
	</div>
);
