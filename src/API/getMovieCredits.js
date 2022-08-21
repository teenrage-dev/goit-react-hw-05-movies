import { baseUrl, apiKey } from './api';

export const getMovieCredits = async id => {
  const res = await fetch(
    `${baseUrl}movie/${id}/credits?api_key=${apiKey}&language=en-US`
  );
  const data = await res.json();
  return data;
};
