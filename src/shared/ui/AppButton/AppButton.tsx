import classNames from 'classnames';
import { ButtonHTMLAttributes, memo, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import './AppButon.variables.scss';
import styles from './AppButton.module.scss';

export const enum AppButtonTheme {
	CLEAR = 'clear',
	PRIMARY = 'primary',
}

export const enum AppButtonSize {
	SM = 'sm',
	MD = 'md',
	LG = 'lg',
}

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

export const AppButton = memo(({
	className,
	children,
	to,
	icon,
	theme = AppButtonTheme.PRIMARY,
	size = AppButtonSize.MD,
	isFill = false,
	disabled = false,
	...otherProps
}: AppButtonProps) => {
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
			{...otherProps}
		>
			{icon}
			{children}
		</button>
	);
});
