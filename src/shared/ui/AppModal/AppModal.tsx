import classNames from 'classnames';
import React, {
	ReactNode, useCallback, useEffect, useRef,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import CloseIcon from 'shared/assets/icons/close.svg';
import { AppButton } from '../AppButton';
import { AppPortal } from '../AppPortal';
import styles from './AppModal.module.scss';

export interface AppModalProps {
	className?: string;
	title: string;
	children?: ReactNode;
	isOpened: boolean;
	onRequestClose: () => void;
}

export const AppModal = (props: AppModalProps) => {
	const {
		children,
		className,
		title,
		isOpened,
		onRequestClose,
	} = props;

	const modalRef = useRef(null);

	const onOverlayClick = () => {
		onRequestClose();
	};

	const onContentClick = (ev: React.MouseEvent) => {
		ev.stopPropagation();
	};

	const onKeyDown = useCallback((ev: KeyboardEvent) => {
		if (ev.key === 'Escape') {
			onRequestClose();
		}
	}, [onRequestClose]);

	useEffect(() => {
		if (isOpened) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpened, onKeyDown]);

	// FIXME: component is not unmount fully, saving the state
	return (
		<AppPortal to="body">
			<CSSTransition
				in={isOpened}
				nodeRef={modalRef}
				timeout={250}
				classNames={{
					enter: styles.appModalEnter,
					enterActive: styles.appModalEnterActive,
					exit: styles.appModalExit,
					exitActive: styles.appModalExitActive,
				}}
				unmountOnExit
			>
				<div
					className={classNames(styles.appModal, className)}
					onClick={onOverlayClick}
					ref={modalRef}
					data-testid="app-modal"
				>
					<div
						className={classNames(styles.appModalContent)}
						onClick={onContentClick}
						data-testid="app-modal-content"
					>
						<div className={classNames(styles.appModalHeader)}>
							<h2>{title}</h2>

							<AppButton
								className={classNames(styles.appModalCloseBtn)}
								theme="clear"
								size="sm"
								onClick={onRequestClose}
								data-testid="app-modal-close"
							>
								<CloseIcon className={classNames(styles.appModalCloseBtnIcon)} />
							</AppButton>
						</div>
						{children}
					</div>
				</div>
			</CSSTransition>
		</AppPortal>
	);
};
