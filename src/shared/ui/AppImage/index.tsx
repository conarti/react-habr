import classNames from 'classnames';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TriangleExclamationIcon from 'shared/assets/icons/triangle-exclamation.svg';
import { AppLoader } from 'shared/ui/AppLoader';
import styles from './index.module.scss';

interface AppImageProps {
	className?: string;
	src: string;
	alt?: string;
	height?: number | string;
	width?: number | string;
	errorImageSize?: number | string;
}

export const AppImage = memo((props: AppImageProps) => {
	const {
		className,
		src,
		width,
		height,
		errorImageSize = 24,
		alt = 'image',
	} = props;

	const { t } = useTranslation();

	const [isImageLoaded, setIsImageLoaded] = useState(false);
	const [hasLoadError, setHasLoadError] = useState(false);

	const onImageLoad = useCallback(() => {
		setIsImageLoaded(true);
	}, []);

	const onImageLoadError = useCallback(() => {
		setHasLoadError(true);
	}, []);

	return (
		<div
			className={classNames(
				className,
				styles.appImage,
				{
					[styles.appImageIsLoaded]: isImageLoaded,
				},
			)}
			style={{
				width,
				height,
			}}
		>
			<img
				className={classNames(styles.appImageNative)}
				src={src}
				alt={alt}
				onLoad={onImageLoad}
				onError={onImageLoadError}
			/>
			{!isImageLoaded && !hasLoadError && <AppLoader isFill />}
			{hasLoadError && (
				<p className={classNames(styles.appImageError)}>
					<TriangleExclamationIcon
						className="app-icon mb-sm"
						style={{
							width: errorImageSize,
							height: errorImageSize,
						}}
					/>
					<span>
						{ t('appImage.loadError') }
					</span>
				</p>
			)}
		</div>
	);
});
