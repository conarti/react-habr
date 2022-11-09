import classNames from 'classnames';
import { memo, useEffect, useState } from 'react';
import cls from './AppLoader.module.scss';

interface AppLoaderProps {
  className?: string;
	isFill?: boolean;
	isAbsolute?: boolean;
	delay?: number;
}

export const AppLoader = memo((props: AppLoaderProps) => {
	const {
		className,
		isFill = false,
		isAbsolute = false,
		delay = null,
	} = props;

	const [isDelayEnded, setIsDelayEnded] = useState(false);

	useEffect(() => {
		if (delay === null) {
			setIsDelayEnded(true);
			return () => {};
		}

		const timeout = setTimeout(() => {
			setIsDelayEnded(true);
		}, delay);

		return () => {
			clearTimeout(timeout);
		};
	}, [delay]);

	return (
		isDelayEnded && (
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
		)
	);
});
