import classNames from 'classnames';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { AppInfo } from 'shared/ui/AppInfo';
import styles from './ArticleViewsInfo.module.scss';

interface ArticleViewsInfoProps {
	className?: string;
	value: number;
}

export const ArticleViewsInfo = (props: ArticleViewsInfoProps) => {
	const {
		className,
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
