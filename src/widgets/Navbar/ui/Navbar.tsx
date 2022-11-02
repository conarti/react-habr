import classNames from 'classnames';
import { userModel } from 'entities/user';
import { LoginModal } from 'features/auth-by-username';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useModal } from 'shared/lib/hooks';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();

	const { isModalOpened, openModal, closeModal } = useModal();
	const authData = useSelector(userModel.getAuthData);
	const dispatch = useDispatch();

	const logout = useCallback(() => {
		dispatch(userModel.userActions.logout());
	}, [dispatch]);

	return (
		<div className={classNames(cls.navbar, className)}>
			<h1 className={classNames(cls.navbarTitle)}>{t('React course')}</h1>

			<div className={classNames(cls.navbarToolbar)}>
				{
					authData ? (
						<AppButton
							theme={AppButtonTheme.PRIMARY}
							onClick={logout}
						>
							{t('Выйти')}
						</AppButton>
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

			{!authData && (
				<LoginModal
					isOpened={isModalOpened}
					onRequestClose={closeModal}
				/>
			)}
		</div>
	);
};
