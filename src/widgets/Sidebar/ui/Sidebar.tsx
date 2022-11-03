import classNames from 'classnames';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { links } from '../config';
import cls from './Sidebar.module.scss';
import './Sidebar.variables.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
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
				className={classNames(
					cls.sidebar,
					className,
					{ [cls.expanded]: expanded },
				)}
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
				<div className={classNames(cls.sidebarBtnGroup, cls.sidebarBtnGroupIsBottom)}>
					<ThemeSwitcher className={cls.sidebarBtn} />
					<LangSwitcher className={cls.sidebarBtn} />
				</div>
			</div>
		</>
	);
});
