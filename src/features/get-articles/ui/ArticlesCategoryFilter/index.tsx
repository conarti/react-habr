import classNames from 'classnames';
import { memo, useCallback } from 'react';
import { articleConfig } from 'entities/article';
import { AppButton } from 'shared/ui/AppButton';

interface ArticlesCategoryFilterProps {
	className?: string;
	value: articleConfig.ArticleCategory | undefined;
	onChange: (newValue: articleConfig.ArticleCategory | undefined) => void;
}

const articleCategories: { label: string; value: articleConfig.ArticleCategory | undefined }[] = [
	{
		label: 'Все',
		value: undefined,
	},
	{
		label: 'IT',
		value: 'IT',
	},
	{
		label: 'Экономика',
		value: 'ECONOMICS',
	},
	{
		label: 'Наука',
		value: 'SCIENCE',
	},
];

export const ArticlesCategoryFilter = memo((props: ArticlesCategoryFilterProps) => {
	const {
		className,
		value,
		onChange: setValue,
	} = props;

	const setCategory = useCallback((newValue) => {
		if (newValue === value) {
			return;
		}

		setValue(newValue);
	}, [setValue, value]);

	return (
		<div className={classNames(className, 'd-inline-grid row gap-sm')}>
			{articleCategories.map((category) => (
				<AppButton
					size="sm"
					key={category.label}
					theme={category.value === value ? 'primary' : 'primary-outline'}
					onClick={() => setCategory(category.value)}
				>
					{category.label}
				</AppButton>
			))}
		</div>
	);
});
