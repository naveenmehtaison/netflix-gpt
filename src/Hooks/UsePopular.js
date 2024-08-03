import React from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import { addpopularmovie } from '../utils/movieslice'
const UsePopular = () => {
    const dispatch = useDispatch()
    const GetMovies= async()=>{
    const g = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS)
    const data = await g.json()
    dispatch(addpopularmovie(data.results))

    }
    useEffect(()=>{
    GetMovies()
// eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div>UsePopular</div>
  )
}

export default UsePopular