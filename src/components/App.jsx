// import { getMovieCredits } from 'API/getMovieCredits';
// import { getMovieDetails } from 'API/getMovieDetails';
// import { getMovieReviews } from 'API/getMovieReviews';
// import { getTrending } from 'API/getTrending';
// import { searchMovies } from 'API/searchMovies';
// import { useEffect, useMemo, useState } from 'react';
// import { DebounceInput } from 'react-debounce-input';
import { Routes, Route } from 'react-router-dom';
import { Home } from './Home/Home';
// import { imageBaseUrl } from '../API/api';
import { Layout } from './Layout/Layout';
import { Movies } from '../pages/Movies/Movies';
import { MoviesSearch } from './MoviesSearch/MoviesSearch';
import { MoviesDetails } from './MoviesDetails/MoviesDetails';
import { MoviesCast } from './MoviesCast/MoviesCast';
import { MoviesReviews } from './MoviesReviews/MoviesReviews';

export const App = () => {
  // const [movies, setMovies] = useState([]);
  // const [query, setQuery] = useState('');

  // useEffect(() => {
  //   if (query === '') {
  //     return;
  //   }

  //   async function fetchByQuery() {
  //     try {
  //       const { results } = await searchMovies(query);
  //       setMovies(results);
  //       console.log(results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   fetchByQuery();
  // }, [query]);

  // useMemo(() => {
  //   async function fetchData() {
  //     const data = await getMovieDetails('496450');
  //     console.log(data);
  //   }

  //   fetchData();
  // }, []);

  // useMemo(() => {
  //   async function fetchData() {
  //     const data = await getMovieCredits('496450');
  //     console.log(data);
  //   }

  //   fetchData();
  // }, []);

  // useMemo(() => {
  //   async function fetchData() {
  //     const data = await getMovieReviews('496450');
  //     console.log(data);
  //   }

  //   fetchData();
  // }, []);

  // useMemo(() => {
  //   async function fetchData() {
  //     const data = await getTrending();
  //     setTrending(data.results);
  //     console.log(data);
  //   }

  //   fetchData();
  // }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />}></Route>
          <Route path="movies" element={<MoviesSearch />}>
            <Route index element={<Movies />} />
            <Route path=":moviesId" element={<MoviesDetails />}>
              <Route path="cast" element={<MoviesCast />} />
              <Route path="reviews" element={<MoviesReviews />} />
            </Route>
          </Route>
        </Route>
        {/* <AppBar />
        <DebounceInput
          minLength={1}
          debounceTimeout={500}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value.toLocaleLowerCase())}
        />
        <ul>
          {movies.length > 0 &&
            movies.map(item => (
              <li key={item.id}>
                <img
                  src={`${imageBaseUrl}${item.poster_path}`}
                  alt={item.title}
                />
                <span>{item.title}</span>
              </li>
            ))}
        </ul>
        <h2></h2> */}
      </Routes>
    </>
  );
};

//
// / - Home
// /movies - Movies
//  - /movies/:movieId - Movie Details
//    - /movies/:movieId/cast - Cast
//    - /movies/:movieId/reviews - Reviews
