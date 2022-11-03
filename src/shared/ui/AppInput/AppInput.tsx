import classNames from 'classnames';
import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import { uniqueId } from 'shared/lib/uniqueId/uniqueId';
import cls from './AppInput.module.scss';
import './AppInput.variables.scss';

interface AppInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onInput'>{
    className?: string;
		label?: string;
		isFill?: boolean;
		value: string;
		onInput: (value: string) => void;
}

export const AppInput = memo((props: AppInputProps) => {
	const {
		className,
		label,
		value,
		onInput,
		id = uniqueId(),
		isFill = false,
		type = 'text',
		...otherProps
	} = props;

	const onInputHandler = (ev: ChangeEvent<HTMLInputElement>) => {
		onInput(ev.target.value);
	};

	return (
		<div className={classNames(cls.appInput, className, { [cls.appInputIsFill]: isFill })}>
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
				{...otherProps}
			/>
		</div>
	);
});
