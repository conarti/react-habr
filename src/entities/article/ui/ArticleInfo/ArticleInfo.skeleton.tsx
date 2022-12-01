import { AppSkeleton } from 'shared/ui/AppSkeleton';

interface ArticleInfoProps {
    className?: string;
		width?: number
}

export const ArticleInfoSkeleton = (props: ArticleInfoProps) => {
	const {
		className,
		width = 80,
	} = props;

	return (
		<AppSkeleton
			className={className}
			height={24}
			width={width}
		/>
	);
};
