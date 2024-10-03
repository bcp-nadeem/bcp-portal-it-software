import { useState } from 'react';
import bgImageFromMiddle from '../../assets/images/bg/bg-mid-section.png'
import AvatarImg from '../../assets/images/software/software-img.png'
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


const Software = () => {

  const [isOpen, setIsOpen] = useState(false); 

  const [isOpenAddSoftware, setisOpenAddSoftware] = useState(false); 
  const [isOpenEditSoftware, setisOpenEditSoftware] = useState(false); 
  const [isOpenDeleteSoftware, setisOpenDeleteSoftware] = useState(false); 


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
                  <h3>Dashboard  <MdKeyboardArrowRight /> <span>Software list</span></h3>
                </div>

                <section className='searchbar-softwarelist-top-cover d-flex'>
                    <button className='add-user-btn-style' onClick={() => setisOpenAddSoftware(true)}><FiPlus /> Add Software</button>
                    <div className='searchbar-softwarelist'>
                        <input type="search" name='' id='' placeholder='Search...' />
                    </div>
                </section>
                <section className='software-list-table software-list-table-style mt-70'>
                <table>
                    <tr>
                      <th>Software</th>
                      <th>Type</th>
                      <th>Version</th>
                      <th>Seats</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                    <tr>
                      <td className='link-text-software-list'>
                        <img src={AvatarImg} alt="software-image" className='software-list-image' />&nbsp;&nbsp;&nbsp;
                        <Link to="/software-details/1">AutoCAD</Link>
                      </td>
                      <td>Autodesk</td>
                      <td>2022</td>
                      <td>2</td>
                      <td>Active</td>
                      <td><span className='software-list-action-btn' onClick={() => setIsOpen(!isOpen)} ><PiDotsThreeOutlineVertical /></span>

                      {isOpen ?

                      <div className='toggle-curd-list'>
                        <ul>
                          <li onClick={() => setisOpenEditSoftware(true)}><MdOutlineModeEdit /> Edit Software</li>
                          <li onClick={() => setisOpenDeleteSoftware(true)}><MdDeleteOutline /> Delete Software</li>
                        </ul>
                      </div>
                      

                       :  ""}
                    </td>
                    </tr>
                  </table>
                </section>

            </section>
          </section>

          {isOpenAddSoftware ? 
              <section className='add-software-model-box model-property overlay'>
                <div className='model-wrapper'>
                  <div className='model-header'>
                    <FiEdit2 />&nbsp; <label htmlFor="">Add Software</label> 
                    <label htmlFor="close" className='close-model' onClick={() => setisOpenAddSoftware(false)}><IoClose /></label>
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
                                <label htmlFor="">Software name</label>
                                <input type="text" placeholder='Enter software name' />
                              </div>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">Software Category</label>
                                <select name="" id="">
                                  <option value="" selected disabled>Enter software category</option>
                                  <option value="">1</option>
                                  <option value="">2</option>
                                </select>
                              </div>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">Software type</label>
                                <input type="text" placeholder='Enter software type' />
                              </div>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">Software version</label>
                                <input type="text" placeholder='Enter software version' />
                              </div>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">Software version</label>
                                <select name="" id="">
                                  <option value="" selected disabled>Enter software status</option>
                                  <option value="">1</option>
                                  <option value="">2</option>
                                </select>
                              </div>
                            </div>
                            <div className='asm-upload-insert'>
                              <div>
                                <div className='asm-upload-insert-title'><label htmlFor="">Upload software file</label></div>
                                <label className='upload-file-label' htmlFor="actual-btn"><MdOutlineFileUpload /> Choose File</label>
                                <input type="file" name="" id="actual-btn" hidden />
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

          {isOpenEditSoftware ? 
              <section className='add-software-model-box model-property overlay'>
                <div className='model-wrapper'>
                  <div className='model-header'>
                  <FiEdit3 />&nbsp; <label htmlFor="">Edit Software</label> 
                    <label htmlFor="close" className='close-model' onClick={() => setisOpenEditSoftware(false)}><IoClose /></label>
                  </div>
                    <div className='model-body'>
                        <div className='add-software-model-form'>
                            <div className='asm-img-upload'>
                                <div className='upload-img-preview'>
                                    <img src={AvatarImg} alt="" />
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
                                <label htmlFor="">Software name</label>
                                <input type="text" placeholder='Enter software name' />
                              </div>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">Software Category</label>
                                <select name="" id="">
                                  <option value="" selected disabled>Enter software category</option>
                                  <option value="">1</option>
                                  <option value="">2</option>
                                </select>
                              </div>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">Software type</label>
                                <input type="text" placeholder='Enter software type' />
                              </div>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">Software version</label>
                                <input type="text" placeholder='Enter software version' />
                              </div>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">Software version</label>
                                <select name="" id="">
                                  <option value="" selected disabled>Enter software status</option>
                                  <option value="">1</option>
                                  <option value="">2</option>
                                </select>
                              </div>
                            </div>
                            <div className='asm-upload-insert'>
                              <div>
                                <div className='asm-upload-insert-title'><label htmlFor="">Upload software file</label></div>
                                <label className='upload-file-label' htmlFor="actual-btn"><MdOutlineFileUpload /> Choose File</label>
                                <input type="file" name="" id="actual-btn" hidden />
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


            {isOpenDeleteSoftware ? 
              <section className='add-software-model-box model-property overlay'>
                <div className='model-wrapper'>
                  <div className='model-header'>
                  <BsTrash />&nbsp; <label htmlFor="">Delete Software</label> 
                    <label htmlFor="close" className='close-model' onClick={() => setisOpenDeleteSoftware(false)}><IoClose /></label>
                  </div>
                    <div className='model-body'>
                       <div className='delete-software-cover-btn'>
                          <button className='button-delete'>Delete</button>
                          <button className='cancel-submit' onClick={() => setisOpenDeleteSoftware(false)}>Cancel</button>
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

export default Software