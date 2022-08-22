import css from './MoviesReviews.module.css';

import { getMovieReviews } from 'API/getMovieReviews';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MoviesReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    console.log(moviesId);
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

  console.log(reviews);
  return (
    <div>
      <h1>Movies Reviews</h1>
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
    </div>
  );
};
