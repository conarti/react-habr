import classNames from 'classnames';
import { ReactElement, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { CountrySelect } from 'entities/country';
import { CurrencySelect } from 'entities/currency';
import { AppAvatar } from 'shared/ui/AppAvatar';
import { AppCard } from 'shared/ui/AppCard';
import { AppInput } from 'shared/ui/AppInput';
import { AppSkeleton } from 'shared/ui/AppSkeleton';
import { AppText } from 'shared/ui/AppText';
import { UserProfile } from '../../config';
import styles from './ProfileCard.module.scss';
import { ProfileCardSkeleton } from './ProfileCard.skeleton';

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
			.filter((field) => field !== 'age'
				&& field !== 'currency'
				&& field !== 'avatar'
				&& field !== 'id'
				&& field !== 'country');
	}, [profile]);

	return (
		<AppCard
			className={classNames(styles.profileCard, className)}
			head={(
				<div className={classNames(styles.profileCardHeader)}>
					<h2 className={classNames(styles.profileCardTitle)}>
						{title}
					</h2>
					{
						actions && !error && (
							<div className={classNames(styles.profileCardActions)}>
								{isLoading ? (
									<AppSkeleton
										height={38}
										width={140}
									/>
								) : actions}
							</div>
						)
					}
				</div>
			)}
		>
			<div className={classNames(styles.profileCardBody)}>
				{isLoading && <ProfileCardSkeleton />}
				{!isLoading && error && <AppText message={error} />}
				{!isLoading && profile && (
					<>
						<AppAvatar
							className={classNames(styles.profileCardAvatar)}
							size="lg"
							src={profile.avatar}
						/>
						<div className={classNames(styles.profileCardFields)}>
							{
								profile && textFields.map((field) => (
									<AppInput
										className={classNames(styles.profileCardFieldsItem)}
										key={field}
										label={t(field)}
										isReadonly={!isEditable}
										value={profile[field as keyof UserProfile]}
										onInput={onUpdateField(field as keyof UserProfile)}
									/>
								))
							}
							<CountrySelect
								label={t('country')}
								value={profile.country}
								disabled={!isEditable}
								onSelect={onUpdateField('country')}
							/>
							<CurrencySelect
								label={t('currency')}
								value={profile.currency}
								disabled={!isEditable}
								onSelect={onUpdateField('currency')}
							/>
						</div>
					</>
				)}
			</div>
		</AppCard>
	);
};
