import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* <a href='link'>Home</a> syntax for html, but in react we use Link */}
      <nav>
        <Link to="/">Home</Link> &nbsp;
        <Link to="/about">About</Link> &nbsp;
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar