import { useEffect, useState } from "react";
import axios from "axios";


function FilesList() {

  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/files')
    .then(response => {
      setFiles(response.data.files);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <div>FilesList</div>
      <ul>files;
        {files.map(file => (
          <li key={file.id}>{file.name}<br></br>{file.description}</li>
        ))}
        </ul>
    </>
  )
}

export default FilesList