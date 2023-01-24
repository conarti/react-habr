import classNames from 'classnames';
import { memo } from 'react';
import styles from './index.module.scss';

interface ArticleBlockImageProps {
	src: string;
	title: string;
}

export const ArticleBlockImage = memo((props: ArticleBlockImageProps) => {
	const {
		src,
		title,
	} = props;

	return (
		<div className={classNames(styles.articleBlockImage)}>
			<img
				className={classNames(styles.articleBlockImageContent)}
				src={src}
				alt={title}
			/>
			<p className={classNames(styles.articleBlockImageTitle)}>
				<i>{title}</i>
			</p>
		</div>
	);
});
