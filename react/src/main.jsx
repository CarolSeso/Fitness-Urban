import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {RouterProvider} from "react-router-dom";
import router from "./router.jsx"
import { ContextProvider } from './context/context.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ContextProvider>
        <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>,
)
