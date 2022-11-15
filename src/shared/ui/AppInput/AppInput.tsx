import classNames from 'classnames';
import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import { uniqueId } from 'shared/lib/uniqueId/uniqueId';
import cls from './AppInput.module.scss';
import './AppInput.variables.scss';

interface AppInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onInput' | 'readonly'> {
	className?: string;
	label?: string;
	isFill?: boolean;
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
			cls.appInput,
			className,
			{
				[cls.appInputIsFill]: isFill,
				[cls.appInputIsReadonly]: isReadonly,
			},
		)}
		>
			{label && (
				<label htmlFor={id}>
					{label}
				</label>
			)}
			<input
				id={id}
				className={classNames(cls.appInputNative)}
				type={type}
				value={value}
				onInput={onInputHandler}
				readOnly={isReadonly}
				{...otherProps}
			/>
		</div>
	);
});
