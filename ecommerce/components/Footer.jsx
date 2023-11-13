import React from 'react';
import { AiFillFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 RGO-Lipa All Rights Reserved</p>
      
      <p className="icons">
        <AiFillFacebook  onClick={() => window.open('https://www.facebook.com/BatStateULipaRGO')} />
      </p>
    </div>
  )
}

export default Footer