---
to: src/shared/ui/<%= h.changeCase.pascal(componentName) %>/index.tsx
---
<%
 componentNamePascal = h.changeCase.pascal(componentName)
%>
import classNames from 'classnames';
import { memo } from 'react';
import styles from './index.module.scss';

interface <%= componentNamePascal %>Props {
	className?: string;
}

export const <%= componentNamePascal %> = memo((props: <%= componentNamePascal %>Props) => {
	const {
		className,
	} = props;

	return (
		<div className={classNames(styles.<%= h.changeCase.camel(componentName) %>, className)}>
			{/* content */}
		</div>
	);
});
