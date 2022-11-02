import { RouterProvider } from 'react-router-dom'
import routers from './router'
import "./index.css"

function App() {
  return <RouterProvider router={routers} />
}

export default App
