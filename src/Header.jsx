import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
const Header = () => {
  return (
    <div className='Header'>
      <Link to="/"> Home Page</Link>
      <Link to="/form"> Form Page</Link>
    </div>
  )
}

export default Header
