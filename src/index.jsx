import './style.css'
import ReactDOM from 'react-dom/client'
import * as React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages
import App from '../App'
import StaticPage from './static/2dSite.jsx'
import Space from '../3dSite.jsx'
import Blog from '../src/static/blog/Blog.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '2d',
    element: <StaticPage />,
  },
  {
    path: '3d',
    element: <Space />,
  },

  { path: '/2d/blog/:id', element: <Blog /> },
])

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </>
)
