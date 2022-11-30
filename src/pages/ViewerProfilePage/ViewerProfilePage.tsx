import classNames from 'classnames';
import { EditViewerProfile } from 'features/edit-viewer-profile';
import React from 'react';
import styles from './ViewerProfilePage.module.scss';

const ViewerProfilePage = () => (
	<div className={classNames(styles.viewerProfilePage)}>
		<EditViewerProfile />
	</div>
);

export default ViewerProfilePage;
