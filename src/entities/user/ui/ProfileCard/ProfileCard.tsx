import classNames from 'classnames';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks';
import { AppButton, AppButtonSize } from 'shared/ui/AppButton';
import { AppCard } from 'shared/ui/AppCard';
import { AppInput } from 'shared/ui/AppInput';
import { fetchProfile } from '../../model';
import { getError, getIsLoading, getProfile } from '../../model/selectors';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
	const { t } = useTranslation('profile');
	const profile = useSelector(getProfile);
	// const isLoading = useSelector(getIsLoading);
	// const error = useSelector(getError);

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchProfile());
	}, [dispatch]);

	return (
		<AppCard className={classNames(cls.profileCard, className)}>
			<>
				<div className={classNames(cls.profileCardHeader)}>
					<h2 className={classNames(cls.profileCardTitle)}>{t('Профиль')}</h2>
					<AppButton size={AppButtonSize.SM}>{t('Редактировать')}</AppButton>
				</div>
				<div className={classNames(cls.profileCardBody)}>
					<AppInput
						label={t('Имя')}
						value={profile?.firstname || ''}
						onInput={() => {}}
					/>
					<AppInput
						label={t('Фамилия')}
						value={profile?.lastname || ''}
						onInput={() => {}}
					/>
				</div>
			</>
		</AppCard>
	);
};
