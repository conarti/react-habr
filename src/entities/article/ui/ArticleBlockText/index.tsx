import classNames from 'classnames';
import { memo } from 'react';
import styles from './index.module.scss';

interface ArticleBlockTextProps {
	title?: string;
	paragraphs: string[];
}

export const ArticleBlockText = memo((props: ArticleBlockTextProps) => {
	const {
		title,
		paragraphs,
	} = props;

	return (
		<div className={classNames(styles.articleTextBlock)}>
			{title && <h4 className={classNames(styles.articleBlockTextTitle)}>{title}</h4>}
			{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
		</div>
	);
});
