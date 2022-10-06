import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLoader.module.scss';

interface AppLoaderProps {
  className?: string;
	isFill?: boolean;
	isAbsolute?: boolean;
}

export const AppLoader = ({ className, isFill = false, isAbsolute = false }: AppLoaderProps) => (
	<div className={classNames(
		cls.appLoader,
		{ [cls.isFill]: isFill, [cls.isAbsolute]: isAbsolute },
		[className],
	)}
	>
		<div className={cls.appLoaderSpinner} />
	</div>
);
