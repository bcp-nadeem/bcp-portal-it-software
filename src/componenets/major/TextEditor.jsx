import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({value, setValue}) => {


  return (
    <>
        <ReactQuill theme="snow" value={value} onChange={(e)=>setValue(e.target.value)} />
    </>
  )
}

export default TextEditor