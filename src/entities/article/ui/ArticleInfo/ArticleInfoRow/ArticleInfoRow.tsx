import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './ArticleInfoRow.module.scss';

interface ArticleInfoRowProps {
	className?: string;
  children: ReactNode;
}

export const ArticleInfoRow = (props: ArticleInfoRowProps) => {
	const {
		className,
		children,
	} = props;

	return (
		<div className={classNames(styles.articleInfoRow, className)}>
			{children}
		</div>
	);
};
