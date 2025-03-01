import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {  FaBars, FaTimes } from "react-icons/fa";
import myaccount from "../../../assets/My Account.png"
import orders from '../../../assets/MyOrders_icon.png';
import downloads from '../../../assets/MyDownloadableProducts_icon.png';
import addressBook from '../../../assets/AddressBook_icon.png';
import accountInfo from '../../../assets/AccountInformation_icon.png';
import paymentMethods from '../../../assets/StoredPayment_icon.png';
import productReviews from '../../../assets/MyProductReviews_icon.png';
import newsletter from '../../../assets/NewsLetterSubscription_icon.png';
import savedLater from '../../../assets/SavedForLater_icon.png';
import returns from '../../../assets/Returns_icon.png';
import wishlist from '../../../assets/ManageWishlist_icon.png';
import quote from '../../../assets/RequestForQuote_icon.png';

const AccountSideBar = () => {
  let location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const links = [
    { name: 'My Account', path: '/user', icon: myaccount },
    { name: 'My Orders', path: '/user/orders', icon: orders },
    { name: 'My Downloadable Products', path: '/user/downloads', icon: downloads },
    { name: 'Address Book', path: '/user/address-book', icon: addressBook },
    { name: 'Account Information', path: '/user/account-info', icon: accountInfo },
    { name: 'Stored Payment Methods', path: '/user/payment-methods', icon: paymentMethods },
    { name: 'My Product Reviews', path: '/user/reviews', icon: productReviews },
    { name: 'Newsletter Subscription', path: '/user/newsletter', icon: newsletter },
    // { name: 'Delete Account', path: '/user/delete-account', icon: newsletter },
    { name: 'Saved for Later', path: '/user/saved', icon: savedLater },
    { name: 'Returns', path: '/user/returns', icon: returns },
    { name: 'Manage Wishlist', path: '/user/wishlist', icon: wishlist },
    { name: 'My Requested Quote', path: '/user/quote', icon: quote },
  ];

  const handleClick = (path) => {
    setActiveLink(path);
  };

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={` p-4 absolute h-[calc(100%-80px)] bg-blue font-normal overflow-scroll shadow-lg font-ubuntu ${isCollapsed ? 'min-w-16 items-center' : 'min-w-64'}`}>
      <div className="flex medium:hidden items-center justify-end p-2">
        <button onClick={toggleCollapse} className="text-white hover:text-blue-900">
          {/* {isCollapsed ? 'Collapsed' : 'Expanded'} */}
          {isCollapsed ? (
            <FaBars className="w-6 h-6" />
          ) : (
            <FaTimes className="w-6 h-6" />
          )}
        </button>
      </div>
      <nav className="space-y-2 text-[14px]">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => handleClick(link.path)}
            className={`flex items-center p-2 ${activeLink === link.path ? 'text-white bg-gray-400' : 'text-white hover:text-white hover:bg-gray-400'} `}
          >
            <img src={link.icon} className="w-6 h-6" alt={link.name} />
            {!isCollapsed && <span className="ml-3">{link.name}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default AccountSideBar;
