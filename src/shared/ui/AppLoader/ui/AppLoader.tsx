import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLoader.module.scss';

interface AppLoaderProps {
    className?: string;
	isFill?: boolean;
}

export const AppLoader = ({ className, isFill = false }: AppLoaderProps) => (
	<div className={classNames(cls.appLoader, { [cls.isFill]: isFill }, [className])}>
		<div className={cls.appLoaderSpinner} />
	</div>
);
