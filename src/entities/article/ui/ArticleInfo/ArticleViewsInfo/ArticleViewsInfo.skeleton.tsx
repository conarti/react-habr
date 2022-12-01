import { AppInfoSkeleton } from 'shared/ui/AppInfo/AppInfo.skeleton';

interface ArticleViewsInfoSkeletonProps {
    className?: string;
}

export const ArticleViewsInfoSkeleton = ({ className }: ArticleViewsInfoSkeletonProps) => (
	<AppInfoSkeleton
		className={className}
		width={80}
	/>
);
