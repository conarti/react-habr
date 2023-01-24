import classNames from 'classnames';
import { memo } from 'react';
import { AppImage } from 'shared/ui/AppImage';
import { ArticleInfo } from '../ArticleInfo';
import styles from './index.module.scss';

interface ArticleHeaderProps {
	className?: string;
	img: string;
	title: string;
	subtitle: string;
	createdAt: string;
	views: number;
}

export const ArticleHeader = memo((props: ArticleHeaderProps) => {
	const {
		className,
		img,
		createdAt,
		views,
		subtitle,
		title,
	} = props;

	return (
		<div className={classNames(styles.articleHeader, className)}>
			<AppImage
				width="100%"
				height="500px"
				src={img}
				alt="article"
			/>
			<div className={classNames(styles.articleHeaderGradient)} />
			<div className={classNames(styles.articleHeaderInfo)}>
				<div>
					<h1>{title}</h1>
					<h2 className="m-none">{subtitle}</h2>
				</div>
				<ArticleInfo.Row>
					<ArticleInfo.Created value={createdAt} />
					<ArticleInfo.Views value={views} />
				</ArticleInfo.Row>
			</div>
		</div>
	);
});
