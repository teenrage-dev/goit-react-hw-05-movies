import { getMovieDetails } from 'API/getMovieDetails';
import { imageBaseUrl, imagePlaceholder } from '../../API/api';

import { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';

import css from './MoviesDetails.module.css';

const MoviesDetails = () => {
  const [error, setError] = useState(null);
  const { moviesId } = useParams();
  const [movie, setMovie] = useState(null);

  const location = useLocation();
  const backToLink = location.state?.from ?? '/';

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMovieDetails(moviesId);
        setMovie(data);
        if (data.success === false) {
          setError(data.status_message);
          setMovie(null);
        }
      } catch (error) {
        console.log(error);
        setError(error);
      }
    }
    fetchData();
  }, [moviesId]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {error && <h2>{error}</h2>}
        {movie && (
          <div>
            <h1>MoviesDetails {moviesId}</h1>
            {console.log(location)}
            <NavLink to={`${backToLink}`}>Go back</NavLink>
            <div className={css.MoviesDetails}>
              <div>
                <img
                  src={
                    movie.poster_path
                      ? `${imageBaseUrl}${movie.poster_path}`
                      : imagePlaceholder
                  }
                  alt={movie.title}
                />
              </div>
              <div>
                <h2>{movie.title}</h2>
                <p>User Score: {Math.round(movie.popularity)}%</p>
                <h3>Overview</h3>
                <p>{movie.overview}</p>
                <h3>Genres</h3>
                <ul>
                  {movie.genres.length > 0
                    ? movie.genres.map(genre => {
                        return <li key={genre.id}>{genre.name}</li>;
                      })
                    : 'No genres'}
                </ul>
              </div>
            </div>
            <div className={css.LinkesBox}>
              <NavLink to={'cast'}>Cast</NavLink>
              <NavLink to={'reviews'}>Reviews</NavLink>
            </div>
          </div>
        )}
        <Outlet />
      </Suspense>
    </>
  );
};

export default MoviesDetails;
