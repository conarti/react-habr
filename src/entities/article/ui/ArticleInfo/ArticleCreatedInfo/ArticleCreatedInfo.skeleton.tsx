import { AppInfoSkeleton } from 'shared/ui/AppInfo/AppInfo.skeleton';

interface ArticleCreatedInfoSkeletonProps {
    className?: string;
}

export const ArticleCreatedInfoSkeleton = ({ className }: ArticleCreatedInfoSkeletonProps) => (
	<AppInfoSkeleton
		className={className}
		width={120}
	/>
);
