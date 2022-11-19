import classNames from 'classnames';
import { UserProfile } from 'entities/user/config';
import { ReactElement, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppAvatar } from 'shared/ui/AppAvatar';
import { AppCard } from 'shared/ui/AppCard';
import { AppInput } from 'shared/ui/AppInput';
import { AppLoader } from 'shared/ui/AppLoader';
import { AppText } from 'shared/ui/AppText';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
	title: string;
	className?: string;
	actions?: ReactElement;
	isEditable: boolean;
	profile: UserProfile | null;
	isLoading: boolean;
	error: string | null;
	onProfileEdit: (ev: { [field: string]: any }) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className, title, actions, isEditable, profile, isLoading, error, onProfileEdit,
	} = props;
	const { t } = useTranslation('profile');

	const onUpdateField = useCallback((field: keyof UserProfile) => (value: string | number) => onProfileEdit({ [field]: value }), [onProfileEdit]);

	const textFields = useMemo(() => {
		if (profile === null) {
			return [];
		}

		return Object.keys(profile)
			.filter((field) => field !== 'age' && field !== 'currency' && field !== 'avatar');
	}, [profile]);

	return (
		<AppCard className={classNames(cls.profileCard, className)}>
			{
				isLoading ? (
					<AppLoader isFill />
				) : (
					<>
						<div className={classNames(cls.profileCardHeader)}>
							<h2 className={classNames(cls.profileCardTitle)}>
								{title}
							</h2>
							{
								actions && (
									<div className={classNames(cls.profileCardActions)}>
										{actions}
									</div>
								)
							}
						</div>
						<div className={classNames(cls.profileCardBody)}>
							{error && <AppText message={error} />}
							<AppAvatar
								className={classNames(cls.profileCardAvatar)}
								size="lg"
								src={profile?.avatar || ''}
							/>
							<div className={classNames(cls.profileCardFields)}>
								{
									profile && textFields.map((field) => (
										<AppInput
											className={classNames(cls.profileCardFieldsItem)}
											key={field}
											label={t(field)}
											isReadonly={!isEditable}
											value={profile[field as keyof UserProfile] || ''}
											onInput={onUpdateField(field as keyof UserProfile)}
										/>
									))
								}
							</div>
						</div>
					</>
				)
			}
		</AppCard>
	);
};
