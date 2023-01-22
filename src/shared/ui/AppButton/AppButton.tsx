import classNames from 'classnames';
import {
	ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactElement,
} from 'react';
import { NavLink } from 'react-router-dom';
import './AppButon.variables.scss';
import styles from './AppButton.module.scss';

type AppButtonSize = 'sm' | 'md' | 'lg';
type AppButtonTheme = 'primary' | 'clear';

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: AppButtonTheme;
	isFill?: boolean;
	to?: string;
	icon?: ReactElement<any, any>;
	size?: AppButtonSize;
	disabled?: boolean;
}

// TODO: disabled style + stories

export const AppButton = forwardRef((
	{
		className,
		children,
		to,
		icon,
		theme = 'primary',
		size = 'md',
		isFill = false,
		disabled = false,
		...otherProps
	}: AppButtonProps,
	ref,
) => {
	const isLink = typeof to === 'string';

	if (isLink) {
		return (
			<NavLink
				className={({ isActive }) => classNames(
					styles.appButton,
					styles.appButtonIsLink,
					className,
					{
						[styles.appButtonIsFill]: isFill,
						[styles.appButtonPrimary]: isActive,
						[styles.appButtonClear]: !isActive,
					},
				)}
				to={to}
				ref={ref as ForwardedRef<HTMLAnchorElement>}
			>
				{icon}
				{children}
			</NavLink>
		);
	}

	return (
		<button
			className={
				classNames(
					styles.appButton,
					{
						[styles.appButtonIsFill]: isFill,
					},
					className,
					styles[`app-button-${theme}`],
					styles[`app-button-${size}`],
				)
			}
			type="button"
			disabled={disabled}
			ref={ref as ForwardedRef<HTMLButtonElement>}
			{...otherProps}
		>
			{icon}
			{children}
		</button>
	);
});
