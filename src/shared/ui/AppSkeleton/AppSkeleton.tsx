import classNames from 'classnames';
import styles from './AppSkeleton.module.scss';

interface AppSkeletonProps {
	className?: string;
	width?: number;
	height?: number;
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
		/>
	);
};