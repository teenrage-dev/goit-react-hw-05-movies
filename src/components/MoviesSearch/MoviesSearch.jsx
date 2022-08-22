import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { searchMovies } from '../../API/searchMovies';

export const MoviesSearch = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

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
  return (
    <>
      <Outlet />
      <div className="row">
        <div className="col-md-12">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for..."
              aria-label="Search for..."
              aria-describedby="basic-addon2"
              onChange={e => setQuery(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => setQuery('')}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {movies.map(movie => (
          <div className="col-md-3" key={movie.id}>
            {/* <Movie movie={movie} /> */}Movie
          </div>
        ))}
      </div>
    </>
  );
};
