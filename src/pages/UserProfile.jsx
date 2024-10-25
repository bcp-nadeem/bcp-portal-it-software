import { MdKeyboardArrowRight } from "react-icons/md";
import UserAvatar from "../componenets/minor/UserAvatar";
import { MdAlternateEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { GrStatusUnknown } from "react-icons/gr";
import { useAuth } from "../store/AuthContext";

const UserProfile = () => {
  const {user} = useAuth()
  console.log(user);
  
  return (
    <>
         <section className='main-content-section'>
                <div className="main-topic-headign">
                  <h3>Dashboard  <MdKeyboardArrowRight /> <span>User Profile</span></h3>
                </div>
                <section className='profile-details-wrapper mt-50'>
                  <section className='profile-head-details'>
                      <div className='profile-head-details-cover'>
                          <div className='profile-head-img'><UserAvatar src={`${import.meta.env.VITE_EEP_URL}/${user?.employee_image}`} /></div>
                          <div className='profile-head-fullname'><h3>{user?.employee_first_name} {user?.employee_last_name} </h3></div>
                          <div className='profile-head-mini-info'>
                              <span><MdAlternateEmail /> {user?.employee_email}</span><span><IoLocationOutline /> {user?.employee_address}{user?.employee_city}, {user?.employee_country}</span><span><FaRegUser /> {user?.employee_designation}</span>
                          </div>
                      </div>
                  </section>

                  <section className='profile-buttom-details'>

                    <div className='profile-buttom-details-head'>
                        <h3>Profile info</h3>
                    </div>

                    <div className='profile-buttom-details-list'>
                        <ul>
                          <li><span><CiClock2 /> Date of Joining:</span>{user?.employee_doj}</li>
                          <li><span><FiPhone /> Phone:</span> {user?.employee_number} </li>
                          <li><span><GrStatusUnknown /> Status:</span>{user?.employee_status=="1"?"Active":"Inactive"}</li>
                        </ul>
                    </div>
                  </section>
                </section>
            </section>
    </>
  )
}

export default UserProfile