// Footer.js

import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const socialMediaLinks = [
    { icon: FaFacebook, url: 'https://www.facebook.com/' },
    { icon: FaTwitter, url: 'https://twitter.com/' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/' },
  ];

  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-around py-5 items-center">
        <div>
          <p className="font-bold text-xl">Task Management Platform</p>
          <p className="text-sm">Enhancing and improving task management</p>
        </div>
        <div className="flex space-x-4">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              {React.createElement(link.icon)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
