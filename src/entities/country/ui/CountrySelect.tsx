import classNames from 'classnames';
import { AppSelect } from 'shared/ui/AppSelect';
import { Countries } from '../config';

interface CountrySelectProps {
	className?: string;
	label?: string;
	onSelect: (newValue: string) => void;
}

const countryOptions = [
	{
		label: Countries.RU,
		value: Countries.RU,
	},
	{
		label: Countries.US,
		value: Countries.US,
	},
];

export const CountrySelect = (props: CountrySelectProps) => {
	const { className, label, onSelect } = props;

	return (
		<AppSelect
			className={classNames(className)}
			label={label}
			options={countryOptions}
			onSelect={onSelect}
		/>
	);
};
