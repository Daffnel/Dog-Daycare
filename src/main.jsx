import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Customers from './components/Customers/Customers.jsx'
import Breeds from './components/Breeds/Breeds.jsx'

export const routerPaths = [
  {
    path: "/",
    element: <App></App>
  }, 
  {
    path: "/customers",
    element: <Customers></Customers>
  },
  {
    path: "/breeds",
    element: <Breeds></Breeds>
  },
];

const router = createHashRouter(routerPaths);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
