import classNames from 'classnames';
import { ProfileCard, userModel } from 'entities/user';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks';
import styles from './UserProfilePage.module.scss';

const UserProfilePage = () => {
	const dispatch = useAppDispatch();
	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		if (id) {
			dispatch(userModel.fetchProfile(id));
		}
	}, [dispatch, id]);

	const profile = useSelector(userModel.getProfile);
	const error = useSelector(userModel.getError);
	const isLoading = useSelector(userModel.getIsLoading);

	return (
		<div className={classNames(styles.userProfilePage)}>
			<ProfileCard
				title="Профиль"
				profile={profile}
				isLoading={isLoading}
				error={error}
			/>
		</div>
	);
};

export default UserProfilePage;
