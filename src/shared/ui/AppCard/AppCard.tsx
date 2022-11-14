import classNames from 'classnames';
import { ReactElement } from 'react';
import cls from './AppCard.module.scss';

interface AppCardProps {
    className?: string;
		children: ReactElement;
}

export const AppCard = ({ className, children }: AppCardProps) => (
	<div className={classNames(cls.appCard, className)}>
		{children}
	</div>
);
