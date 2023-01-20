import classNames from 'classnames';
import { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { userModel } from 'entities/user';
import { AppButton } from 'shared/ui/AppButton';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { links } from '../config';
import styles from './TheSidebar.module.scss';
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
							className={styles.theSidebarBtn}
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
			<div className={styles.theSidebarPlaceholder} />
			<div
				className={classNames(
					styles.theSidebar,
					className,
					{ [styles.expanded]: expanded },
				)}
				onMouseOver={expandedOn}
				onMouseOut={expandedOff}
				onBlur={expandedOff}
				onFocus={expandedOn}
				data-testid="sidebar"
			>
				<div className={styles.theSidebarBtnGroup}>
					{linksElements}
				</div>
				<div className={classNames(styles.theSidebarBtnGroup, styles.theSidebarBtnGroupIsBottom)}>
					<ThemeSwitcher className={styles.theSidebarBtn} />
					<LangSwitcher className={styles.theSidebarBtn} />
				</div>
			</div>
		</>
	);
});
