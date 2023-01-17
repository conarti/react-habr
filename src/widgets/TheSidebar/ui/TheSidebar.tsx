import classNames from 'classnames';
import { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { userModel } from 'entities/user';
import { AppButton } from 'shared/ui/AppButton';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { links } from '../config';
import cls from './TheSidebar.module.scss';
import './TheSidebar.variables.scss';

interface SidebarProps {
    className?: string;
}

export const TheSidebar = memo(({ className }: SidebarProps) => {
	const [expanded, setExpanded] = useState(false);
	const { t } = useTranslation();

	const expandedOn = () => {
		setExpanded(true);
	};

	const expandedOff = () => {
		setExpanded(false);
	};

	const hasAuth = useSelector(userModel.hasAuth);

	const linksElements = useMemo(
		() => links
			.map((link) => {
				const {
					to, label, icon, needAuth,
				} = link;

				if ((needAuth && hasAuth) || !needAuth) {
					return (
						<AppButton
							className={cls.theSidebarBtn}
							to={to}
							icon={icon}
							key={to}
						>
							{t(label)}
						</AppButton>
					);
				}

				return null;
			})
			.filter((linkElement) => linkElement !== null),
		[hasAuth, t],
	);

	return (
		<>
			<div className={cls.theSidebarPlaceholder} />
			<div
				className={classNames(
					cls.theSidebar,
					className,
					{ [cls.expanded]: expanded },
				)}
				onMouseOver={expandedOn}
				onMouseOut={expandedOff}
				onBlur={expandedOff}
				onFocus={expandedOn}
				data-testid="sidebar"
			>
				<div className={cls.theSidebarBtnGroup}>
					{linksElements}
				</div>
				<div className={classNames(cls.theSidebarBtnGroup, cls.theSidebarBtnGroupIsBottom)}>
					<ThemeSwitcher className={cls.theSidebarBtn} />
					<LangSwitcher className={cls.theSidebarBtn} />
				</div>
			</div>
		</>
	);
});
