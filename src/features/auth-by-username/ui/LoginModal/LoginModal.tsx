import classNames from 'classnames';
import { AppModal, AppModalProps } from 'shared/ui/AppModal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps extends Omit<AppModalProps, 'children' | 'title'> {
    className?: string;
}

export const LoginModal = (props: LoginModalProps) => {
	const { className, isOpened, onRequestClose } = props;

	return (
		<AppModal
			className={classNames(className)}
			title="Авторизация"
			isOpened={isOpened}
			onRequestClose={onRequestClose}
		>
			<LoginForm />
		</AppModal>
	);
};
