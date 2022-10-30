import classNames from 'classnames';
import { AppModal, AppModalProps } from 'shared/ui/AppModal';
import { LoginForm } from '../LoginForm/LoginForm';
import cls from './LoginModal.module.scss';

interface LoginModalProps extends Omit<AppModalProps, 'children' | 'title'> {
    className?: string;
}

export const LoginModal = (props: LoginModalProps) => {
	const { className, isOpened, onRequestClose } = props;

	return (
		<AppModal
			className={classNames(cls.loginModal, className)}
			title="Авторизация"
			isOpened={isOpened}
			onRequestClose={onRequestClose}
		>
			<LoginForm />
		</AppModal>
	);
};
