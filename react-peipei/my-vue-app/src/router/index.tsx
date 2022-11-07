import React, { lazy, useEffect } from 'react'
import { createBrowserRouter, Link, Navigate } from 'react-router-dom'

// const Home = lazy(() => import('@/view/Home/index'))
// const Home = () => import('@/view/Home/index')

import Index from '@/view/Index/index'
import Home from '@/view/Home/index'
import Login from '@/view/Login/Login'
import Set1 from '@/view/setting/advertiseMent'
import Set2 from '@/view/setting/advertiseMent  copy'
import Set3 from '@/view/setting/advertiseMent  copy 2'
import Set4 from '@/view/setting/advertiseMent  copy 3'
import Set5 from '@/view/setting/advertiseMent  copy 4'


import { ALL_VIEWS } from './constant'
import { useNavigate } from 'react-router-dom'

const lazyLoad = (url: string) => {
  let Com: any = () => import(`${url}`)
  return <Com />
}

function RequireAuth(children: any) {
  const user = window.localStorage.getItem('user')
  return user ? (
    children
  ) : (
    // <Navigate to="/" />
    // <Redirect to="/peipeix-material/v1/setting/advertisement" />
    <Navigate to="/login" />
  )
}

let routes = [
  {
    path: '/',
    element: RequireAuth(<Index />),
    children: [
      {
        path: '/about',
        element: <Home />
      },
      {
        path: '/peipeix-material/v1/setting/advertisement',
        element: <Set1 />
      },
      {
        path: '/peipeix-material/v1/setting/reviewVersion',
        element: <Set2 />
      },
      {
        path: '/peipeix-material/v1/setting/reviewPerson',
        element: <Set3 />
      },
      {
        path: '/ppx_material/v1/setting/ad',
        element: <Set4 />
      },
      {
        path: '/peipeix-msg/v1/setting/avatarList',
        element: <Set5 />
      }
    ]
  },
  {
    path: 'login',
    element: <Login />
  }
]

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
  // console.log(datass[0].default())
  // console.log(datas)
  datas.forEach((val: string) => {
    console.log(lazyLoad(val))
  })
  // routes.push({
  //   path: 'login',
  //   element: <Login />
  // })
  // router = createBrowserRouter(routes)
}, 1000)

let router = createBrowserRouter(routes)

// 动态引入多个组件

export default router
