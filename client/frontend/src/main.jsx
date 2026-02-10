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
import ContactPage from './ContactPage.jsx'
import ProtectedPages from './Protected/protected.jsx'
import BlogsPage from './BlogsPage.jsx'

const routers = createBrowserRouter([
  {
    element: (
      <ProtectedPages>
          <App />
      </ProtectedPages>
  
  ),
    children: [
      {path: '/', element: <LandingPage />},
      {path: 'about/', element: <About />},
      {path: 'contact/', element: <ContactPage />},
      {path: 'blogs/', element: <BlogsPage />}
      
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
