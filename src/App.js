import React from 'react'
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Feeds from './components/feeds/Feeds';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import Discuss from './components/discuss/Discuss';
import Resources from './components/resources/Resources';
import Contests from './components/contests/Contests';

const isCurrentUser = true;

const Layout = () => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Outlet />
      </div>
    </>
  )
};

const ProtectedRoute = ({ children }) => {
  if (!isCurrentUser) {
    return <Navigate to={'/login'}></Navigate>
  }

  return children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><Layout /></ProtectedRoute>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "/feeds",
        element: <Feeds />
      },
      {
        path: "/discuss/*",
        element: <Discuss />
      },
      {
        path: "/resources/*",
        element: <Resources />
      },
      {
        path: "/contests",
        element: <Contests />
      }
    ]
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },

]);


function App() {
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
