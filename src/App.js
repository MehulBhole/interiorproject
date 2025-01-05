

import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from './Home/Home';


function App() {
 
    const router = createBrowserRouter([
      {
          path:"/",
          element: <AppLayout></AppLayout>,
          children : [
            {
               path:"/",
               element:<Home></Home>

            }
          ]
      }
    ])
  
    return <RouterProvider router={router}></RouterProvider>
  
}

export default App;
