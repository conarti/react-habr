import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [expanded, setExpanded] = useState(false);

	const expandedOn = () => {
		setExpanded(true);
	};

	const expandedOff = () => {
		setExpanded(false);
	};

	return (
		<>
			<div className={cls.sidebarPlaceholder} />
			<div
				className={classNames(cls.sidebar, { [cls.expanded]: expanded }, [className])}
				onMouseOver={expandedOn}
				onMouseOut={expandedOff}
				onBlur={expandedOff}
				onFocus={expandedOn}
				data-testid="sidebar"
			>
				<div className={cls.switchers}>
					<ThemeSwitcher className={cls.switcherBtn} />
					<LangSwitcher className={cls.switcherBtn} />
				</div>
			</div>
		</>
	);
};
