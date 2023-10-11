import React from 'react';
import './footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} EditTime</p>
    </footer>
  );
}

export default Footer;