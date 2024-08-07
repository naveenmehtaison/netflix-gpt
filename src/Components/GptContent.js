import React from 'react'
import { useSelector} from 'react-redux'
import { MovieLists } from './MovieLists'
const GptContent = () => {
  const tmdbMovies = useSelector((state)=>state.language.gptSearched.tmdbarray)
  const title = useSelector((state)=>state.language.gptSearched.movies)

  return (
    <div className='relative ml-6 mr-6 bg-black opacity-90 mt-96'>
      {tmdbMovies.map((ele,item)=>(
        <div>
          <MovieLists props={ele} title={title[item]}></MovieLists>
        </div>
      ))}
    </div>
  )
}

export default GptContent