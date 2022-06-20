import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default function Nav() {
  return (
    <nav className='navbar'>
        
        <ul className='nav-links'>
        {/* <li>
          <Link to = "/profile">Profile</Link>
          </li> */}
        <li><a href='/'>Theme</a></li>
        <li><a href='/'>Login</a></li>
        <li><a href='/'>Profile</a></li>
        </ul>
    </nav>
  )
}
