import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LandingPage from './LandingPage.jsx'
import About from './About.jsx'

const routers = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '/', element: <LandingPage />},
      {path: 'about/', element: <About />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
