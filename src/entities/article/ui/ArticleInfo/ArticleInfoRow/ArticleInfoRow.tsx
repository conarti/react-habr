import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './ArticleInfoRow.module.scss';

interface ArticleInfoRowProps {
	className?: string;
  children: ReactNode;
	justify?: 'start' | 'end' | 'center' | 'between'
}

export const ArticleInfoRow = (props: ArticleInfoRowProps) => {
	const {
		className,
		children,
		justify = 'start',
	} = props;

	return (
		<div className={classNames(
			styles.articleInfoRow,
			className,
			{
				[styles.isJustifyStart]: justify === 'start',
				[styles.isJustifyCenter]: justify === 'center',
				[styles.isJustifyEnd]: justify === 'end',
				[styles.isJustifyBetween]: justify === 'between',
			},
		)}
		>
			{children}
		</div>
	);
};
