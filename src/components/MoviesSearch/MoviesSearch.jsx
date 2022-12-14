import { useState, useEffect, Suspense } from 'react';
import { DebounceInput } from 'react-debounce-input';

import css from './MovieSearch.module.css';
import { searchMovies } from '../../API/searchMovies';
import { NavLink, useSearchParams } from 'react-router-dom';

const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams({
    query: '',
  });

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    async function fetchByQuery() {
      try {
        const { results } = await searchMovies(searchQuery);
        setMovies(results);
      } catch (error) {}
    }
    fetchByQuery();
  }, [searchQuery]);

  const handleChange = e => {
    const value = e.target.value.toLocaleLowerCase();

    setQuery(value);

    setSearchParams({ query: value });
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="row">
          <DebounceInput
            minLength={1}
            debounceTimeout={500}
            autoFocus
            type="text"
            value={query}
            onChange={handleChange}
          />
        </div>
        {movies ? (
          <ul className="row">
            {movies?.map(movie => (
              <li key={movie.id} className={css.DebounceInput}>
                <NavLink
                  to={`/movies/${movie.id}`}
                  state={{ from: `/movies?query=${searchQuery}` }}
                >
                  {movie.title || movie.name}
                </NavLink>
              </li>
            ))}
          </ul>
        ) : (
          <div>No Such Movies</div>
        )}
      </Suspense>
    </>
  );
};

export default MoviesSearch;
