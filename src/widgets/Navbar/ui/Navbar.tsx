import classNames from 'classnames';
import { LoginModal } from 'features/auth-by-username';
import { useTranslation } from 'react-i18next';
import { useModal } from 'shared/lib/hooks';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();

	const { isModalOpened, openModal, closeModal } = useModal();

	return (
		<div className={classNames(cls.navbar, className)}>
			<h1 className={classNames(cls.navbarTitle)}>{t('React course')}</h1>

			<div className={classNames(cls.navbarToolbar)}>
				<AppButton
					theme={AppButtonTheme.PRIMARY}
					onClick={openModal}
				>
					{t('Войти')}
				</AppButton>
			</div>

			<LoginModal
				isOpened={isModalOpened}
				onRequestClose={closeModal}
			/>
		</div>
	);
};
