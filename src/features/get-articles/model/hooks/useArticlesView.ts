import { useCallback, useState } from 'react';
import { LocalStorage } from 'shared/lib/LocalStorage/LocalStorage';
import { ArticleViewType, VIEW_TYPE_LOCAL_STORAGE_KEY } from '../../config';

export const useArticlesView = () => {
	const initialType = LocalStorage.get(VIEW_TYPE_LOCAL_STORAGE_KEY, 'grid');
	const [viewType, setViewTypeInState] = useState<ArticleViewType>(initialType);

	const setViewType = useCallback((newType: ArticleViewType) => {
		LocalStorage.set(VIEW_TYPE_LOCAL_STORAGE_KEY, newType);
		setViewTypeInState(newType);
	}, []);

	return {
		viewType,
		setViewType,
	};
};
