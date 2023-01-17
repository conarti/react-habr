import classNames from 'classnames';
import { Suspense, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { articleModel } from 'entities/article';
import { AddCommentForm, CommentsList } from 'entities/comment';
import { useAppDispatch, useAsyncReducer } from 'shared/lib/hooks';
import { AppLoader } from 'shared/ui/AppLoader';
import {
	articleCommentsReducer,
	getArticleComments,
	getArticleCommentsErrorMessage,
	isArticleCommentsLoading,
} from '../model';
import { fetchCommentsByArticleId } from '../model/services';

interface ArticleCommentsProps {
    className?: string;
		articleId: string;
}

export const ArticleComments = (props: ArticleCommentsProps) => {
	const {
		className,
		articleId,
	} = props;
	const { t } = useTranslation('article-details');
	const dispatch = useAppDispatch();

	useAsyncReducer({ articleComments: articleCommentsReducer }, { removeAfterUnmount: true });

	useEffect(() => {
		dispatch(fetchCommentsByArticleId(articleId));
	}, [articleId, dispatch]);

	const comments = useSelector(getArticleComments.selectAll);
	const isCommentsLoading = useSelector(isArticleCommentsLoading);
	const commentsErrorMessage = useSelector(getArticleCommentsErrorMessage);

	const addComment = useCallback(async (message) => {
		await dispatch(articleModel.addCommentForArticle(message));
		await dispatch(fetchCommentsByArticleId(articleId));
	}, [articleId, dispatch]);

	return (
		<div className={classNames(className)}>
			<h3 className={classNames('h1')}>{t('Комментарии')}</h3>
			{commentsErrorMessage && <h2>{commentsErrorMessage}</h2>}
			{!commentsErrorMessage && (
				<>
					<Suspense fallback={<AppLoader isFill />}>
						<AddCommentForm
							className="mb-md"
							onSendComment={addComment}
						/>
					</Suspense>
					<CommentsList
						isLoading={isCommentsLoading}
						comments={comments}
					/>
				</>
			)}
		</div>
	);
};
