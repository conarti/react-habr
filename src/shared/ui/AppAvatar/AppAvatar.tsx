import classNames from 'classnames';
import './AppAvatar.variables.scss';
import { useMemo } from 'react';
import avatarPlaceholder from 'shared/assets/images/avatar-placeholder.png';
import styles from './AppAvatar.module.scss';

export type AppAvatarSize = 'sm' | 'md' | 'lg';

interface AppAvatarProps {
    className?: string;
		src: string | null;
		size?: AppAvatarSize;
}

export const AppAvatar = (props: AppAvatarProps) => {
	const {
		className,
		src,
		size,
	} = props;

	const avatarSrc = useMemo(() => (src !== null ? src : avatarPlaceholder), [src]);

	return (
		<img
			className={classNames(
				styles.appAvatar,
				className,
				{ [styles[`app-avatar-${size}`]]: size },
			)}
			src={avatarSrc}
			alt="avatar"
		/>
	);
};
