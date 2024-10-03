import { FiGrid } from "react-icons/fi";
import { FiCode } from "react-icons/fi";
import { FiGitMerge } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FiTool } from "react-icons/fi";
import { FiUser } from "react-icons/fi";



import {NavLink} from 'react-router-dom'


const NavBarLeft = () => {
  return (
    <>
    <header>
      <nav className="leftsidebar">
        <div className="leftsidebar-cover">
          <div className="navlink-text">
            <FiGrid  />
            <NavLink to="/dashboard" 
              className={({isActive}) =>
                `${isActive ? "isActive" : ""}`
              }
            >Dashboard</NavLink>
          </div>
          <div className="navlink-text">
            <FiUser />
            <NavLink to="/user-profile-list" 
              className={({isActive}) =>
                `${isActive ? "isActive" : ""}`
              }
            >Users</NavLink>
          </div>
          <div className="navlink-text">
            <FiCode  />
            <NavLink to="/software" 
              className={({isActive}) =>
                `${isActive ? "isActive" : ""}`
              }
            >Software</NavLink>
          </div>
          <div className="navlink-text">
            <FiGitMerge  />
            <NavLink to="/category" 
              className={({isActive}) =>
                `${isActive ? "isActive" : ""}`
              }
            >Category</NavLink>
          </div>
          <div className="navlink-text">
            <FiBell  />
            <NavLink to="/notification" 
              className={({isActive}) =>
                `${isActive ? "isActive" : ""}`
              }
            >Notificatioin</NavLink>
          </div>
          <div className="navlink-text">
            <FiTool  />
            <NavLink to="/settings" 
              className={({isActive}) =>
                `${isActive ? "isActive" : ""}`
              }
            >Settings</NavLink>
          </div>
        </div>
      </nav>
    </header>
    </>
  )
}

export default NavBarLeft