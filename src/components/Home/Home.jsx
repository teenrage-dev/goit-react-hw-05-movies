import { useEffect, useState } from 'react';
import { getTrending } from 'API/getTrending';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getTrending();
      setMovies(data.results);
      console.log(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`} state={{ from: '/' }}>
              {movie.title || movie.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
