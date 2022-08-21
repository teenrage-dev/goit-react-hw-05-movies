import { baseUrl, apiKey } from './api';

export const getTrending = async () => {
  const res = await fetch(`${baseUrl}trending/all/day?api_key=${apiKey}`);
  const data = await res.json();
  return data;
};
