import React from 'react'

export const VideoTitle = ({title,des}) => {

  return (
    <div className="absolute mt-20 md:absolute md:top-40 flex-col" >
        <div className=' md:p-2 '>
            <h1 className='text-2xl md:text-6xl w-1/6 font-extrabold text-white'>{title}</h1>
            <button className='  text-xs -mt-56 md:text-xl bg-white  rounded-lg w-20 m-2 p-2 opacity-60 hover:bg-slate-600 text-black font-bold'>▶Play</button>
            <button className='  text-xs  md:text-xl bg-white rounded-lg w-20 m-2 p-2 opacity-60 hover:bg-slate-600 text-black font-bold'>Info</button>
            <h1 className=' hidden lg:block md:w-1/2 text-white font-extralight  '>{des}</h1>
        </div>
    </div>
  )
}
