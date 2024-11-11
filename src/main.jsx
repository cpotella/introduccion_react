import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './context/CartContext';
import { UserProvider } from './context/UserContext.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
      <UserProvider>
        <App />
      </UserProvider>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
