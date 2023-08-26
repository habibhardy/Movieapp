
import React from 'react'
import movie from './movie.png'

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="moviecard">
      <img src={movie} alt={title} className='img' />
       <span>{title}</span>
       <span  style={{textAlign:'center',justifyContent:'center'}}   >{description}</span>
    Rating: {rating}
    </div>
  )
}

export default MovieCard