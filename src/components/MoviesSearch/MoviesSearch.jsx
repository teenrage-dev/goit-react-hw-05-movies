import { useState, useEffect } from 'react';
import { DebounceInput } from 'react-debounce-input';

import css from './MovieSearch.module.css';
import { searchMovies } from '../../API/searchMovies';
import {
  NavLink,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

export const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams);
  console.log(location);

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchByQuery() {
      try {
        const { results } = await searchMovies(query);
        setMovies(results);
        console.log(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchByQuery();
  }, [query]);

  const handleChange = e => {
    const value = e.target.value.toLocaleLowerCase();

    setQuery(value);

    setSearchParams(value);
    console.log(query, value);
  };

  return (
    <>
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
      <ul className="row">
        {movies.map(movie => (
          <li key={movie.id} className={css.DebounceInput}>
            <NavLink
              to={`/movies/${movie.id}`}
              state={{ from: `/movies?query=${query}` }}
            >
              {movie.title || movie.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
