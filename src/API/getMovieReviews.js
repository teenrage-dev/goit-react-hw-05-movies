import { baseUrl, apiKey } from './api';

export const getMovieReviews = async id => {
  const res = await fetch(
    `${baseUrl}movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`
  );
  const data = await res.json();
  return data;
};
