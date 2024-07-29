import React from 'react'
import { Header } from './Header'
import Login from './Login'
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom'
import Browse from './Browse'
import {  onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/Firebase'
import { useEffect } from 'react'
import { adduser,removeuser } from '../utils/userslice'
import { useDispatch } from 'react-redux'

const Body = () => {
  console.log('body present')
  const dispatch = useDispatch()

  const app = createBrowserRouter([{
    path:'/',
    element:<Login></Login>
  },
  {
    path:'/browse',
    element:<Browse></Browse>
  }
])

  return (
    <>
      <RouterProvider router={app}>

      </RouterProvider>  
    </>
  )
}

export default Body