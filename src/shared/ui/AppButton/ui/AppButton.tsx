import { ButtonHTMLAttributes, FC } from 'react';
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
}

export const AppButton: FC<AppButtonProps> = ({
	className,
	children,
	theme,
	isFill = false,
	...otherProps
}) => (
	<button
		className={classNames(cls.appButton, { [cls.isFill]: isFill }, [className, cls[theme]])}
		type="button"
		{...otherProps}
	>
		{children}
	</button>
);
