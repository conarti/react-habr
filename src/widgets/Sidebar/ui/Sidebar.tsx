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

	let timeout: ReturnType<typeof setTimeout> = null;

	const collapsedOff = () => {
		timeout = setTimeout(() => {
			setCollapsed(false);
		}, 300);
	};

	const collapsedOn = () => {
		clearTimeout(timeout);
		setCollapsed(true);
	};

	return (
		<div
			className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
			onMouseOver={collapsedOff}
			onMouseOut={collapsedOn}
			onBlur={collapsedOff}
			onFocus={collapsedOn}
		>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.langSwitcher} />
			</div>
		</div>
	);
};
