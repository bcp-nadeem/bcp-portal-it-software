import bgImageFromMiddle from '../../assets/images/bg/bg-mid-section.png'
import { MdKeyboardArrowRight, MdOutlineFileUpload } from "react-icons/md";
import userProfileImg from '../../assets/images/profile/profile-image.png';;;;;
import { MdAlternateEmail } from "react-icons/md";
import { IoClose, IoLocationOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { CiClock2 } from "react-icons/ci";
import { FiEdit2, FiPhone } from "react-icons/fi";
import { GrStatusUnknown } from "react-icons/gr";
import { useState } from 'react';

const UserProfile = () => {

  const [editUserProfile, setEditUserProfile] = useState(false);

  const [addImgPerview, setaddImgPerview] = useState(false);

  function handleChange(e) {
    setaddImgPerview(URL.createObjectURL(e.target.files[0]));
  }


  return (
    <>
    <main>
        <div className='bgImageFromMiddleTop' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
          <section className="main-section-mid" >
            <section className='main-content-section'>
                <div className="main-topic-headign">
                  <h3>Dashboard  <MdKeyboardArrowRight /> <span>User Profile</span></h3>
                </div>


                <section className='profile-details-wrapper'>
                  <section className='profile-head-details'>
                      <div className='profile-head-details-cover'>
                          <div className='profile-head-img'><img src={userProfileImg} alt="" /></div>
                          <div className='profile-head-fullname'><h3>John Klabber</h3></div>
                          <div className='profile-head-mini-info'>
                              <span><MdAlternateEmail /> john.klabber@bimcap.com</span><span><IoLocationOutline /> SF, Bay Area</span><span><FaRegUser /> Manager</span>
                          </div>
                      </div>
                  </section>

                  <section className='profile-buttom-details'>

                    <div className='profile-buttom-details-head'>
                        <h3>Profile info &nbsp;<BiEdit onClick={() => setEditUserProfile(true)} /></h3>
                    </div>

                    <div className='profile-buttom-details-list'>
                        <ul>
                          <li><span><CiClock2 /> Age:</span>21</li>
                          <li><span><FiPhone /> Phone:</span>+1 1234567890</li>
                          <li><span><GrStatusUnknown /> Status:</span>Active</li>
                        </ul>
                    </div>
                  </section>
                </section>

            </section>
          </section>

          {editUserProfile ? 
              <section className='add-software-model-box model-property overlay'>
                <div className='model-wrapper'>
                  <div className='model-header'>
                    <FiEdit2 />&nbsp; <label htmlFor="">Edit User Information</label> 
                    <label htmlFor="close" className='close-model' onClick={() => setEditUserProfile(false)}><IoClose /></label>
                  </div>
                    <div className='model-body'>
                        <div className='add-software-model-form'>
                            <div className='asm-img-upload'>
                                <div className='upload-img-preview'>
                                <img src={addImgPerview} />
                                </div>
                                <div className='upload-img-btn'>
                                  <div>
                                    <label className='upload-file-label' htmlFor="actual-btn"><MdOutlineFileUpload /> Choose File</label>
                                    <input type="file" name="" id="actual-btn" onChange={handleChange} hidden />
                                  </div>
                                  <label htmlFor="">Allowed JPG, JPEG or PNG. Image Resolution: 225px * 225px. Max size of 800K</label>
                                </div>
                            </div>
                            <div className='asm-input-insert'>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">User name</label>
                                <input type="text" placeholder='Enter user name' />
                              </div>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">Email</label>
                                <input type="text" placeholder='Enter email' />
                              </div>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">User Level</label>
                                <select name="" id="">
                                  <option value="" selected disabled>Enter level</option>
                                  <option value="">1</option>
                                  <option value="">2</option>
                                </select>
                              </div>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">Address</label>
                                <input type="text" placeholder='Enter address' />
                              </div>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">Phone number</label>
                                <input type="text" placeholder='Enter number' />
                              </div>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">Date of birth</label>
                                <input type="date" placeholder='Enter date of birth' />
                              </div>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">User status</label>
                                <select name="" id="">
                                  <option value="" selected disabled>Enter status</option>
                                  <option value="">1</option>
                                  <option value="">2</option>
                                </select>
                              </div>
                            </div>
                        </div>
                    </div>
                  <div className='model-footer'>
                        <div className='asm-button-submit'>
                          <button className='' id=''>Submit</button>
                        </div>
                  </div>
                </div>
              </section>
          : ""}
        <div className='bgImageFromMiddleButtom bgImageFromMiddleButtom-left' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
      </main>
    </>
  )
}

export default UserProfile