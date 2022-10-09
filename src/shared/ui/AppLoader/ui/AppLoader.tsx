import classNames from 'classnames';
import cls from './AppLoader.module.scss';

interface AppLoaderProps {
  className?: string;
	isFill?: boolean;
	isAbsolute?: boolean;
}

export const AppLoader = ({ className, isFill = false, isAbsolute = false }: AppLoaderProps) => (
	<div className={classNames(
		cls.appLoader,
		className,
		{
			[cls.isFill]: isFill,
			[cls.isAbsolute]: isAbsolute,
		},
	)}
	>
		<div className={cls.appLoaderSpinner} />
	</div>
);
