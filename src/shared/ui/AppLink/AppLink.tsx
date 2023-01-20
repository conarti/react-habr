import classNames from 'classnames';
import { memo } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends NavLinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
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
				styles.appLink,
				className,
				styles[theme],
				{ [styles.active]: isActive },
			)}
			to={to}
			{...otherProps}
		>
			{children}
		</NavLink>
	);
});
