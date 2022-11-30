import { memo } from 'react';
import classNames from 'classnames';
import { AppSkeleton } from 'shared/ui/AppSkeleton';
import styles from './ArticleDetails.module.scss';

export const ArticleDetailsSkeleton = memo(() => (
	<>
		<AppSkeleton className={classNames(styles.articleDetailsImage)} />

		<AppSkeleton
			className={classNames('h1')}
			height={40}
			width="60%"
		/>

		<AppSkeleton
			className={classNames('h2')}
			height={32}
			width="30%"
		/>

		<div className={classNames(styles.articleDetailsInfoBlock)}>
			<div className={classNames(styles.articleDetailsInfoBlockColumn)}>
				<AppSkeleton
					width={120}
					height={24}
				/>
			</div>

			<div className={classNames(styles.articleDetailsInfoBlockColumn)}>
				<AppSkeleton
					width={80}
					height={24}
				/>
			</div>
		</div>

		<AppSkeleton
			className={classNames(styles.articleDetailsContentBlock)}
			width="100%"
			height={100}
		/>

		<AppSkeleton
			className={classNames(styles.articleDetailsContentBlock)}
			width="100%"
			color="primary"
			height={300}
		/>

		<AppSkeleton
			className={classNames(styles.articleDetailsContentBlock)}
			width="100%"
			height={200}
		/>
	</>
));
