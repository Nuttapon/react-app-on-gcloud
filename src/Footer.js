import React from 'react';
import './Footer.css';

function Footer() {
  var year = new Date().getFullYear();

  return (
    <footer>
      <p className="center">© Powered by Nutty {year}</p>
    </footer>
  );
}

export default Footer;