import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ value = {}, setValue, label="data" }) => {

  return (
    <>
      <ReactQuill
        theme="snow"
        value={value[label.toLowerCase()]}  // Safeguard for undefined values
        onChange={(newValue) =>
          setValue((prevState) => ({
            ...prevState,
            [label.toLowerCase()]: newValue,
          }))
        }
      />
    </>
  );
};

export default TextEditor;
