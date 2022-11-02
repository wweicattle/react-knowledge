import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "@/assets/css/index.css"
import "./assets/css/antd.less"
import 'antd/dist/antd.css';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
console.log(import.meta.env);
