import classNames from 'classnames';
import { AppAvatarSkeleton } from 'shared/ui/AppAvatar';
import { AppInputSkeleton } from 'shared/ui/AppInput';
import styles from './ProfileCard.module.scss';

const FIELDS_COUNT = 6;

export const ProfileCardSkeleton = () => (
	<div className={classNames(styles.profileCardBody)}>
		<AppAvatarSkeleton
			className={classNames(styles.profileCardAvatar)}
			size="lg"
		/>
		<div className={classNames(styles.profileCardFields)}>
			{Array.from({ length: FIELDS_COUNT }, () => (<AppInputSkeleton hasLabel />))}
		</div>
	</div>
);
