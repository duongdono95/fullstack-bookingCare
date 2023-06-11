import React from 'react';
import BusinessDetails from '../../Sections/BusinessDetails/BusinessDetails';
import '../PageLayout.scss';
const Footer = () => {
  return (
    <div>
      <BusinessDetails />
      <div className="footer">Copyright © 2012 - 2023 TermsFeed®. All rights reserved.</div>
    </div>
  );
};

export default Footer;
