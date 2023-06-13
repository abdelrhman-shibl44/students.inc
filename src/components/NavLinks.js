import React from 'react'
import { Link } from 'react-router-dom'

const NavLinks = ({ style }) => {
  return (
    <div style={style} className="nav-links">
      <Link className="nav-link" to="/">Carrer Library</Link>
      <Link className="nav-link" to="/majorLibrary">Major Library</Link>
      <Link className="nav-link" to="/assessment">School Library</Link>
    </div>
  )
}

export default NavLinks