import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppButton } from 'shared/ui/AppButton';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { links } from '../config';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [expanded, setExpanded] = useState(false);
	const { t } = useTranslation();

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
				<div className={cls.sidebarBtnGroup}>
					{
						links.map(({ to, label, icon }) => (
							<AppButton
								className={cls.sidebarBtn}
								to={to}
								icon={icon}
								key={to}
							>
								{t(label)}
							</AppButton>
						))
					}
				</div>
				<div className={`${cls.sidebarBtnGroup} ${cls.sidebarBtnGroupIsBottom}`}>
					<ThemeSwitcher className={cls.sidebarBtn} />
					<LangSwitcher className={cls.sidebarBtn} />
				</div>
			</div>
		</>
	);
};
