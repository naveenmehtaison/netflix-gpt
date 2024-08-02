import React from 'react'
import {  signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { adduser,removeuser } from '../utils/userslice';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { LOGO } from '../utils/constants';
export const Header = () => {
  const dispatch = useDispatch()
  const selector = useSelector(store=>store.user)
  console.log(selector)
  const navigate = useNavigate()
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
          <img alt='userphoto' className='w-10 h-10 mt-2' src={selector?.photoURL}></img>
          <button onClick={handlesignout} className='my-2 text-2xl text-white'>Signout</button>
        </div>}
    </div>
  )
}
