import React from 'react'

import MoviePoster from './MoviePoster'
export const MovieLists = ({props,title}) => {

  return (
    <div className=' -mt-2 mb-2   md:-mt-28 md:mb-32'>
        <h1 className='text-white font-bold gap mr-2- shadow-lg '>{title}</h1>
    
        <div className='  flex overflow-x-hidden hover:overflow-x-scroll w-auto '>

            <div className=' flex gap-2'>
                {props?.map(  (ele,item)=>(
                    
                    <MoviePoster  id={ele.id} key = {ele.id} props={ele.poster_path}/>
                ))}
            </div>


        </div>
    </div>
  )
}