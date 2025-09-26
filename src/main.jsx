import App from './App.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { ReadDataProvider } from './DataProvider.jsx'
import Breeds from './components/Breeds/Breeds.jsx'
import CustomerPage from './pages/CustomerPage.jsx'

export const routerPaths = [
  {
    path: "/",
    element: <App></App>
  }, 
  {
    path: "/customers",
    element: <ReadDataProvider><CustomerPage></CustomerPage> </ReadDataProvider>
    },
  {
    path: "/breeds",
    element: <Breeds></Breeds>
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
