import React, { useEffect } from 'react'
import { Header } from './Header'
import { useDispatch, useSelector } from 'react-redux'
import UseMovies from '../Hooks/UseMovies'
import { mainmovie } from '../utils/movieslice'
import { MainContainer } from './MainContainer'


const Browse = () => {
  UseMovies()
  const dispatch = useDispatch()
  const movies_data  = useSelector(state=>state.movie.movies)
  console.log('dispatch check ',movies_data)
  if(!movies_data.length){
    return
  }
 
  dispatch(mainmovie(movies_data[0]))
  

  
  return (
    <>
      <Header />
      <MainContainer/>
    </>
 

  )
}

export default Browse