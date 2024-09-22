import React from 'react';
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter, SlSocialYoutube, SlSocialReddit } from "react-icons/sl";
import logo from './../assests/logo.png'; 

const Footer1 = () => {
  return (
    <div className="py-4 bg-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Printify Logo" className="mr-4" width={150} height={150} />
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" className="rounded-full bg-green-500 p-2 hover:bg-green-600 transition-transform transform hover:scale-110">
            <SlSocialFacebook className="text-white text-lg" />
          </a>
          <a href="#" className="rounded-full bg-green-500 p-2 hover:bg-green-600 transition-transform transform hover:scale-110">
            <SlSocialInstagram className="text-white text-lg" />
          </a>
          <a href="#" className="rounded-full bg-green-500 p-2 hover:bg-green-600 transition-transform transform hover:scale-110">
            <SlSocialLinkedin className="text-white text-lg" />
          </a>
          <a href="#" className="rounded-full bg-green-500 p-2 hover:bg-green-600 transition-transform transform hover:scale-110">
            <SlSocialTwitter className="text-white text-lg" />
          </a>
          <a href="#" className="rounded-full bg-green-500 p-2 hover:bg-green-600 transition-transform transform hover:scale-110">
            <SlSocialYoutube className="text-white text-lg" />
          </a>
          <a href="#" className="rounded-full bg-green-500 p-2 hover:bg-green-600 transition-transform transform hover:scale-110">
            <SlSocialReddit className="text-white text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
