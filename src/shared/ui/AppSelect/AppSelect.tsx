import { flip, offset, useFloating } from '@floating-ui/react-dom';
import { Listbox, Transition } from '@headlessui/react';
import classNames from 'classnames';
import React, { Fragment, useMemo } from 'react';
import { AppButton } from 'shared/ui/AppButton';
import styles from './AppSelect.module.scss';

interface Option {
 [key: string]: any
}

interface AppSelectProps {
	className?: string;
	options: Option[];
	value: string;
	onChange: (newValue: string) => void;
	optionLabel?: string;
	optionValue?: string;
	label?: string;
	disabled?: boolean;
}

export const AppSelect = (props: AppSelectProps) => {
	const {
		className,
		options,
		value,
		onChange,
		label,
		disabled = false,
		optionValue = 'value',
		optionLabel = 'label',
	} = props;

	const { y, reference, floating } = useFloating({
		middleware: [flip(), offset(5)],
	});

	const selectedValueLabel = useMemo(() => options.find((option) => option[optionValue] === value)?.[optionLabel], [optionLabel, optionValue, options, value]);

	return (
		<div className={classNames(styles.appSelect, className)}>
			<Listbox
				value={value}
				onChange={onChange}
				disabled={disabled}
			>
				{label && (
					<Listbox.Label>
						{label}
					</Listbox.Label>
				)}

				<div className={classNames(styles.appSelectOptionsContainer)}>
					<Listbox.Button as={Fragment}>
						<AppButton
							theme="clear"
							disabled={disabled}
							isFill
							ref={reference}
						>
							{selectedValueLabel}
						</AppButton>
					</Listbox.Button>

					<Transition
						as={Fragment}
						leave={styles.optionsTransitionLeave}
						leaveFrom={styles.optionsTransitionLeaveFrom}
						leaveTo={styles.optionsTransitionLeaveTo}
						enter={styles.optionsTransitionEnter}
						enterFrom={styles.optionsTransitionEnterFrom}
						enterTo={styles.optionsTransitionEnterTo}
					>
						<Listbox.Options
							className={classNames(styles.appSelectOptions)}
							ref={floating}
							style={{
								top: y ?? 0,
								left: 0,
							}}
						>
							{
								options.map((option) => (
									<Listbox.Option
										key={option[optionValue]}
										value={option[optionValue]}
										as={Fragment}
									>
										<AppButton theme="clear">
											{option[optionLabel]}
										</AppButton>
									</Listbox.Option>
								))
							}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
};
