import classNames from 'classnames';
import { EditViewerProfile } from 'features/edit-viewer-profile';
import React from 'react';
import styles from './ProfilePage.module.scss';

const ProfilePage = () => (
	<div className={classNames(styles.profilePage)}>
		<EditViewerProfile />
	</div>
);

export default ProfilePage;
