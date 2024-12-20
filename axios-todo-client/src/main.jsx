import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster/>
    <RouterProvider router={router} />
  </StrictMode>,
)
