import classNames from 'classnames';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import SortAmountDownIcon from 'shared/assets/icons/sort-amount-down.svg';
import SortAmountUpIcon from 'shared/assets/icons/sort-amount-up.svg';
import { AppButton } from 'shared/ui/AppButton';
import { AppSelect } from 'shared/ui/AppSelect';
import { SortBy, SortOrder } from '../../config';

interface SortArticlesProps {
	className?: string;
	by: SortBy;
	onChangeBy: (newBy: SortBy) => void;
	order: SortOrder;
	onChangeOrder: (newOrder: SortOrder) => void;
}

const sortTypeOptions: { label: string; value: SortBy }[] = [
	{
		label: 'Количеству просмотров',
		value: 'views',
	},
	{
		label: 'Дате создания',
		value: 'createdAt',
	},
];

export const ArticlesViewSort = memo((props: SortArticlesProps) => {
	const {
		className,
		by,
		onChangeBy: setSortBy,
		order,
		onChangeOrder: setSortOrder,
	} = props;

	const { t } = useTranslation('articles');

	const toggleSortOrder = useCallback(() => {
		setSortOrder(order === 'asc' ? 'desc' : 'asc');
	}, [order, setSortOrder]);

	return (
		<div className={classNames(className, 'd-flex items-center')}>
			<AppSelect
				className="mr-sm"
				label={t('Сортировка по')}
				labelPosition="start"
				value={by}
				onChange={setSortBy}
				options={sortTypeOptions}
			/>
			<AppButton
				theme="primary-outline"
				size="sm"
				icon={order === 'asc' ? <SortAmountUpIcon /> : <SortAmountDownIcon />}
				onClick={toggleSortOrder}
			/>
		</div>
	);
});
