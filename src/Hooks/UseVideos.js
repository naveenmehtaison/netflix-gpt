import React from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addvideo } from '../utils/movieslice'
import { useEffect } from 'react'
const UseVideos = (video) => {

    const dispatch = useDispatch()
    const getVideo = async ()=>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${video}/videos`,API_OPTIONS )
        const json = await data.json()

        const trailervideo = json.results.filter((vid)=>vid.type==='Trailer')
        if(!trailervideo.length){
            return
        }

        dispatch(addvideo(trailervideo[0]))
    }
    const selector = useSelector((state)=>state.movie.videodata)
    useEffect(()=>{
        !selector && getVideo()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <>
    </>
  )
}

export default UseVideos