import myLogo from '../../assets/images/logo/bimcap_logo.png';
import userProfileImg from '../../assets/images/profile/profile-image.png';
import { IoSearchSharp } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { CgLogOut } from "react-icons/cg";
import { useState, useEffect } from 'react';


const NavBarTop = () => {

  const [isopenProfileDropdown, setIsopenProfileDropdown] = useState(false);
  const [isopenNavTopSearch, setIsopenNavTopSearch] = useState(false);

  useEffect(() => {
    
    const timeoutId = setTimeout(() => {
      setIsopenProfileDropdown(false);
    }, 6000);
  
    return () => clearTimeout(timeoutId);

  }, []);

  return (
    <>
        <nav className="main-nav-bar">
            <div className="brand-logo">
                <img src={myLogo} alt="bimcap logo" />
            </div>
            <div className="profile-buttons-bar">
                <div className="nav-search-btn">

                {isopenNavTopSearch ? <input type="search" name="" id="" placeholder='Search....' />

                : ""}

                  <IoSearchSharp onClick={() => setIsopenNavTopSearch(!isopenNavTopSearch)} />
                </div>
                <div className="nav-notification-btn"><FaRegBell /></div>
                <div className="nav-profile-btn">
                  <img src={userProfileImg} alt="" onClick={() => setIsopenProfileDropdown(!isopenProfileDropdown)} />

                  {isopenProfileDropdown ? 
                  <div className='nav-profile-dropdown'>
                      <div className='nav-profile-dropdown-cover'>
                          <span><Link to="/user-profile/1"><FiUser /> &nbsp;Profile</Link></span>
                          <span><Link to="/" ><CgLogOut /> &nbsp;Logout</Link></span>
                      </div>
                  </div>
                  : ""}

                </div>
            </div>
            
        </nav>
    </>
  )
}

export default NavBarTop