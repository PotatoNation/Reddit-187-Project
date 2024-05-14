// Footer.js

import React from 'react';
import { RiHomeLine, RiMessage2Line, RiNotificationLine, RiAddCircleLine } from 'react-icons/ri';


function Footer() {
  return (
    <div className="footer">
      <RiHomeLine className="icon" />
      <RiMessage2Line className="icon" />
      <RiNotificationLine className="icon" />
      <RiAddCircleLine className="icon" />
    </div>
  );
}

export default Footer;
