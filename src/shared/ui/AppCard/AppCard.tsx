import classNames from 'classnames';
import { ReactNode, useCallback, useState } from 'react';
import { AppLoader } from 'shared/ui/AppLoader';
import styles from './AppCard.module.scss';

interface AppCardProps {
    className?: string;
		head?: ReactNode;
		children: ReactNode;
		cover?: string;
}

export const AppCard = (props: AppCardProps) => {
	const {
		className,
		children,
		cover,
		head,
	} = props;

	const [isImageLoaded, setIsImageLoaded] = useState(false);

	const onImageLoad = useCallback(() => {
		setIsImageLoaded(true);
	}, []);

	return (
		<div className={classNames(styles.appCard, className)}>
			{cover && (
				<div className={classNames(styles.appCardCoverSection)}>
					<img
						className={classNames(
							styles.appCardCover,
							{
								[styles.appCardCoverIsLoaded]: isImageLoaded,
							},
						)}
						src={cover}
						alt="card cover"
						onLoad={onImageLoad}
					/>
					{!isImageLoaded && <AppLoader isFill />}
				</div>
			)}
			{head && (
				<div className={classNames(styles.appCardHead)}>
					{head}
				</div>
			)}
			<div className={classNames(styles.appCardBody)}>
				{children}
			</div>
		</div>
	);
};
