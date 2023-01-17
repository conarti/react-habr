import classNames from 'classnames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { LoginModal } from 'features/auth-by-username';
import { ProfileMenu, userModel } from 'entities/user';
import { useAppDispatch, useModal } from 'shared/lib/hooks';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton';
import cls from './TheHeader.module.scss';

interface NavbarProps {
	className?: string;
}

export const TheHeader = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation();

	const { isModalOpened, openModal, closeModal } = useModal();
	const authData = useSelector(userModel.getAuthData);
	const dispatch = useAppDispatch();

	const logout = useCallback(() => {
		dispatch(userModel.userActions.logout());
	}, [dispatch]);

	return (
		<div className={classNames(cls.theHeader, className)}>
			<h1 className={classNames(cls.theHeaderTitle)}>{t('React course')}</h1>

			<div className={classNames(cls.theHeaderToolbar)}>
				{
					authData ? (
						<>
							<ProfileMenu />
							<AppButton
								theme={AppButtonTheme.PRIMARY}
								onClick={logout}
							>
								{t('Выйти')}
							</AppButton>
						</>
					) : (
						<AppButton
							theme={AppButtonTheme.PRIMARY}
							onClick={openModal}
						>
							{t('Войти')}
						</AppButton>
					)
				}
			</div>

			<LoginModal
				isOpened={isModalOpened}
				onRequestClose={closeModal}
			/>
		</div>
	);
});
