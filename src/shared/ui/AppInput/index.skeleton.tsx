import classNames from 'classnames';
import { AppSkeleton } from 'shared/ui/AppSkeleton';
import styles from './index.module.scss';

interface AppInputSkeletonProps {
	className?: string;
	hasLabel?: boolean;
}

export const AppInputSkeleton = (props: AppInputSkeletonProps) => {
	const {
		className,
		hasLabel = false,
		...otherProps
	} = props;

	return (
		<div className={classNames(
			styles.appInput,
			className,
		)}
		>
			{hasLabel && (
				<AppSkeleton
					height={24}
					width={100}
				/>
			)}
			<AppSkeleton
				height={48}
				color="primary"
				{...otherProps}
			/>
		</div>
	);
};
