import classNames from 'classnames';
import cls from 'entities/user/ui/ProfileCard/ProfileCard.module.scss';
import { AppAvatarSkeleton } from 'shared/ui/AppAvatar';
import { AppInputSkeleton } from 'shared/ui/AppInput';
import styles from './ProfileCard.module.scss';

interface ProfileCardSkeletonProps {
    className?: string;
}

const FIELDS_COUNT = 6;

export const ProfileCardSkeleton = ({ className }: ProfileCardSkeletonProps) => (
	<div className={classNames(styles.profileCardBody)}>
		<AppAvatarSkeleton
			className={classNames(cls.profileCardAvatar)}
			size="lg"
		/>
		<div className={classNames(cls.profileCardFields)}>
			{Array.from({ length: FIELDS_COUNT }, () => (<AppInputSkeleton hasLabel />))}
		</div>
	</div>
);
