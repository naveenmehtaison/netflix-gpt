import React from 'react'
import { VideoTitle } from './VideoTitle'
import { VideoBackground } from './VideoBackground'
import { useSelector } from 'react-redux'
export const MainContainer = () => {
    const main_movie  = useSelector(state=>state.movie.leadfilm) 
    console.log(main_movie)
    
  return (
    <div>
        <VideoTitle title={main_movie?.original_title} des={main_movie.overview}/>
        <VideoBackground  video={main_movie.id}/>
    </div>
  )
}
