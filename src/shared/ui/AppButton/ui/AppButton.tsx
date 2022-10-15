import classNames from 'classnames';
import { ButtonHTMLAttributes, FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import cls from './AppButton.module.scss';

export const enum ThemeButton {
	CLEAR = 'clear',
	PRIMARY = 'primary',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
	isFill?: boolean;
	to?: string;
	icon?: ReactElement<any, any>;
}

export const AppButton: FC<AppButtonProps> = ({
	className,
	children,
	theme,
	to,
	icon,
	isFill = false,
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
				classNames(cls.appButton, { [cls.appButtonIsFill]: isFill }, className, cls[`app-button-${theme}`])
			}
			type="button"
			{...otherProps}
		>
			{icon}
			{children}
		</button>
	);
};
