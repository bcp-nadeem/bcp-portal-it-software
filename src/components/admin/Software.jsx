import { useState } from 'react';
import bgImageFromMiddle from '../../assets/images/bg/bg-mid-section.png'
import AvatarImg from '../../assets/images/software/software-img.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import userProfileImg from '../../assets/images/profile/profile-image.png'
import { FiEdit2 } from "react-icons/fi";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';


const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'softwareImage', headerName: 'Software Image', width: 120, renderCell: renderSoftwareImage },
  { field: 'softwareName', headerName: 'Software Name', width: 200 },
  { field: 'softwareCategory', headerName: 'Category', width: 200 },
  { field: 'softwareVersion', headerName: 'Version', width: 200 },
  { field: 'softwareSeats', headerName: 'Seats', width: 200 },
  { field: 'softwareStatus', headerName: 'Status', width: 200 },
  
];

const rows = [
  { id: 1, softwareImage: 'https://example.com/user1.jpg', softwareName: 'AutoCAD', softwareCategory: 'Autodesk', softwareVersion: '2022', softwareSeats: '2', softwareStatus: 'Active'  },
];

function renderSoftwareImage() {
  return (
    <img src={userProfileImg} alt="Software Image" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
  );
}

const paginationModel = { page: 0, pageSize: 5 };


const Software = () => {

  const [dropDown, setDropDown] = useState(false);

  const handleChangeDropDown = (event) => {
    setDropDown(event.target.value);
  };

  const [statusDropDown, setStatusDropDown] = useState(false);

  const handleChangeStatusDropDown = (event) => {
    setStatusDropDown(event.target.value);
  };

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
                                <TextField id="standard-basic" label="Enter software name" variant="standard" />
                              </div>
                              <div className='asm-input-insert-box'>
                                  <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                      <InputLabel id="demo-simple-select-standard-label">Software Category</InputLabel>
                                      <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={dropDown}
                                        onChange={handleChangeDropDown}
                                        label="Age"
                                      >
                                        <MenuItem value="">
                                          <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="">1</MenuItem>
                                        <MenuItem value="">2</MenuItem>
                                        <MenuItem value="">3</MenuItem>
                                      </Select>
                                  </FormControl>
                              </div>
                              <div className='asm-input-insert-box'>
                                <TextField id="standard-basic" label="Software version" variant="standard" />
                              </div>
                              <div className='asm-input-insert-box'>
                                <TextField id="standard-basic" label="Software Seats" variant="standard" />
                              </div>
                              <div className='asm-input-insert-box'>
                              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Software Category</InputLabel>
                                      <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={statusDropDown}
                                        onChange={handleChangeStatusDropDown}
                                        label="Age"
                                      >
                                        <MenuItem value="">
                                          <em>None</em>
                                        </MenuItem>
                                        <MenuItem value="">1</MenuItem>
                                        <MenuItem value="">2</MenuItem>
                                        <MenuItem value="">3</MenuItem>
                                      </Select>
                                  </FormControl>
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
                          <Button variant="contained">Submit</Button>
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
                                <TextField id="standard-basic" label="Enter software name" variant="standard" />
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