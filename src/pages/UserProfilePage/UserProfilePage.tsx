import classNames from 'classnames';
import { ProfileCard, userModel } from 'entities/user';
import { AppRoutes } from 'pages';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks';
import styles from './UserProfilePage.module.scss';

const UserProfilePage = () => {
	const dispatch = useAppDispatch();
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const authData = useSelector(userModel.getAuthData);

	useEffect(() => {
		if (!id) {
			return;
		}

		if (id === authData?.id) {
			navigate(AppRoutes.PROFILE, { replace: true });
		}

		dispatch(userModel.fetchProfile(id));
	}, [authData, dispatch, id, navigate]);

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
