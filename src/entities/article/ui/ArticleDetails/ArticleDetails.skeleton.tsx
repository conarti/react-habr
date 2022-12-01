import { memo } from 'react';
import classNames from 'classnames';
import { AppSkeleton } from 'shared/ui/AppSkeleton';
import styles from './ArticleDetails.module.scss';

export const ArticleDetailsSkeleton = memo(() => {
	const contentBlocks: { key: number, height: number | string, color?: 'primary' }[] = [
		{
			key: 1,
			height: 100,
		},
		{
			key: 2,
			height: 300,
			color: 'primary',
		},
		{
			key: 3,
			height: 200,
		},
	];

	return (
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
				<AppSkeleton
					width={120}
					height={24}
				/>

				<AppSkeleton
					width={80}
					height={24}
				/>
			</div>

			{
				contentBlocks.map((props) => (
					<AppSkeleton
						className="mb-sm"
						width="100%"
						{...props}
					/>
				))
			}
		</>
	);
});
