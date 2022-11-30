import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { CommentCard, CommentCardSkeleton } from '../CommentCard';
import { Comment } from '../../config';
import styles from './CommentsList.module.scss';

interface CommentsListProps {
	className?: string;
	comments?: Comment[];
	isLoading?: boolean;
}

export const CommentsList = memo((props: CommentsListProps) => {
	const {
		className,
		comments,
		isLoading,
	} = props;
	const { t } = useTranslation('comments');

	return (
		<div className={classNames(styles.commentsList, className)}>
			{
				isLoading && (
					Array.from({ length: 5 }, (_, index) => <CommentCardSkeleton key={index} />)
				)
			}
			{
				!isLoading && (comments?.length
					? comments.map((comment) => (
						<CommentCard comment={comment} />
					))
					: <p>{t('Комментарии отсутствуют')}</p>)
			}
		</div>
	);
});
