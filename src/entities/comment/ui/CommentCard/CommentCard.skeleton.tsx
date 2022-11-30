import classNames from 'classnames';
import { AppCard } from 'shared/ui/AppCard';
import { AppSkeleton } from 'shared/ui/AppSkeleton';
import styles from './CommentCard.module.scss';

export const CommentCardSkeleton = () => (
	<AppCard className={classNames(styles.commentCard)}>
		<>
			<div className={classNames(styles.commentCardHeader)}>
				<AppSkeleton
					width={50}
					height={50}
					borderRadius="circle"
				/>
				<AppSkeleton
					className={classNames('h3')}
					width={110}
				/>
			</div>
			<AppSkeleton width="100%" />
		</>
	</AppCard>
);
