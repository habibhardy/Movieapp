import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find(movie => movie.title === title);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-description">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <iframe title="Movie Trailer" width="560" height="315" src={movie.posterURL}></iframe>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default MovieDescription;