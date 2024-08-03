import React from 'react'

import Login from './Login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'


const Body = () => {


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