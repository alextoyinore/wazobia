import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartContext, ThemeContext, UserContext } from './states/AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContext.Provider value={{ name: "John Doe", loggedIn: true }}>
      <ThemeContext.Provider value="dark">
       <CartContext.Provider value={['apple', 'banana', 'orange']}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartContext.Provider>
      </ThemeContext.Provider>
    </UserContext.Provider>
  </StrictMode>,
)

