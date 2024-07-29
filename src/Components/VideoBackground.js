import React from 'react'
import UseVideos from '../Hooks/UseVideos'
import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { addvideo } from '../utils/movieslice'
export const VideoBackground = ({video}) => {
  UseVideos(video)
  const Selector = useSelector(state=>state.movie?.videodata)

  return (

      <iframe className='aspect-video  w-screen ' src={"https://www.youtube.com/embed/" + Selector.key + "?&autoplay=1&mute=1"}
       title="YouTube video player" frameborder="0" 
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>

      </iframe>

  )
}
