import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const MoviesLayout = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MoviesLayout;
