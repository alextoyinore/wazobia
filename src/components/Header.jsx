import React, {useContext} from 'react'
import { ThemeContext, CartContext, UserContext } from '../states/AppContext.jsx';
import { Link } from 'react-router-dom';

const Header = () => {

  const theme = useContext(ThemeContext);
  const cart = useContext(CartContext);
  const user = useContext(UserContext);

  return (
    <nav className='topnav'>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>

        <ul>
            <li>{theme}</li>
            <li>{cart.length}</li>
            <li>{user.name} ({user.loggedIn ? "Logout" : "Login"})</li>
        </ul>
    </nav>
  )
}

export default Header
