import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const links = [
        {
            to: '/',
            label: 'Main',
        },
        {
            to: '/about',
            label: 'About',
        },
    ];

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                {
                    links.map(({ to, label }) => (
                        <AppLink
                            className={classNames(cls.link)}
                            theme={AppLinkTheme.SECONDARY}
                            to={to}
                        >
                            {label}
                        </AppLink>
                    ))
                }
            </div>
        </div>
    );
};
