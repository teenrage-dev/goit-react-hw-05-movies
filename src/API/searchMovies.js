import { baseUrl, apiKey } from './api';

export const searchMovies = async query => {
  const res = await fetch(
    `${baseUrl}search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1`
  );
  const data = await res.json();
  return data;
};
