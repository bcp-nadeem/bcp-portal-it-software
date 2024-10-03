import { useState } from 'react';
import bgImageFromMiddle from '../../assets/images/bg/bg-mid-section.png'
import userProfileImg from '../../assets/images/profile/profile-image.png';;;;;
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";



const UserProfileList = () => {

    const [isOpen, setIsOpen] = useState(false); 

    const [isOpenAddUser, setisOpenAddUser] = useState(false); 
    const [isOpenEditUser, setisOpenEditUser] = useState(false); 
    const [isOpenDeleteUser, setisOpenDeleteUser] = useState(false); 
  
  
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
                  <h3>Dashboard  <MdKeyboardArrowRight /> <span>User Profile list</span></h3>
                </div>

                <section className='searchbar-softwarelist-top-cover d-flex'>
                    <button className='add-user-btn-style' onClick={() => setisOpenAddUser(true)}><FiPlus /> Add User</button>
                    <div className='searchbar-softwarelist'>
                        <input type="search" name='' id='' placeholder='Search...' />
                    </div>
                </section>
                <section className='software-list-table software-list-table-style mt-70'>
                <table>
                    <tr>
                      <th>Users</th>
                      <th>Email</th>
                      <th>Level</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                    <tr>
                      <td className='link-text-software-list'>
                        <img src={userProfileImg} alt="software-image" className='software-list-image' />&nbsp;&nbsp;&nbsp;
                        <Link to="/user-profile/1">John Klabber</Link>
                      </td>
                      <td>john.klabber@bimcap.com</td>
                      <td>Manager</td>
                      <td>Active</td>
                      <td><span className='software-list-action-btn' onClick={() => setIsOpen(!isOpen)} ><PiDotsThreeOutlineVertical /></span>

                      {isOpen ?

                      <div className='toggle-curd-list'>
                        <ul>
                          <li onClick={() => setisOpenEditUser(true)}><MdOutlineModeEdit /> Edit User</li>
                          <li onClick={() => setisOpenDeleteUser(true)}><MdDeleteOutline /> Delete User</li>
                        </ul>
                      </div>
                      
                       :  ""}
                    </td>
                    </tr>
                  </table>
                </section>

            </section>
          </section>

          {isOpenAddUser ? 
              <section className='add-software-model-box model-property overlay'>
              <div className='model-wrapper'>
                <div className='model-header'>
                  <FiEdit2 />&nbsp; <label htmlFor="">Edit User Information</label> 
                  <label htmlFor="close" className='close-model' onClick={() => setisOpenAddUser(false)}><IoClose /></label>
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

          {isOpenEditUser ? 
              <section className='add-software-model-box model-property overlay'>
              <div className='model-wrapper'>
                <div className='model-header'>
                  <FiEdit3 />&nbsp; <label htmlFor="">Edit User Information</label> 
                  <label htmlFor="close" className='close-model' onClick={() => setisOpenEditUser(false)}><IoClose /></label>
                </div>
                  <div className='model-body'>
                      <div className='add-software-model-form'>
                          <div className='asm-img-upload'>
                              <div className='upload-img-preview-profile'>
                              <img src={userProfileImg} />
                              </div>
                              <div className='upload-img-btn'>
                                <div>
                                  <label className='upload-file-label' htmlFor="actual-btn"><MdOutlineFileUpload /> Choose File</label>
                                  <input type="file" name="" id="actual-btn" hidden />
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


            {isOpenDeleteUser ? 
              <section className='add-software-model-box model-property overlay'>
                <div className='model-wrapper'>
                  <div className='model-header'>
                  <BsTrash />&nbsp; <label htmlFor="">Delete User</label> 
                    <label htmlFor="close" className='close-model' onClick={() => setisOpenDeleteUser(false)}><IoClose /></label>
                  </div>
                    <div className='model-body'>
                       <div className='delete-software-cover-btn'>
                          <button className='button-delete'>Delete</button>
                          <button className='cancel-submit' onClick={() => setisOpenDeleteUser(false)}>Cancel</button>
                       </div>
                    </div>
                  <div className='model-footer'>
                  </div>
                </div>
              </section>
          : ""}




        <div className='bgImageFromMiddleButtom bgImageFromMiddleButtom-left' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
      </main>
    </>
  )
}

export default UserProfileList