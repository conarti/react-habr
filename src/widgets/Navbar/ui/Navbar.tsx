import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { AppButton, ThemeButton } from 'shared/ui/AppButton';
import { AppModal, useModal } from 'shared/ui/AppModal';
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
					theme={ThemeButton.PRIMARY}
					onClick={openModal}
				>
					{t('Войти')}
				</AppButton>
			</div>

			<AppModal
				title="Авторизация"
				isOpened={isModalOpened}
				onRequestClose={closeModal}
			>
				{/* eslint-disable i18next/no-literal-string */}
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur corporis distinctio dolorem ea eaque minima porro quam sit ut?
			</AppModal>
		</div>
	);
};
