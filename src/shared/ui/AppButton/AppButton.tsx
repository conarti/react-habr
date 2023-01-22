import classNames from 'classnames';
import {
	ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactElement, useMemo,
} from 'react';
import { NavLink } from 'react-router-dom';
import './AppButon.variables.scss';
import styles from './AppButton.module.scss';

type AppButtonSize = 'sm' | 'md' | 'lg';
type AppButtonTheme = 'primary' | 'clear' | 'primary-outline';

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: AppButtonTheme;
	isFill?: boolean;
	to?: string;
	icon?: ReactElement<any, any>;
	size?: AppButtonSize;
	iconPosition?: 'start' | 'end';
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
		iconPosition = 'start',
		...otherProps
	}: AppButtonProps,
	ref,
) => {
	const isLink = typeof to === 'string';

	const buttonContent = useMemo(() => (iconPosition === 'start' ? (
		<>
			{icon}
			{children}
		</>
	) : (
		<>
			{children}
			{icon}
		</>
	)), [children, icon, iconPosition]);

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
				{buttonContent}
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
			{buttonContent}
		</button>
	);
});
