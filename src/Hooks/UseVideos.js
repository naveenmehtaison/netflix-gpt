import React from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addvideo } from '../utils/movieslice'
import { useEffect } from 'react'
const UseVideos = (video) => {

    const dispatch = useDispatch()
    const getVideo = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie' + `/${video}/` + 'videos',API_OPTIONS )
        const json = await data.json()
        console.log(json.results,video)

        const trailervideo = json.results.filter((vid)=>vid.type==='Trailer')
        if(!trailervideo.length){
            return
        }

        dispatch(addvideo(trailervideo[0]))
    }
    useEffect(()=>{
        getVideo()
    },[])
  return (
    <div>UseVideos</div>
  )
}

export default UseVideos