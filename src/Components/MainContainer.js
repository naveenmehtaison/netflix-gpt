import React from 'react'
import { VideoTitle } from './VideoTitle'
import { VideoBackground } from './VideoBackground'
import { useSelector } from 'react-redux'
import { MovieLists } from '../Components/MovieLists'

export const MainContainer = () => {
    const Selector = useSelector(state=>state.movie.movies)
    const popular_movies = useSelector(state=>state.movie.popularmovie)
    const main_movie  = useSelector(state=>state.movie.leadfilm) 
    const top_rated = useSelector(state=>state.movie.toprated) 
    const upcoming= useSelector(state=>state.movie.upcoming) 
    console.log(popular_movies)

    
  return (
    <div className='bg-black'>
        <VideoTitle title={main_movie?.original_title} des={main_movie.overview}/>
        <VideoBackground  video={main_movie.id}/>
        <MovieLists props={Selector} title={'Now Playing'}/>
        <MovieLists props={popular_movies} title={'Popular'}/>
        <MovieLists props={top_rated} title={'Top Rated'}/>
        <MovieLists props={upcoming} title={'Upcoming'}/>
        <MovieLists/>
    </div>
  )
}
