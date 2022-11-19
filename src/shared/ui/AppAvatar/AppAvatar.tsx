import classNames from 'classnames';
import './AppAvatar.variables.scss';
import styles from './AppAvatar.module.scss';

type AppAvatarSize = 'sm' | 'md' | 'lg';

interface AppAvatarProps {
    className?: string;
		src: string;
		size?: AppAvatarSize;
}

export const AppAvatar = (props: AppAvatarProps) => {
	const { className, src, size } = props;

	return (
		<img
			className={classNames(
				styles.appAvatar,
				className,
				{ [styles[`app-avatar-${size}`]]: size },
			)}
			src={src}
			alt="avatar"
		/>
	);
};
