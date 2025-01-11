import React from 'react'

import { HiArrowLeft } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { SlWallet } from "react-icons/sl";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SearchBar from './SearchBar';

export const Header = () => {
  return (
    <div className="header">
        <div className="location-parent-container">
            <HiArrowLeft className="header-arrow-icon" size={50} />
            <FaLocationDot size={23} className="location-icon large-device-location-dot" />
            <div className="location-child-container">
                <div style={{display: "flex"}}>
                    <h1 className="location-name">Dairy Circle</h1>
                    <FaLocationDot size={20} className="location-icon" />
                </div>
                <p className="address-para">Bhavani Nagar, S.G. Palya, Bengaluru, Karnataka</p>
                <MdOutlineKeyboardArrowDown size={20} className="down-arrow-icon" />
            </div>
        </div>
        <div className="lg-search-bar">
            <SearchBar />
        </div>
        <div className="header-right-container">
            <div className="wallet-container" style={{marginRight: '50px'}}>
                <SlWallet size={28} />
                <button className="header-value-button">4529</button>
            </div>
            <div className="cart-container">
                <LuShoppingCart size={28} />
                <button className="header-value-button" style={{right: '-13px'}}>1</button>
            </div>
        </div>
    </div>
  )
}

export default Header