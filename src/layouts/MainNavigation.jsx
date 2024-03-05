import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css'

function MainNavigation() {
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
            <li><NavLink to='signin' className={({ isActive }) => isActive ? classes.active : undefined
          }>Sign In</NavLink></li>
            <li><NavLink to='signup' className={({ isActive }) => isActive ? classes.active : undefined
          }>Sign Up</NavLink></li>
            <li><NavLink to='admin' className={({ isActive }) => isActive ? classes.active : undefined
          }>Admin</NavLink></li>
        </ul>
    </nav>
  )
}

export default MainNavigation