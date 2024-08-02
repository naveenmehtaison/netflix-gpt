import React from 'react'

const MoviePoster = ({props}) => {
  return (
    <div className='w-36 md:w-48 pr-4 '>
        <img alt='posters' src={`https://image.tmdb.org/t/p/w500/${props}`}></img>
    </div>
  )
}

export default MoviePoster