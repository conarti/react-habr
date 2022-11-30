import classNames from 'classnames';
import { AppRoutes } from 'pages';
import { memo } from 'react';
import { AppAvatar } from 'shared/ui/AppAvatar';
import { AppCard } from 'shared/ui/AppCard';
import { AppLink } from 'shared/ui/AppLink';
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
				<AppLink
					className={classNames(styles.commentCardHeader)}
					to={`${AppRoutes.PROFILE}/${comment.user.id}`}
				>
					<AppAvatar
						size="sm"
						src={comment.user.avatar}
					/>
					<span className={classNames(styles.commentCardUsername)}>{comment.user.username}</span>
				</AppLink>
				<p>{comment.message}</p>
			</>
		</AppCard>
	);
});
