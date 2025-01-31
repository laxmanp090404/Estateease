import React, { useState } from 'react'
import './navbar.scss'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [open,setMenuOpen]  = useState(false);
  console.log("openstate",open)
  return (

    <nav>
      <div className="left">
        <Link to='/' className='logo'>
          <img src='/logo.png' alt='Logo'  />
          <span>EstateEase</span>
        </Link>
        <Link to='/'>
          Home
        </Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
        <Link to='/'>Agents</Link>
      </div>
      <div className="right">
        <Link to="/">Sign In</Link>
        <Link to="/" className='register'>Sign Up</Link>
        <div className="menuIcon" onClick={()=>setMenuOpen(!open)}>
          {/* <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
            <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
          </svg> */}
          <img src='/menu.png' alt='menu' />
        </div>
        <div className={open ? "menu active":"menu"}>
        <Link to='/'>
          Home
        </Link>
        <Link to='/'>About</Link>
        <Link to='/'>Contact</Link>
        <Link to='/'>Agents</Link>
        <Link to="/">Sign In</Link>
        <Link to="/">Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar