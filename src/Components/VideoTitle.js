import React from 'react'

export const VideoTitle = ({title,des}) => {
    console.log(title,des)
  return (
    <div className=" absolute mt-32 flex-col" >
        <div className='non-collapsing-margin p-4'>
            <h1 className='text-6xl w-1/2 font-extrabold text-white'>{title}</h1>
            <button className=' text-xl bg-white  rounded-lg w-20 m-2 p-2 opacity-30 hover:bg-slate-600 text-black font-bold'>▶Play</button>
            <button className=' text-xl bg-white rounded-lg w-20 m-2 p-2 opacity-30 hover:bg-slate-600 text-black font-bold'>Info</button>
            <h1 className='w-1/2 text-white font-extralight'>{des}</h1>
        </div>
    </div>
  )
}
