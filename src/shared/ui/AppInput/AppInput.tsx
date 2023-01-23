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

interface AppInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onInput' | 'readonly'> {
	className?: string;
	label?: string;
	isFill?: boolean;
	icon?: ReactElement<any, any>;
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
			},
		)}
		>
			{icon && (
				<div className={classNames(styles.appInputIcon)}>
					{icon}
				</div>
			)}
			{label && (
				<label htmlFor={id}>
					{label}
				</label>
			)}
			<input
				id={id}
				className={classNames(styles.appInputNative)}
				type={type}
				value={value}
				onInput={onInputHandler}
				readOnly={isReadonly}
				{...otherProps}
			/>
		</div>
	);
});
