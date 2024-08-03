import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adduser,removeuser } from '../utils/userslice';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO } from '../utils/constants';
import { addlanguage } from '../utils/langslice';
import { showgpt } from '../utils/langslice';
export const Header = () => {
  const searchBoolean = useSelector(state=>state.language.boolean)
  const dispatch = useDispatch()
  const selector = useSelector(store=>store.user)
  console.log(selector)
  const navigate = useNavigate()
  const hanldetoggle=()=>{
    dispatch(showgpt())

  }
  useEffect(()=>{
    const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user)
        const {uid ,email, displayName, photoURL} = user
        dispatch(adduser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
        navigate('/browse')
  
      } else {
        dispatch(removeuser())
        navigate('/')
      }
    });
    return ()=>
      unsubscribe()
  // eslint-disable-next-line react-hooks/exhaustive-deps
   },[])


  const handlesignout=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
    })
  }
  return (
    <div className = 'bg-gradient-to-b absolute from-black shadow-lg top-0  px-8 py-2 z-10 w-screen flex justify-between'>
          
         <img className='w-44' src={LOGO} alt='Header'></img>

         
        {selector?.uid && <div className='flex gap-4'>
          {!searchBoolean && 
         <select onChange={(e)=>dispatch(addlanguage(e.target.value))} className='h-10 p-2 mt-2 rounded-md'>
          <option value='en'>English</option>
          <option value='hindi'>हिंदी</option>
          <option value='kumaoni'>कुमाउनी</option>
          <option value='marathi'>मराठी</option>
          </select>}
          <button className='rounded-md m-auto h-10 p-2 mt-2 bg-purple-400 text-white' onClick={()=>hanldetoggle()}>{searchBoolean?('Search'):'Home'}</button>
          <img alt='userphoto' className='w-10 h-10 mt-2' src={selector?.photoURL}></img>      
          
          <button onClick={handlesignout} className='my-2 text-2xl mt-1 text-white'>Signout</button>
          
        </div>}
    </div>
  )
}
