import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '@/assets/css/index.css'
import './assets/css/antd.less'
import 'antd/dist/antd.css'

// yinru axios
import request from '@/utils/axios'
let req = new request({})
req
  .request({ url: '/sa' })
  .then((da) => {
    console.log(da)
  })
  .catch((val) => {
    console.log(val)
  })
console.log(request)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
console.log(import.meta.env)
