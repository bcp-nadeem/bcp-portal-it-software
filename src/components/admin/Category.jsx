import { useState } from 'react';
import bgImageFromMiddle from '../../assets/images/bg/bg-mid-section.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FiEdit2 } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';


const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'categoryName', headerName: 'Category Name', width: 200 },
  { field: 'categoryStatus', headerName: 'Status', width: 200 }
];

const rows = [
  { id: 1, categoryName: 'AutoCAD', categoryStatus: 'Active'},
];

const paginationModel = { page: 0, pageSize: 5 };

const Category = () => {

  // const [isOpen, setIsOpen] = useState(false); 

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
                </section>
                <section className='software-list-table software-list-table-style mt-20'>
                  <Paper sx={{ height: 600, width: '1440px' }}>
                      <DataGrid
                        rowHeight={60}
                        rows={rows}
                        columns={columns}
                        initialState={{ pagination: { paginationModel } }}
                        pageSizeOptions={[5, 10, 20, 30]}
                        checkboxSelection
                        sx={{ border: 0 }}
                      />
                  </Paper>
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
                                <TextField id="standard-basic" label="Enter category name" variant="standard" />
                              </div>
                              <div className='asm-input-insert-box'>
                                <TextField id="standard-basic" label="Enter category status" variant="standard" />
                              </div>
                            </div>
                        </div>
                    </div>
                  <div className='model-footer'>
                        <div className='asm-button-submit'>
                          <Button variant="contained">Submit</Button>
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