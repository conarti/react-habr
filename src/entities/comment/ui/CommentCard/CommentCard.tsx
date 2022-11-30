import classNames from 'classnames';
import { memo } from 'react';
import { AppAvatar } from 'shared/ui/AppAvatar';
import { AppCard } from 'shared/ui/AppCard';
import { Comment } from '../../config';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
		comment: Comment;
}

export const CommentCard = memo((props: CommentCardProps) => {
	const {
		className,
		comment,
	} = props;

	return (
		<AppCard className={classNames(styles.commentCard, className)}>
			<>
				<div className={classNames(styles.commentCardHeader)}>
					<AppAvatar
						size="sm"
						src={comment.user.avatar}
					/>
					<h4 className={classNames('h3')}>{comment.user.username}</h4>
				</div>
				<p>{comment.message}</p>
			</>
		</AppCard>
	);
});
