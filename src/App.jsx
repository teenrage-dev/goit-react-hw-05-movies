import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { Layout } from './components/Layout/Layout';

const Home = lazy(() => import('components/Home/Home'));
const MoviesSearch = lazy(() => import('components/MoviesSearch/MoviesSearch'));
const MoviesDetails = lazy(() =>
  import('components/MoviesDetails/MoviesDetails')
);
const MoviesCast = lazy(() => import('components/MoviesCast/MoviesCast'));
const MoviesReviews = lazy(() =>
  import('components/MoviesReviews/MoviesReviews')
);
const MoviesLayout = lazy(() => import('components/MoviesLayout/MoviesLayout'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />}></Route>
            <Route path="movies" element={<MoviesLayout />}>
              <Route index element={<MoviesSearch />} />
              <Route path=":moviesId" element={<MoviesDetails />}>
                <Route path="cast" element={<MoviesCast />} />
                <Route path="reviews" element={<MoviesReviews />} />
                <Route
                  path="*"
                  element={
                    <div>
                      <h2>Not Found</h2>
                    </div>
                  }
                />
              </Route>

              <Route
                path="*"
                element={
                  <div>
                    <h2>Not Found</h2>
                  </div>
                }
              />
            </Route>
            <Route
              path="*"
              element={
                <div>
                  <h2>Not Found</h2>
                </div>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
