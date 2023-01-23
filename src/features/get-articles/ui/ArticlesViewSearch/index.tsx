import classNames from 'classnames';
import { memo } from 'react';
import SearchIcon from 'shared/assets/icons/search.svg';
import { AppInput } from 'shared/ui/AppInput';

interface ArticlesViewSearchProps {
	className?: string;
	value: string;
	onInput: (newValue: string) => void;
}

export const ArticlesViewSearch = memo((props: ArticlesViewSearchProps) => {
	const {
		className,
		value,
		onInput,
	} = props;

	return (
		<AppInput
			className={classNames(className)}
			icon={<SearchIcon />}
			iconPlacement="end"
			placeholder="Введите для поиска..."
			value={value}
			onInput={onInput}
		/>
	);
});
