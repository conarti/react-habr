import classNames from 'classnames';
import React, { ChangeEvent, useCallback } from 'react';
import { uniqueId } from 'shared/lib/uniqueId/uniqueId';
import styles from './AppSelect.module.scss';

interface Option {
 [key: string]: any
}

interface AppSelectProps {
	className?: string;
	options: Option[];
	optionLabel?: string;
	optionValue?: string;
	label?: string;
	onSelect: (newValue: string) => void;
}

// TODO: implement with design
export const AppSelect = (props: AppSelectProps) => {
	const {
		className,
		options,
		onSelect,
		label,
		optionValue = 'value',
		optionLabel = 'label',
	} = props;

	const onChange = useCallback((ev: ChangeEvent<HTMLSelectElement>) => {
		onSelect(ev.target.value);
	}, [onSelect]);

	const id = uniqueId();

	return (
		<div className={classNames(styles.appSelect, className)}>
			{label && (
				<label htmlFor={id}>{label}</label>
			)}
			<select
				className={classNames(styles.appSelectNative)}
				onChange={onChange}
				id={id}
			>
				{
					options.map((option) => (
						<option
							key={option[optionValue]}
							value={option[optionValue]}
						>
							{option[optionLabel]}
						</option>
					))
				}
			</select>
		</div>
	);
};
