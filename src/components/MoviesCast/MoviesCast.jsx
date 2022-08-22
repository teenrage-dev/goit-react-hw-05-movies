import { getMovieCredits } from 'API/getMovieCredits';
import { imageBaseUrlSmall, imagePlaceholderSmall } from 'API/api';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './MoviesCast.module.css';

export const MoviesCast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();

  useEffect(() => {
    console.log(params);
    async function fetchData() {
      try {
        const data = await getMovieCredits(params.moviesId);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [params]);

  return (
    <div className={css.MoviesCast}>
      {cast.length > 0 ? (
        <ul>
          {cast.map(cast => {
            return (
              <li key={cast.id}>
                <img
                  src={
                    cast.profile_path
                      ? `${imageBaseUrlSmall}${cast.profile_path}`
                      : imagePlaceholderSmall
                  }
                  alt={cast.name}
                />
                <p>{cast.name}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h2>No cast found</h2>
      )}
    </div>
  );
};
