import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = props => {
  return (
    <nav className="main">
      <NavLink to="/material">Material</NavLink>
      <NavLink to="/ant">AntD</NavLink>
    </nav>
  )
}

export default Navbar
