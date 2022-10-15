import classNames from 'classnames';
import React, { ReactNode, useCallback, useEffect } from 'react';
import CloseIcon from 'shared/assets/icons/close.svg';
import { AppButton, ThemeButton } from 'shared/ui/AppButton';
import { AppButtonSize } from 'shared/ui/AppButton/ui/AppButton';
import { AppPortal } from 'shared/ui/AppPortal';
import cls from './AppModal.module.scss';

interface AppModalProps {
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
			<div
				className={classNames(cls.appModal, className, { [cls.appModalIsOpened]: isOpened })}
				onClick={onOverlayClick}
			>
				<div
					className={classNames(cls.appModalContent)}
					onClick={onContentClick}
				>
					<div className={classNames(cls.appModalHeader)}>
						<h2>{ title }</h2>

						<AppButton
							className={classNames(cls.appModalCloseBtn)}
							theme={ThemeButton.CLEAR}
							size={AppButtonSize.SM}
							onClick={onRequestClose}
						>
							<CloseIcon className={classNames(cls.appModalCloseBtnIcon)} />
						</AppButton>
					</div>
					{children}
				</div>
			</div>
		</AppPortal>
	);
};
