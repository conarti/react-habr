---
to: src/<%= layer %>/<%= slice %>/ui/<%= h.changeCase.pascal(slice) %>/index.tsx
---
import classNames from 'classnames';
import { memo } from 'react';
import styles from './index.module.scss';

interface <%= h.changeCase.pascal(slice) %>Props {
	className?: string;
}

export const <%= h.changeCase.pascal(slice) %> = memo((props: <%= h.changeCase.pascal(slice) %>Props) => {
	const {
		className,
	} = props;

	return (
		<div className={classNames(styles.<%= h.changeCase.camel(slice) %>, className)}>
			{/* content */}
		</div>
	);
});
