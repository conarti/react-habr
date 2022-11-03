import classNames from 'classnames';
import { Suspense } from 'react';
import { AppLoader } from 'shared/ui/AppLoader';
import { AppModal, AppModalProps } from 'shared/ui/AppModal';
import { LoginFormAsync } from '../LoginForm';

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
			<Suspense fallback={<AppLoader isFill />}>
				<LoginFormAsync onSuccess={onRequestClose} />
			</Suspense>
		</AppModal>
	);
};
