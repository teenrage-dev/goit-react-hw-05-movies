import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <div className={css.AppBar}>
      {navItems.map(({ href, text }) => {
        return (
          <NavLink key={href} to={href} className={css.NavLinkApp}>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
