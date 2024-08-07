import React from 'react'
import { Header } from './Header'
import { useDispatch, useSelector } from 'react-redux'
import UseMovies from '../Hooks/UseMovies'
import { mainmovie } from '../utils/movieslice'
import { MainContainer } from './MainContainer'
import UsePopular from '../Hooks/UsePopular'
import UseTopRated from '../Hooks/UseTopRated'
import UseUpcoming from '../Hooks/UseUpcoming'

import GptPage from './GptPage'


const Browse = () => {
  UseMovies()
  UsePopular()
  UseTopRated()
  UseUpcoming()
  const searchBoolean = useSelector(state=>state.language.boolean)

  const dispatch = useDispatch()
  const movies_data  = useSelector(state=>state.movie.movies)

  if(!movies_data){
    return
  }
  dispatch(mainmovie(movies_data[2]))
  return (
    <>
      <Header />
      {searchBoolean ? (<MainContainer/>):(<GptPage/>)}
 
    </>
 

  )
}

export default Browse