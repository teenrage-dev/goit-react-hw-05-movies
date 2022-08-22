import { Outlet } from 'react-router-dom';
import css from './Movies.module.css';

export const Movies = () => {
  return (
    <>
      <div className={css.Movies}>It's Movies</div>
      <Outlet />
    </>
  );
};
