import React from 'react';
import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
	const { t } = useTranslation('profile');

	return (
		<div>
			<h1>{t('Профиль')}</h1>
		</div>
	);
};

export default ProfilePage;
