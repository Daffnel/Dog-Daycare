import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { ReadDataProvider } from './DataProvider.jsx'
import Breeds from './components/Breeds/Breeds.jsx'
import CustomerPage from './pages/CustomerPage.jsx'
import Dogs from './pages/Dogs.jsx'

export const routerPaths = [
  {
    path: "/",
    element: <App></App>
  }, 
  {
    path: "/customers",
    element: <ReadDataProvider><CustomerPage/></ReadDataProvider>
    },
  {
    path: "/dogs",
    element: <ReadDataProvider><Dogs/></ReadDataProvider>
  },
  {
  path: "/home",
  element: <App></App>
  }
];

const router = createHashRouter(routerPaths);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
      <RouterProvider router={router}/>
    
  </StrictMode>,
)
