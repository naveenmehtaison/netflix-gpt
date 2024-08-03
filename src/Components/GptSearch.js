import React from 'react'
import { Multilingual } from '../utils/constants'
import { useSelector } from 'react-redux'
const GptSearch = () => {
  const cur_lang = useSelector(state=>state.language.lang)
  return (
    <div className='relative  left-[75vh] top-[40vh]'>
      <form className=''>

        <input placeholder={Multilingual[cur_lang].placeholder} className=' gap-2 p-4 w-96 rounded-md'></input>
        <button className='bg-red-800 rounded-md p-4' type='submit'>{Multilingual[cur_lang].search}</button>
      </form>
    </div>
  )
}

export default GptSearch