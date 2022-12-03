import classNames from 'classnames';
import './AppAvatar.variables.scss';
import { AppSkeleton } from '../AppSkeleton';
import { AppAvatarSize } from './AppAvatar';
import styles from './AppAvatar.module.scss';

interface AppAvatarSkeletonProps {
	className?: string;
	size?: AppAvatarSize;
}

export const AppAvatarSkeleton = (props: AppAvatarSkeletonProps) => {
	const {
		className,
		size,
	} = props;

	return (
		<AppSkeleton
			className={classNames(
				styles.appAvatar,
				className,
				{ [styles[`app-avatar-${size}`]]: size },
			)}
			borderRadius="circle"
			color="primary"
		/>
	);
};
