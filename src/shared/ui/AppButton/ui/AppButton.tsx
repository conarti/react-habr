import { ButtonHTMLAttributes, FC, ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
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
					{ [cls.isFill]: isFill, [cls.primary]: isActive, [cls.clear]: !isActive },
					[className, cls.isLink],
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
				classNames(cls.appButton, { [cls.isFill]: isFill }, [className, cls[theme]])
			}
			type="button"
			{...otherProps}
		>
			{icon}
			{children}
		</button>
	);
};
