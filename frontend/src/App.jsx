import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './views/error/Error';
import ProtectedRoutes from './components/commons/Protected';

import Home from './views/home/Home';
import HomeMain from './components/home/homemain/HomeMain';
import About from './components/home/about/About';
import Contact from './components/home/contact/Contact'

import Auth from './views/auth/Auth';
import Login from './components/auth/login/Login';
import Signup from './components/auth/signup/Signup';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <HomeMain />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }, 
    {
      path: '/auth',
      element: <Auth />,
      children: [
        {
          path: '/auth/login',
          element: <Login />
        },
        {
          path: '/auth/signup',
          element: <Signup />
        }
      ]
    },
    {
      element: <ProtectedRoutes />,
      children: [
        /*
        RUTAS PROTEGIDAS
        */
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App