import React from 'react';
import Link from 'next/link';


const Navbar = () => {


  return (
    <div className="navbar-container">
      <div className="nav-logo">
        <Link href="/"><img src='./images/RGOLogo.png' alt="logoImage" width="100"/>
        </Link>
        </div>
        <p className="logo">
        <Link href="/"><br/>Resource Generation Office - Lipa</Link>
        </p>
    </div>
  )
}

export default Navbar