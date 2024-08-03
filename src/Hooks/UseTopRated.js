import React from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react'
import { addtopratedmovie } from '../utils/movieslice'
const UseTopRated= () => {
    const dispatch = useDispatch()
    const GetMovies= async()=>{
    const g = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS)
    const data = await g.json()
    dispatch(addtopratedmovie(data.results))

    }
    // const GetMovies = async () => {
    //   try {
    //     const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    //     console.log(response.data);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    useEffect(()=>{
    GetMovies()
// eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
    <div>UsePopular</div>
  )
}

export default UseTopRated