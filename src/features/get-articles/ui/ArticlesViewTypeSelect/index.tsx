import classNames from 'classnames';
import { memo, useCallback } from 'react';
import { AppButton } from 'shared/ui/AppButton';
import { selectViewButtons, ArticleViewType } from '../../config';
import styles from './index.module.scss';

interface ArticlesViewTypeSelectProps {
	className?: string;
	viewType: ArticleViewType;
	onChangeViewType: (value: ArticleViewType) => void;
}

export const ArticlesViewTypeSelect = memo((props: ArticlesViewTypeSelectProps) => {
	const {
		className,
		viewType,
		onChangeViewType,
	} = props;

	const onSelect = useCallback((newType: ArticleViewType) => () => onChangeViewType(newType), [onChangeViewType]);

	return (
		<div className={classNames(styles.articlesViewTypeSelect, className)}>
			{selectViewButtons.map(({ icon, type }) => (
				<AppButton
					key={type}
					theme={viewType === type ? 'primary' : 'clear'}
					icon={icon}
					onClick={onSelect(type)}
				/>
			))}
		</div>
	);
});
