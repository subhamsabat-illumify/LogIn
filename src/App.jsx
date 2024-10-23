import { createBrowserRouter, RouterProvider ,Navigate} from "react-router-dom"
import About from "./components/pages/About"
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import Layout from "./components/layout/Layout"
import LoginPage from "./components/pages/LogIn"
import { useEffect, useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    // const storedEmail = localStorage.getItem('loggedInEmail');
    const storedEmail = sessionStorage.getItem('loggedInEmail');
    if (storedEmail) {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  // Function to handle login and set authentication state
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Protected route component
  // eslint-disable-next-line react/prop-types
  const ProtectedRoute = ({ element }) => {

    if (loading) return null;
    return isAuthenticated ? element : <Navigate to="/" replace />;
  };


  const router=createBrowserRouter([
    {
      path: '/',
      element: <LoginPage onLogin={handleLogin} />,  
    },
    {
      path:'/',
      element:<Layout />,
      children:[
          {
            path:'/home',
            element:<ProtectedRoute element={<Home />} />
          },
          {
            path:'/about',
            element:<ProtectedRoute element={<About />} />
          },
          {
            path:'/contact',
            element:<ProtectedRoute element={<Contact />} />
          },
         
      ]
    },
    

      
  ])
  

  return <RouterProvider router={router}/>
}

export default App
