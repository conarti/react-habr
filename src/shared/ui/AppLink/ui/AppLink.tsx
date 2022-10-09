import classNames from 'classnames';
import { FC } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends NavLinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const {
		className,
		to,
		children,
		theme = AppLinkTheme.PRIMARY,
		...otherProps
	} = props;

	return (
		<NavLink
			className={({ isActive }) => classNames(
				cls.appLink,
				className,
				cls[theme],
				{ [cls.active]: isActive },
			)}
			to={to}
			{...otherProps}
		>
			{children}
		</NavLink>
	);
};
