import React, { useState, useRef, useEffect } from 'react';
import Checkvalidation from '../utils/Checkvalidation';
import { Header } from './Header';
import { auth } from '../utils/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { adduser } from '../utils/userslice';
import { BG } from '../utils/constants';


const Login = () => {
  const Dispatch = useDispatch()


  const email = useRef();
  const [message, setMessage] = useState('');
  const password = useRef();
  const name = useRef()
  const [login, setLogin] = useState(false);

 



  const handleSubmit = async (e) => {
    e.preventDefault()
    let msg = Checkvalidation(email.current.value,password.current.value)
    setMessage(msg)

    if(!login){
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          

          const user = userCredential.user;

          updateProfile(user,{
            displayName:name.current.value, photoURL:'https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp'
          })
            .then(()=>{
              const {uid ,email, displayName, photoURL} = auth.currentUser
              Dispatch(adduser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
            })
            .catch((err)=>{
              setMessage(err.code + '-' + err.message)
            })

          
          // navigate('/')
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + '-' + '-'+ errorMessage)
          // ..
        });

    }
    else{
      console.log('sign in')
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setMessage(errorCode + '-' + errorMessage)
          
        });
    }

  }

  return (
    <>
      <Header />
      <div className='absolute w-[400px] p-10 my-[20vh] mx-[70vh] bg-black opacity-90'>
        <h1 className='text-white text-center text-3xl'>{login ? 'Sign In' : 'Sign Up'}</h1>
        <form onSubmit={handleSubmit} className='flex-col p-0'>
          {!login && <input ref={name} className='border-black w-full bg-gray-500 m-2 p-3 rounded-md' placeholder='Name' />}
          <input ref={email} className='border-black w-full bg-gray-500 m-2 p-3 rounded-md' placeholder='Email' type='email' />
          <input ref={password} className='border-black w-full bg-gray-500 m-2 p-3 rounded-md' placeholder='Password' type='password' />
          <button type='submit' className='bg-red-900 text-white p-3 m-2 w-full rounded-md'>{login ? 'Sign In' : 'Sign Up'}</button>
        </form>
        <p className='text-red-700 font-bold m-2'>{message}</p>
        <p onClick={() => setLogin(!login)} className='text-white text-center cursor-pointer'>
          {login ? "Didn't have an account" : 'Already have an Account'}
        </p>
      </div>
      <img  src={BG} alt='netflixlogo' />
    </>
  );
};

export default Login;
