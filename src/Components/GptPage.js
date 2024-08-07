import React from 'react'
import GptContent from './GptContent'
import GptSearch from './GptSearch'
import { BG } from '../utils/constants'
const GptPage = () => {

  return (
    <>
    <div className='fixed'>
      <img alt='bg_image' className=' w-screen h-screen object-cover ' src={BG}></img>

    </div>
    <div>
    <GptSearch></GptSearch>
    <GptContent></GptContent>
    </div>
    </>
  )
}

export default GptPage