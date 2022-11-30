import classNames from 'classnames';
import { CommentsList } from 'entities/comment';
import { fetchCommentsByArticleId } from 'features/get-article-comments/model/services';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAsyncReducer } from 'shared/lib/hooks';
import {
	articleCommentsReducer,
	getArticleComments,
	getArticleCommentsErrorMessage,
	isArticleCommentsLoading,
} from '../model';

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

	return (
		<div className={classNames(className)}>
			<h3 className={classNames('h1')}>{t('Комментарии')}</h3>
			{commentsErrorMessage && <h2>{commentsErrorMessage}</h2>}
			{!commentsErrorMessage && (
				<CommentsList
					isLoading={isCommentsLoading}
					comments={comments}
				/>
			)}
		</div>
	);
};
