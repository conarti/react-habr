import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppButton.module.scss';

export const enum ThemeButton {
    CLEAR = 'clear',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
}

export const AppButton: FC<AppButtonProps> = ({ className, children, theme, ...otherProps }) => {
    return (
        <button className={classNames(cls.appButton, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </button>
    );
};
