import { AppSkeleton } from 'shared/ui/AppSkeleton';

interface AppInfoProps {
	className?: string;
	width?: number
}

export const AppInfoSkeleton = (props: AppInfoProps) => {
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
