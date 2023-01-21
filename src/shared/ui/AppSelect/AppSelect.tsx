import { Listbox, Transition } from '@headlessui/react';
import classNames from 'classnames';
import React, { Fragment } from 'react';
import { AppButton, AppButtonTheme } from 'shared/ui/AppButton';
import styles from './AppSelect.module.scss';
import './AppSelect.variables.scss';

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
	optionsPlacement?: 'top' | 'bottom'; // TODO: auto
}

export const AppSelect = (props: AppSelectProps) => {
	const {
		className,
		options,
		value,
		onChange,
		label,
		disabled = false,
		optionsPlacement = 'bottom',
		optionValue = 'value',
		optionLabel = 'label',
	} = props;

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
							theme={AppButtonTheme.CLEAR}
							disabled={disabled}
							isFill
						>
							{value}
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
						<Listbox.Options className={classNames(
							styles.appSelectOptions,
							{
								[styles.appSelectOptionsIsPlacementTop]: optionsPlacement === 'top',
								[styles.appSelectOptionsIsPlacementBottom]: optionsPlacement === 'bottom',
							},
						)}
						>
							{
								options.map((option) => (
									<Listbox.Option
										key={option[optionValue]}
										value={option[optionValue]}
										as={Fragment}
									>
										<AppButton theme={AppButtonTheme.CLEAR}>
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
