---
to: src/<%= layer %>/<%= slice %>/ui/<%= h.changeCase.pascal(componentName) %>/index.tsx
---
import classNames from 'classnames';
import { memo } from 'react';
import styles from './index.module.scss';

interface <%= h.changeCase.pascal(componentName) %>Props {
	className?: string;
}

export const <%= h.changeCase.pascal(componentName) %> = memo((props: <%= h.changeCase.pascal(componentName) %>Props) => {
	const {
		className,
	} = props;

	return (
		<div className={classNames(styles.<%= h.changeCase.camel(componentName) %>, className)}>
			{/* content */}
		</div>
	);
});
