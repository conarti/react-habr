import classNames from 'classnames';
import {
	ChangeEvent,
	InputHTMLAttributes,
	memo,
	ReactElement,
} from 'react';
import { uniqueId } from 'shared/lib/uniqueId/uniqueId';
import styles from './AppInput.module.scss';
import './AppInput.variables.scss';

interface AppInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onInput' | 'readonly' | 'size'> {
	className?: string;
	label?: string;
	isFill?: boolean;
	icon?: ReactElement<any, any>;
	iconPlacement?: 'start' | 'end';
	size?: 'sm' | 'md' | 'lg';
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
			</div>
		</div>
	);
});
