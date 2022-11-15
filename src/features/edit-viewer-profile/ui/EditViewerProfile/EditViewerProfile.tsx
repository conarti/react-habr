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

	const profile = useSelector(userModel.getProfile);
	const isLoading = useSelector(userModel.getIsLoading);
	const error = useSelector(userModel.getError);

	const [isEditable, setIsEditable] = useState(false);
	const [savedProfile, setSavedProfile] = useState<UserProfile | null>(null);

	useEffect(() => {
		dispatch(fetchProfile())
			.then((action) => {
				setSavedProfile(action.payload as UserProfile);
			});
	}, [dispatch]);

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
		if (profile) {
			dispatch(userModel.updateProfile(profile))
				.then((action) => {
					setSavedProfile(action.payload as UserProfile);
				});
		}
		disableEditMode();
	}, [disableEditMode, dispatch, profile]);

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
