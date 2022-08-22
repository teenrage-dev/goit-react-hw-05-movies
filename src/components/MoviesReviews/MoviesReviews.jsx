import css from './MoviesReviews.module.css';

import { getMovieReviews } from 'API/getMovieReviews';
import { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MoviesReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getMovieReviews(Number(moviesId));
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [moviesId]);

  return (
    <div>
      <h1>Movies Reviews</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <ul>
          {reviews.length > 0 ? (
            reviews.map(review => {
              return (
                <li key={review.id}>
                  <h2 className={css.ReviewsTitle}>Author: {review.author}</h2>
                  <p className={css.ReviewsText}>{review.content}</p>
                </li>
              );
            })
          ) : (
            <li>No reviews</li>
          )}
        </ul>
      </Suspense>
    </div>
  );
};

export default MoviesReviews;
