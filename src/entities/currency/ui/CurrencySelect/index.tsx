import classNames from 'classnames';
import { memo } from 'react';
import { AppSelect } from 'shared/ui/AppSelect';
import { Currencies } from '../../config/constants';

interface CurrencySelectProps {
	className?: string;
	label?: string;
	disabled?: boolean;
	value: string;
	onSelect: (value: any) => void;
}

const currencyOptions = [
	{
		label: Currencies.RUB,
		value: Currencies.RUB,
	},
	{
		label: Currencies.EUR,
		value: Currencies.EUR,
	},
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
	const {
		className,
		label,
		disabled,
		value,
		onSelect,
	} = props;

	return (
		<AppSelect
			className={classNames(className)}
			label={label}
			options={currencyOptions}
			disabled={disabled}
			value={value}
			onChange={onSelect}
		/>
	);
});
