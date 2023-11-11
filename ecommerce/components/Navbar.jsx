import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <div className="nav-logo">
        <Link href="/"><img src='./images/RGOLogo.png' alt="logoImage" width="100"/>
        </Link>
        </div>
        <p className="logo">
        <Link href="/"><br/>Resource Generation Office - Lipa</Link>
      </p>
  
      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
  </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar