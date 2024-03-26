import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css'
import { useState } from 'react';

function MainNavigation() {

  const [ is_logged_in, setIs_logged_in ] = useState(false)

  return (
    <nav>
        <ul>
            <li><NavLink to="/" 
            className={({ isActive }) => isActive ? classes.active : undefined
          } end >Home</NavLink></li>
            <li><NavLink to="pricing" className={({ isActive }) => isActive ? classes.active : undefined
          }>Pricing</NavLink></li>
            <li></li>
        </ul>
        <ul>
          {!is_logged_in && <li><NavLink to='signin' className={({ isActive }) => isActive ? classes.active : undefined
          }>Sign In</NavLink></li>}
          {!is_logged_in &&  <li><NavLink to='signup' className={({ isActive }) => isActive ? classes.active : undefined
          }>Sign Up</NavLink></li>}
          {is_logged_in && <li><NavLink to='admin' className={({ isActive }) => isActive ? classes.active : undefined
          }>Admin</NavLink></li>}
          {is_logged_in && <li><NavLink to='http://127.0.0.1:8080/logout' className={({ isActive }) => isActive ? classes.active : undefined
          }>Sign Out</NavLink></li>}
        </ul>
    </nav>
  )
}

export default MainNavigation