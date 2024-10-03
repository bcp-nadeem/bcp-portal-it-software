import { useState } from 'react';
import bgImageFromMiddle from '../../assets/images/bg/bg-mid-section.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { MdOutlineModeEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";


const Category = () => {

  const [isOpen, setIsOpen] = useState(false); 

  const [isOpenAddCategory, setisOpenAddCategory] = useState(false); 
  const [isOpenEditCategory, setisOpenEditCategory] = useState(false); 
  const [isOpenDeleteCategory, setisOpenDeleteCategory] = useState(false); 


  return (
    <>
      <main>
        <div className='bgImageFromMiddleTop' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
          <section className="main-section-mid" >
            <section className='main-content-section'>
                <div className="main-topic-headign">
                  <h3>Dashboard  <MdKeyboardArrowRight /> <span>Category list</span></h3>
                </div>

                <section className='searchbar-softwarelist-top-cover d-flex'>
                    <button className='add-user-btn-style' onClick={() => setisOpenAddCategory(true)}><FiPlus /> Add Category</button>
                    <div className='searchbar-softwarelist'>
                        <input type="search" name='' id='' placeholder='Search...' />
                    </div>
                </section>
                <section className='software-list-table software-list-table-style mt-70'>
                <table>
                    <tr>
                      <th>Category Name</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                    <tr>
                      <td className='link-text-software-list'>
                        AutoCAD
                      </td>
                      <td>Active</td>
                      <td><span className='software-list-action-btn' onClick={() => setIsOpen(!isOpen)} ><PiDotsThreeOutlineVertical /></span>

                      {isOpen ?

                      <div className='toggle-curd-list'>
                        <ul>
                          <li onClick={() => setisOpenEditCategory(true)}><MdOutlineModeEdit /> Edit Category</li>
                          <li onClick={() => setisOpenDeleteCategory(true)}><MdDeleteOutline /> Delete Category</li>
                        </ul>
                      </div>
                       :  ""}
                    </td>
                    </tr>
                  </table>
                </section>

            </section>
          </section>

          {isOpenAddCategory ? 
              <section className='add-software-model-box model-property overlay'>
                <div className='model-wrapper'>
                  <div className='model-header'>
                    <FiEdit2 />&nbsp; <label htmlFor="">Add Category</label> 
                    <label htmlFor="close" className='close-model' onClick={() => setisOpenAddCategory(false)}><IoClose /></label>
                  </div>
                    <div className='model-body'>
                        <div className='add-software-model-form'>
                            <div className='asm-input-insert'>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">Category name</label>
                                <input type="text" placeholder='Enter category name' />
                              </div>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">Category status</label>
                                <select name="" id="">
                                  <option value="" selected disabled>Enter category status</option>
                                  <option value="">Active</option>
                                  <option value="">Inactive</option>
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

          {isOpenEditCategory ? 
              <section className='add-software-model-box model-property overlay'>
                <div className='model-wrapper'>
                  <div className='model-header'>
                  <FiEdit3 />&nbsp; <label htmlFor="">Edit Category</label> 
                    <label htmlFor="close" className='close-model' onClick={() => setisOpenEditCategory(false)}><IoClose /></label>
                  </div>
                  <div className='model-body'>
                        <div className='add-software-model-form'>
                            <div className='asm-input-insert'>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">Category name</label>
                                <input type="text" placeholder='Enter category name' />
                              </div>
                              <div className='asm-input-insert-box'>
                                <label htmlFor="">Category status</label>
                                <select name="" id="">
                                  <option value="" selected disabled>Enter category status</option>
                                  <option value="">Active</option>
                                  <option value="">Inactive</option>
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


            {isOpenDeleteCategory ? 
              <section className='add-software-model-box model-property overlay'>
                <div className='model-wrapper'>
                  <div className='model-header'>
                  <BsTrash />&nbsp; <label htmlFor="">Delete Category</label> 
                    <label htmlFor="close" className='close-model' onClick={() => setisOpenDeleteCategory(false)}><IoClose /></label>
                  </div>
                    <div className='model-body'>
                       <div className='delete-software-cover-btn'>
                          <button className='button-delete'>Delete</button>
                          <button className='cancel-submit' onClick={() => setisOpenDeleteCategory(false)}>Cancel</button>
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

export default Category