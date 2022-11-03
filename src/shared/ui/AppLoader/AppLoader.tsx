import classNames from 'classnames';
import { memo } from 'react';
import cls from './AppLoader.module.scss';

interface AppLoaderProps {
  className?: string;
	isFill?: boolean;
	isAbsolute?: boolean;
}

export const AppLoader = memo(({ className, isFill = false, isAbsolute = false }: AppLoaderProps) => (
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
));
