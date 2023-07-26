import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navigation'>
      <ul>
        <Link to="/About"><li>About</li></Link>
        <Link to="/Contact"><li>Contact</li></Link>
        <Link to="/Services"><li>Services</li></Link>
      </ul>
    </div>
  )
}

export default Navigation
