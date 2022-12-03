import classNames from 'classnames';
import styles from './AppSkeleton.module.scss';

interface AppSkeletonProps {
	className?: string;
	width?: number | string;
	height?: number | string;
	borderRadius?: 'base' | 'circle';
	color?: 'base' | 'primary';
}

export const AppSkeleton = (props: AppSkeletonProps) => {
	const {
		className,
		width,
		height,
		borderRadius = 'base',
		color = 'base',
		...otherProps
	} = props;

	return (
		<div
			className={classNames(
				styles.appSkeleton,
				className,
				{
					[styles.appSkeletonIsCircle]: borderRadius === 'circle',
					[styles.appSkeletonHasColorPrimary]: color === 'primary',
				},
			)}
			style={{
				width,
				height,
			}}
			{...otherProps}
		/>
	);
};
