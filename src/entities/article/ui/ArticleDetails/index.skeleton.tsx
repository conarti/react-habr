import { memo } from 'react';
import { AppSkeleton } from 'shared/ui/AppSkeleton';

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
			<AppSkeleton
				className="mb-sm"
				width="100%"
				height="500px"
			/>

			{
				contentBlocks.map(({ key, height, color }) => (
					<AppSkeleton
						className="mb-sm"
						width="100%"
						key={key}
						height={height}
						color={color}
					/>
				))
			}
		</>
	);
});
