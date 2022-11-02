import classNames from 'classnames';
import cls from './AppText.module.scss';

interface AppTextProps {
    className?: string;
		message: string;
}

// TODO: implement this
// TODO: stories

export const AppText = ({ className, message }: AppTextProps) => (
	<div className={classNames(cls.appText, className)}>{message}</div>
);
