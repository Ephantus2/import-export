import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LandingPage from './LandingPage.jsx'
import About from './About.jsx'
import Loginpage from './Loginpage.jsx'
import AuthLayout from './AuthLayout.jsx'
import Registerpage from './Registerpage.jsx'

const routers = createBrowserRouter([
  {
    element: <App />,
    children: [
      {path: '/', element: <LandingPage />},
      {path: 'about/', element: <About />},
      
    ]
  },{
    element: <AuthLayout />,
    children: [
        {path: 'auth/user/login/', element: <Loginpage />},
        {path: 'auth/user/signup/', element: <Registerpage />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
