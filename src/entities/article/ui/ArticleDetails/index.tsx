import classNames from 'classnames';
import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAsyncReducer } from 'shared/lib/hooks';
import { AppCode } from 'shared/ui/AppCode';
import { AppImage } from 'shared/ui/AppImage';
import { AppText } from 'shared/ui/AppText';
import { ArticleBlock } from '../../config/types/article';
import { getArticleDetails, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors';
import { fetchArticleByID } from '../../model/services';
import { articleDetailsReducer } from '../../model/store';
import { ArticleBlockImage } from '../ArticleBlockImage';
import { ArticleBlockText } from '../ArticleBlockText';
import { ArticleInfo } from '../ArticleInfo';
import styles from './index.module.scss';
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
		<div className={classNames(styles.articleDetails, className)}>
			{isLoading && <ArticleDetailsSkeleton />}
			{error && <AppText message={error} />}
			{articleDetails && (
				<>
					<div className={classNames(styles.articleDetailsHeader)}>
						<AppImage
							className="mb-sm"
							width="100%"
							height="500px"
							src={articleDetails.img}
							alt="article"
						/>
						<div className={classNames(styles.articleDetailsHeaderGradient)} />
						<div className={classNames(styles.articleDetailsHeaderInfo)}>
							<div>
								<h1>{articleDetails.title}</h1>
								<h2>{articleDetails.subtitle}</h2>
							</div>
							<ArticleInfo.Row className="mb-md">
								<ArticleInfo.Created value={articleDetails.createdAt} />
								<ArticleInfo.Views value={articleDetails.views} />
							</ArticleInfo.Row>
						</div>
					</div>
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
