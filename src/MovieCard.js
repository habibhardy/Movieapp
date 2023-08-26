
import React from 'react'
import movie from './movie.png'
import { Link } from 'react-router-dom';


const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="moviecard">
      <img src={movie} alt={title} className='img' />
       <span>{title}</span>
       <Link to={`/movie/${title}`} className="movie-card-link">
       {posterURL}
        </Link>
       <span  style={{textAlign:'center',justifyContent:'center'}}   >{description}</span>
    Rating: {rating}
    </div>
  )
}

export default MovieCard