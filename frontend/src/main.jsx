import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router"
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

const myRouter=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Login/>}>
      <Route path='/register' element={<Register/>}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
