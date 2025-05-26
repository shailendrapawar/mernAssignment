import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import UpdatePage from './pages/UpdatePage.jsx'
import RootLayout from './RootLayout.jsx'

const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route path='' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/updateProfile' element={<UpdatePage/>} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myRouter}>

    </RouterProvider>
  </StrictMode>,
)
