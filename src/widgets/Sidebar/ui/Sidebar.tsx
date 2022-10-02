import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(true);

	const collapsedOff = () => {
		setCollapsed(false);
	};

	const collapsedOn = () => {
		setCollapsed(true);
	};

	return (
		<div
			className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
			onMouseOver={collapsedOff}
			onMouseOut={collapsedOn}
			onBlur={collapsedOff}
			onFocus={collapsedOn}
			data-testid="sidebar"
		>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.langSwitcher} />
			</div>
		</div>
	);
};
