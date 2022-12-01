import classNames from 'classnames';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch, useAsyncReducer } from 'shared/lib/hooks';
import { useSelector } from 'react-redux';
import { AppInfo } from 'shared/ui/AppInfo';
import { AppText } from 'shared/ui/AppText';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarDayIcon from 'shared/assets/icons/calendar-day.svg';
import { ArticleBlock } from 'entities/article/config/types/article';
import { AppCode } from 'shared/ui/AppCode';
import { ArticleBlockText } from '../ArticleBlockText';
import { ArticleBlockImage } from '../ArticleBlockImage';
import { getArticleDetails, getArticleDetailsError, getArticleDetailsIsLoading } from '../../model/selectors';
import { fetchArticleByID } from '../../model/services';
import { articleDetailsReducer } from '../../model/store';
import { ArticleDetailsSkeleton } from './ArticleDetails.skeleton';
import styles from './ArticleDetails.module.scss';

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
					<img
						className={classNames(styles.articleDetailsImage)}
						src={articleDetails.img}
						alt="article"
					/>
					<h1>{articleDetails.title}</h1>
					<h2>{articleDetails.subtitle}</h2>
					<div className={classNames(styles.articleDetailsInfoBlock)}>
						<AppInfo
							title="Дата публикации"
							label={articleDetails.createdAt}
							icon={<CalendarDayIcon />}
						/>

						<AppInfo
							title="Количество просмотров"
							label={articleDetails.views}
							icon={<EyeIcon />}
						/>
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
