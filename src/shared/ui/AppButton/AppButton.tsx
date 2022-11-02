import classNames from 'classnames';
import { ButtonHTMLAttributes, FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import './AppButon.variables.scss';
import cls from './AppButton.module.scss';

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

export const AppButton: FC<AppButtonProps> = ({
	className,
	children,
	to,
	icon,
	theme = AppButtonTheme.PRIMARY,
	size = AppButtonSize.MD,
	isFill = false,
	disabled = false,
	...otherProps
}) => {
	const isLink = typeof to === 'string';

	if (isLink) {
		return (
			<NavLink
				className={({ isActive }) => classNames(
					cls.appButton,
					cls.appButtonIsLink,
					className,
					{
						[cls.appButtonIsFill]: isFill,
						[cls.appButtonPrimary]: isActive,
						[cls.appButtonClear]: !isActive,
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
					cls.appButton,
					{
						[cls.appButtonIsFill]: isFill,
					},
					className,
					cls[`app-button-${theme}`],
					cls[`app-button-${size}`],
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
};
