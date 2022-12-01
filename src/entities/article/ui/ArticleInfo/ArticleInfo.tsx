import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './ArticleInfo.module.scss';

interface ArticleInfoProps {
	className?: string;
	title?: string;
	label: string | number;
	icon: ReactNode;
}

export const ArticleInfo = (props: ArticleInfoProps) => {
	const {
		className,
		title,
		label,
		icon,
	} = props;

	return (
		<div
			className={classNames(styles.articleInfo, className)}
			title={title}
		>
			{icon}
			<span>{label}</span>
		</div>
	);
};
