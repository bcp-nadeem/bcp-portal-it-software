
import { MdKeyboardArrowRight } from 'react-icons/md'
import bgImageFromMiddle from '../../assets/images/bg/bg-mid-section.png'
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";

const NofiFormPaper = styled(Paper)(({ theme }) => ({
    width: 600,
    padding: theme.spacing(2),
    ...theme.typography.body2
  }));

const NotificationForm = () => {

    const [value, setValue] = useState('');

    const [notificationType, setNotificationType] = useState('');

    const handleChange = (event) => {
        setNotificationType(event.target.value);
    };



  return (
    <>
         <main>
      <div className='bgImageFromMiddleTop' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
        <section className="main-section-mid" >
          <section className='main-content-section'>
              <div className="main-topic-headign">
                <h3>Dashboard  <MdKeyboardArrowRight /> <span>Notification Form</span></h3>
              </div>

              <section className="notification-form-cover mt-40"> 
                <div className='notification-form-box'>

                    <NofiFormPaper className=''>

                        <div className='add-software-model-form'>
                            <div className='asm-input-insert'>
                              <div className='asm-input-insert-box'>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Notification Type</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    value={notificationType}
                                    onChange={handleChange}
                                    label="Age"
                                    >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="1">Version updates</MenuItem>
                                    <MenuItem value="1">Patch releases</MenuItem>
                                    <MenuItem value="1">Industrial news</MenuItem>
                                    <MenuItem value="1">Company news</MenuItem>
                                    <MenuItem value="1">Product launch</MenuItem>
                                    <MenuItem value="1">Beta releases</MenuItem>

                                    </Select>
                                </FormControl>
                              </div>
                              <div className='asm-input-insert-box'>
                                <TextField id="standard-basic" label="Add Subject" variant="standard" />
                              </div>
                              <div className='asm-input-insert-box'>
                                <ReactQuill theme="snow" value={value} onChange={setValue} />
                              </div>
                            </div>
                        </div>

                        <div className='text-center'>
                            <Button variant="contained">Sent</Button>
                        </div>

                    </NofiFormPaper>

                </div>
              </section>


          </section>
        </section>
      <div className='bgImageFromMiddleButtom bgImageFromMiddleButtom-left' style={{ backgroundImage: `url(${bgImageFromMiddle})` }}></div>
    </main>
    </>
  )
}

export default NotificationForm