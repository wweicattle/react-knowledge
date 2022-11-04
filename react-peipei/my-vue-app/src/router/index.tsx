import React, { lazy } from 'react'
import { createBrowserRouter, Link, Navigate } from 'react-router-dom'

const Home = lazy(() => import('@/view/Home/index'))
// import Home from '@/view/Home/index'

import Index from '@/view/Index/index'
import Login from '@/view/Login/Login'

import { ALL_VIEWS } from './constant'
console.log(<Home />)
const lazyLoad = (url: string) => {
  return lazy(() => import(`${url}`))
}
function RequireAuth(children: any) {
  const user = window.localStorage.getItem('user')
  return user ? children : <Navigate to="/login" />
}
let routes = [
  {
    path: '/',
    element: RequireAuth(<Index />),
    children: [
      {
        path: 'about',
        element: <Home />
      }
    ]
  },
  {
    path: 'login',
    element: <Login />
  }
]
let router = createBrowserRouter(routes)
// console.log(ALL_VIEWS)
let datas: any = []
let datass: any = []

for (const key in ALL_VIEWS) {
  if (Object.prototype.hasOwnProperty.call(ALL_VIEWS, key)) {
    const element = ALL_VIEWS[key]
    console.log(element())

    element().then((da: any) => {
      console.log(da)
      datass.push(da)
      // da.default().then((das: any) => {
      // })
    })
  }
}
setTimeout(() => {
  // datass[0].default((da:any) => {
  //   console.log(da)
  // })
  console.log(datass[0].default())

  console.log(datas)
  datas.forEach((val: string) => {
    console.log(lazyLoad(val))
  })
  routes.push({
    path: 'login',
    element: <Login />
  })
  router = createBrowserRouter(routes)
}, 1000)

// 动态引入多个组件

export default router
