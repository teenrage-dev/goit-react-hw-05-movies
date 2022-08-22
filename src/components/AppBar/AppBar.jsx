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
          <NavLink
            key={href}
            to={href}
            className={css.NavLinkApp}
            style={({ isActive }) =>
              isActive
                ? {
                    color: '#fff',
                    backgroundColor: 'rgba(36, 36, 36, 0.8)',
                  }
                : {
                    backgroundColor: '#f5f5f5',
                    color: '#000',
                  }
            }
          >
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
