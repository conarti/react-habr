import classNames from 'classnames';
import { CountrySelect } from 'entities/country';
import { CurrencySelect } from 'entities/currency';
import { ReactElement, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppAvatar } from 'shared/ui/AppAvatar';
import { AppCard } from 'shared/ui/AppCard';
import { AppInput } from 'shared/ui/AppInput';
import { AppLoader } from 'shared/ui/AppLoader';
import { AppText } from 'shared/ui/AppText';
import { UserProfile } from '../../config';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
	title: string;
	className?: string;
	actions?: ReactElement;
	isEditable?: boolean;
	profile: UserProfile | null;
	isLoading: boolean;
	error: string | null;
	onProfileEdit?: (ev: { [field: string]: any }) => void;
}

// TODO: validation (42)
export const ProfileCard = (props: ProfileCardProps) => {
	const {
		className,
		title,
		actions,
		profile,
		isLoading,
		error,
		isEditable = false,
		onProfileEdit = () => {},
	} = props;
	const { t } = useTranslation('profile');

	const onUpdateField = useCallback((field: keyof UserProfile) => (value: string | number) => onProfileEdit({ [field]: value }), [onProfileEdit]);

	const textFields = useMemo(() => {
		if (profile === null) {
			return [];
		}

		return Object.keys(profile)
			.filter((field) => field !== 'age' && field !== 'currency' && field !== 'avatar' && field !== 'country');
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
								actions && !error && (
									<div className={classNames(cls.profileCardActions)}>
										{actions}
									</div>
								)
							}
						</div>
						<div className={classNames(cls.profileCardBody)}>
							{error && <AppText message={error} />}
							{profile && (
								<>
									<AppAvatar
										className={classNames(cls.profileCardAvatar)}
										size="lg"
										src={profile.avatar}
									/>
									<div className={classNames(cls.profileCardFields)}>
										{
											profile && textFields.map((field) => (
												<AppInput
													className={classNames(cls.profileCardFieldsItem)}
													key={field}
													label={t(field)}
													isReadonly={!isEditable}
													value={profile[field as keyof UserProfile]}
													onInput={onUpdateField(field as keyof UserProfile)}
												/>
											))
										}
										{
											isEditable ? (
												<CountrySelect
													label={t('country')}
													onSelect={onUpdateField('country')}
												/>
											) : (
												<AppInput
													className={classNames(cls.profileCardFieldsItem)}
													label={t('country')}
													isReadonly={!isEditable}
													value={profile.country}
													onInput={onUpdateField('country')}
												/>
											)
										}
										{
											isEditable ? (
												<CurrencySelect
													label={t('currency')}
													onSelect={onUpdateField('currency')}
												/>
											) : (
												<AppInput
													className={classNames(cls.profileCardFieldsItem)}
													label={t('currency')}
													isReadonly={!isEditable}
													value={profile.currency}
													onInput={onUpdateField('currency')}
												/>
											)
										}
									</div>
								</>
							)}
						</div>
					</>
				)
			}
		</AppCard>
	);
};
