import classNames from 'classnames';
import { ProfileCard } from 'entities/user';
import React from 'react';
import styles from './ProfilePage.module.scss';

const ProfilePage = () => (
	<div className={classNames(styles.profilePage)}>
		<ProfileCard />
	</div>
);

export default ProfilePage;
