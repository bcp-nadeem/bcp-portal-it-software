import React, { useEffect, useRef } from 'react';
import Quill from 'quill';

const QuillEditor = ({ description }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    // Initialize Quill editor
    const quill = new Quill(editorRef.current,{
        readOnly: true, 
    });

    // Set initial content if description is provided
    if (description) {
      quill.root.innerHTML = description; // Set HTML content
    }

    // Clean up Quill instance on unmount
    return () => {
      quill.enable(false);
    };
  }, [description]);

  return <div ref={editorRef} style={{ height: 'fit-content' }} />;
};

export default QuillEditor;
