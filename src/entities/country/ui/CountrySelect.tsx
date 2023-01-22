import classNames from 'classnames';
import { AppSelect } from 'shared/ui/AppSelect';
import { Countries } from '../config';

interface CountrySelectProps {
	className?: string;
	label?: string;
	disabled?: boolean;
	value: string;
	onSelect: (newValue: string) => void;
}

const countryOptions = [
	{
		label: 'Russia',
		value: Countries.RU,
	},
	{
		label: 'USA',
		value: Countries.US,
	},
];

export const CountrySelect = (props: CountrySelectProps) => {
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
			options={countryOptions}
			disabled={disabled}
			value={value}
			onChange={onSelect}
		/>
	);
};
