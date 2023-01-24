import CalendarDayIcon from 'shared/assets/icons/calendar-day.svg';
import { AppInfo } from 'shared/ui/AppInfo';

export { ArticleCreatedInfoSkeleton } from './index.skeleton';

interface ArticleCreatedInfoProps {
	className?: string;
	value: string;
}

export const ArticleCreatedInfo = (props: ArticleCreatedInfoProps) => {
	const {
		className,
		value,
	} = props;

	return (
		<AppInfo
			className={className}
			title="Дата публикации"
			label={value}
			icon={<CalendarDayIcon />}
		/>
	);
};
