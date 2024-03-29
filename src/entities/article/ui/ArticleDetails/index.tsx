import classNames from 'classnames';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAsyncReducer } from 'shared/lib/hooks';
import { AppCode } from 'shared/ui/AppCode';
import { AppText } from 'shared/ui/AppText';
import { ArticleBlock } from '../../config/types/article';
import { getArticleDetails, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors';
import { fetchArticleByID } from '../../model/services';
import { articleDetailsReducer } from '../../model/store';
import { ArticleBlockImage } from '../ArticleBlockImage';
import { ArticleBlockText } from '../ArticleBlockText';
import { ArticleHeader } from '../ArticleHeader';
import { ArticleDetailsSkeleton } from './index.skeleton';

interface ArticleDetailsProps {
	id: string;
	className?: string;
}

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
	const {
		className,
		id,
	} = props;

	const dispatch = useAppDispatch();
	const articleDetails = useSelector(getArticleDetails);
	const isLoading = useSelector(getArticleDetailsIsLoading);
	const error = useSelector(getArticleDetailsError);

	const makeArticleContentBlock = useCallback((block: ArticleBlock) => {
		switch (block.type) {
		case 'TEXT':
			return (
				<ArticleBlockText
					title={block.title}
					paragraphs={block.paragraphs}
				/>
			);
		case 'CODE':
			return <AppCode content={block.code} />;
		case 'IMAGE':
			return (
				<ArticleBlockImage
					src={block.src}
					title={block.title}
				/>
			);
		default:
			// @ts-ignore
			throw new Error(`block for type ${block.type} is not set`);
		}
	}, []);

	useAsyncReducer({ articleDetails: articleDetailsReducer }, { removeAfterUnmount: true });

	useEffect(() => {
		dispatch(fetchArticleByID(id));
	}, [dispatch, id]);

	return (
		<div className={classNames(className)}>
			{isLoading && <ArticleDetailsSkeleton />}
			{error && <AppText message={error} />}
			{articleDetails && (
				<>
					<ArticleHeader
						img={articleDetails.img}
						title={articleDetails.title}
						createdAt={articleDetails.createdAt}
						views={articleDetails.views}
						subtitle={articleDetails.subtitle}
					/>
					{
						articleDetails.blocks.map((block) => (
							<div
								className="mb-sm"
								key={block.id}
							>
								{makeArticleContentBlock(block)}
							</div>
						))
					}
				</>
			)}
		</div>
	);
});
