import React from 'react'
import GptContent from './GptContent'
import GptSearch from './GptSearch'
import { BG } from '../utils/constants'
import { Multilingual } from '../utils/constants'
import { useSelector } from 'react-redux'
const GptPage = () => {

  return (
    <div className=''>
      <img alt='bg_image' className='absolute' src={BG}></img>
      <GptSearch></GptSearch>
      <GptContent></GptContent>
    </div>
  )
}

export default GptPage