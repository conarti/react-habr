import classNames from 'classnames';
import FileCopyIcon from 'shared/assets/icons/file-copy.svg';
import CodeIcon from 'shared/assets/icons/code.svg';
import { useCallback } from 'react';
import { AppButton, AppButtonSize } from '../AppButton';
import styles from './AppCode.module.scss';

interface AppCodeProps {
    className?: string;
		content: string;
}

export const AppCode = (props: AppCodeProps) => {
	const {
		className,
		content,
	} = props;

	const copy = useCallback(() => {
		navigator.clipboard.writeText(content);
	}, [content]);

	return (
		<pre className={classNames(styles.appCode, className)}>
			<div className={classNames(styles.appCodeHeader)}>
				<CodeIcon />
				<AppButton
					className={classNames(styles.appCodeCopyBtn)}
					size={AppButtonSize.SM}
					icon={<FileCopyIcon />}
					onClick={copy}
				/>
			</div>
			<code>
				{content.trim()}
			</code>
		</pre>
	);
};
