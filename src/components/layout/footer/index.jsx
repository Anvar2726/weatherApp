import React from 'react'

import "./style.scss"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">
          © {new Date().getFullYear()} WeatherApp. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer