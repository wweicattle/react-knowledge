import React from 'react'
import { createBrowserRouter, Link, Navigate } from 'react-router-dom'

import Home from '@/view/Home/index'
import Index from '@/view/Index/index'
import Login from '@/view/Login/Login'
function RequireAuth(children: any) {
  const user = window.localStorage.getItem('user')
  return user ? children : <Navigate to="/login" />
}
const router = createBrowserRouter([
  {
    path: '/',
    element: RequireAuth(<Index />)
  },
  {
    path: 'about',
    element: <Home />
  },
  {
    path: 'login',
    element: <Login />
  }
])

export default router
