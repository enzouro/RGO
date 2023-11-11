import React from 'react';
import { AiFillFacebook} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 RGO-Lipa All rights reserverd</p>
      
      <p className="icons">
        <AiFillFacebook  onClick={() => window.open('https://www.facebook.com/BatStateULipaRGO')} />
      </p>
    </div>
  )
}

export default Footer