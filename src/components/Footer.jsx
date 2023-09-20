import React from 'react';
import './footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} EditdTime</p>
    </footer>
  );
}

export default Footer;