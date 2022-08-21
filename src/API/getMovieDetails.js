import { baseUrl, apiKey } from './api';

export const getMovieDetails = async id => {
  const res = await fetch(
    `${baseUrl}movie/${id}?api_key=${apiKey}&language=en-US`
  );
  const data = await res.json();
  return data;
};
