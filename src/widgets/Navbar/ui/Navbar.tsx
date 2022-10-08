import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { links } from '../config';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
	<div className={classNames(cls.navbar, {}, [className])}>
		<div className={classNames(cls.links)}>
			{
				links.map(({ to, label }) => (
					<AppLink
						theme={AppLinkTheme.SECONDARY}
						to={to}
						key={to}
					>
						{label}
					</AppLink>
				))
			}
		</div>
	</div>
);
