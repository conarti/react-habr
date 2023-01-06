import classNames from 'classnames';
import { AppLink } from 'shared/ui/AppLink';
import styles from './ProfileMenu.module.scss';

interface ProfileMenuProps {
    className?: string;
}

export const ProfileMenu = ({ className }: ProfileMenuProps) => (
	<div className={classNames(styles.profileMenu, className)}>
		{/* eslint-disable-next-line i18next/no-literal-string */}
		<AppLink to={AppRoutes.PROFILE}>
			Профиль
		</AppLink>
	</div>
);
