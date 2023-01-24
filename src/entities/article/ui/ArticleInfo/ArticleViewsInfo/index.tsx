import EyeIcon from 'shared/assets/icons/eye.svg';
import { AppInfo } from 'shared/ui/AppInfo';

export { ArticleViewsInfoSkeleton } from './index.skeleton';

interface ArticleViewsInfoProps {
	value: number;
}

export const ArticleViewsInfo = (props: ArticleViewsInfoProps) => {
	const {
		value,
	} = props;

	return (
		<AppInfo
			title="Количество просмотров"
			label={value}
			icon={<EyeIcon />}
		/>
	);
};
