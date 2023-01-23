import { ReactElement } from 'react';
import { AppSkeleton } from 'shared/ui/AppSkeleton';
import { ArticleViewType } from '../config';

export const makeArticleSkeletons = (count: number, viewType: ArticleViewType): ReactElement[] => {
	const componentsMapper: Record<ArticleViewType, (key: number | string) => ReactElement> = {
		grid: (key) => (
			<AppSkeleton
				height={333}
				key={key}
			/>
		),
		list: (key) => (
			<AppSkeleton
				height={708}
				key={key}
			/>
		),
	};

	if (!componentsMapper[viewType]) {
		throw new Error(`no skeleton components set for viewType "${viewType}"`);
	}

	return Array.from({ length: count }, (_, index) => componentsMapper[viewType](index));
};
