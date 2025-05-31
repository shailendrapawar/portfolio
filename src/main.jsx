import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import RootLayout from './RootLayout.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'

import {Provider} from "react-redux"
import myStore from './store/store.js'
const myRouter=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>

      <Route path='' element={<Home/>}></Route>
      <Route path='projects' element={<Projects/>}></Route>
      <Route path='contact' element={<Contact/>}></Route>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myStore}>
      <RouterProvider router={myRouter}>

    </RouterProvider>
    </Provider>

  </StrictMode>,
)
