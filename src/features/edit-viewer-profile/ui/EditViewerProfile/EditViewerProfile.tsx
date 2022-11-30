import { ProfileCard, userModel } from 'entities/user';
import { UserProfile } from 'entities/user/config';
import { fetchProfile } from 'entities/user/model';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { AppButton, AppButtonSize, AppButtonTheme } from 'shared/ui/AppButton';

export const EditViewerProfile = () => {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();

	const authData = useSelector(userModel.getAuthData);

	const profile = useSelector(userModel.getProfile);
	const isLoading = useSelector(userModel.getIsLoading);
	const error = useSelector(userModel.getError);

	const [isEditable, setIsEditable] = useState(false);
	const [savedProfile, setSavedProfile] = useState<UserProfile | null>(null);

	useEffect(() => {
		if (!authData) {
			return;
		}

		dispatch(fetchProfile(authData.id))
			.then((action) => {
				setSavedProfile(action.payload as UserProfile);
			});
	}, [authData, dispatch]);

	const enableEditMode = useCallback(() => {
		setIsEditable(true);
	}, []);

	const disableEditMode = useCallback(() => {
		setIsEditable(false);
	}, []);

	const discardChanges = useCallback(() => {
		if (savedProfile !== null) {
			dispatch(userModel.userActions.setProfile(savedProfile));
		}
		disableEditMode();
	}, [disableEditMode, dispatch, savedProfile]);

	const saveChanges = useCallback(() => {
		if (!authData) {
			return;
		}

		dispatch(userModel.updateProfile(authData.id))
			.then((action) => {
				setSavedProfile(action.payload as UserProfile);
			});
		disableEditMode();
	}, [authData, disableEditMode, dispatch]);

	const editProfile = useCallback((ev) => {
		dispatch(userModel.userActions.updateProfileField(ev));
	}, [dispatch]);

	return (
		<ProfileCard
			title={t('Профиль')}
			actions={(
				isEditable ? (
					<>
						<AppButton
							size={AppButtonSize.SM}
							theme={AppButtonTheme.CLEAR}
							onClick={discardChanges}
						>
							{t('Отменить')}
						</AppButton>
						<AppButton
							size={AppButtonSize.SM}
							onClick={saveChanges}
						>
							{t('Сохранить')}
						</AppButton>
					</>
				) : (
					<AppButton
						size={AppButtonSize.SM}
						theme={AppButtonTheme.CLEAR}
						onClick={enableEditMode}
					>
						{t('Редактировать')}
					</AppButton>
				)
			)}
			error={error}
			profile={profile}
			isLoading={isLoading}
			isEditable={isEditable}
			onProfileEdit={editProfile}
		/>
	);
};
