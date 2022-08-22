import { getMovieCredits } from 'API/getMovieCredits';
import { imageBaseUrlSmall, imagePlaceholderSmall } from 'API/api';

import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import css from './MoviesCast.module.css';

const MoviesCast = () => {
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
      <Suspense fallback={<div>Loading...</div>}>
        {cast.length > 0 ? (
          <ul>
            {cast.map(({ id, profile_path, name, character }) => {
              // console.log(cast);
              return (
                <li key={id}>
                  <img
                    src={
                      profile_path
                        ? `${imageBaseUrlSmall}${profile_path}`
                        : imagePlaceholderSmall
                    }
                    alt={name}
                  />
                  <p>{name}</p>
                  <p>{character}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <h2>No cast found</h2>
        )}
      </Suspense>
    </div>
  );
};

export default MoviesCast;
