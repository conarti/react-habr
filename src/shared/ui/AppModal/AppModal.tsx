import classNames from 'classnames';
import React, {
	ReactNode, useCallback, useEffect, useRef,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import CloseIcon from 'shared/assets/icons/close.svg';
import { AppButton, AppButtonSize, AppButtonTheme } from '../AppButton';
import { AppPortal } from '../AppPortal';
import cls from './AppModal.module.scss';

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

	return (
		<AppPortal to="body">
			<CSSTransition
				in={isOpened}
				nodeRef={modalRef}
				timeout={250}
				classNames={{
					enter: cls.appModalEnter,
					enterActive: cls.appModalEnterActive,
					exit: cls.appModalExit,
					exitActive: cls.appModalExitActive,
				}}
				unmountOnExit
			>
				<div
					className={classNames(cls.appModal, className)}
					onClick={onOverlayClick}
					ref={modalRef}
				>
					<div
						className={classNames(cls.appModalContent)}
						onClick={onContentClick}
					>
						<div className={classNames(cls.appModalHeader)}>
							<h2>{ title }</h2>

							<AppButton
								className={classNames(cls.appModalCloseBtn)}
								theme={AppButtonTheme.CLEAR}
								size={AppButtonSize.SM}
								onClick={onRequestClose}
							>
								<CloseIcon className={classNames(cls.appModalCloseBtnIcon)} />
							</AppButton>
						</div>
						{children}
					</div>
				</div>
			</CSSTransition>
		</AppPortal>
	);
};
