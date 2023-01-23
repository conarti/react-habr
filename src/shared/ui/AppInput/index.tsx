import { Transition } from '@headlessui/react';
import classNames from 'classnames';
import {
	ChangeEvent,
	Fragment,
	InputHTMLAttributes,
	memo,
	ReactElement,
	useCallback,
	useMemo,
} from 'react';
import XmarkIcon from 'shared/assets/icons/xmark.svg';
import { uniqueId } from 'shared/lib/uniqueId/uniqueId';
import styles from './index.module.scss';
import './index.variables.scss';

export { AppInputSkeleton } from './index.skeleton';

interface AppInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onInput' | 'readonly' | 'size'> {
	className?: string;
	label?: string;
	isFill?: boolean;
	icon?: ReactElement<any, any>;
	iconPlacement?: 'start' | 'end';
	size?: 'sm' | 'md' | 'lg';
	clearable?: boolean;
	value: string | number;
	onInput: (value: string) => void;
	isReadonly?: boolean;
}

export const AppInput = memo((props: AppInputProps) => {
	const {
		className,
		label,
		value,
		onInput,
		icon,
		clearable = false,
		size = 'md',
		iconPlacement = 'start',
		isReadonly = false,
		id = uniqueId(),
		isFill = false,
		type = 'text',
		...otherProps
	} = props;

	const onInputHandler = (ev: ChangeEvent<HTMLInputElement>) => {
		onInput(ev.target.value);
	};

	const clear = useCallback(() => {
		onInput('');
	}, [onInput]);

	const hasValue = useMemo(() => String(value).length > 0, [value]);
	const isClearButtonVisible = useMemo(() => clearable && hasValue, [clearable, hasValue]);

	return (
		<div className={classNames(
			styles.appInput,
			className,
			{
				[styles.appInputIsFill]: isFill,
				[styles.appInputIsReadonly]: isReadonly,
				[styles.appInputHasIcon]: icon,
				[styles.appInputHasIconPlacementStart]: icon && iconPlacement === 'start',
				[styles.appInputHasIconPlacementEnd]: icon && iconPlacement === 'end',
				[styles.appInputIsClearable]: clearable,
			},
			styles[`app-input--is-${size}`],
		)}
		>
			{label && (
				<label htmlFor={id}>
					{label}
				</label>
			)}
			<div className={classNames(styles.appInputContainer)}>
				<input
					id={id}
					className={classNames(styles.appInputNative)}
					type={type}
					value={value}
					onInput={onInputHandler}
					readOnly={isReadonly}
					{...otherProps}
				/>
				{icon && (
					<div className={classNames(styles.appInputIcon)}>
						{icon}
					</div>
				)}
				<Transition
					show={isClearButtonVisible}
					as={Fragment}
					enter={styles.appInputClearButtonTransitionEnter}
					enterFrom={styles.appInputClearButtonTransitionEnterFrom}
					enterTo={styles.appInputClearButtonTransitionEnterTo}
					leave={styles.appInputClearButtonTransitionLeave}
					leaveFrom={styles.appInputClearButtonTransitionLeaveFrom}
					leaveTo={styles.appInputClearButtonTransitionLeaveTo}
				>
					<div
						className={classNames(styles.appInputClearButton)}
						onClick={clear}
					>
						<XmarkIcon />
					</div>
				</Transition>
			</div>
		</div>
	);
});
