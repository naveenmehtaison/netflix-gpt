import React from 'react'

import MoviePoster from './MoviePoster'
export const MovieLists = ({props,title}) => {
    // const Selector = useSelector(state=>state.movie.movies)


  return (
    <div className='-mt-28 mb-32 '>
        <h1 className='text-yellow-500 font-bold gap mr-2- shadow-lg '>{title}</h1>
    
        <div className='  flex overflow-x-hidden hover:overflow-x-scroll bg-black'>

            <div className=' flex gap-2 '>
                {props?.map((ele,item)=>(
                    <MoviePoster  key = {ele.id} props={ele.poster_path}/>
                ))}
            </div>


        </div>
    </div>
  )
}