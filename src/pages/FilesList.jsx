import { useEffect, useState } from "react";
import axios from "axios";


function FilesList(id, listName) {

  const [files, setFiles] = useState([]);
  const [renderListName, setRenderListName] = useState('FileList')

  // useEffect(() => {
  //   setRenderListName(ListName)
  // },[])

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
      <div>{renderListName}</div>
      <ul>
        {files.map(file => {
          console.log(file.list_id)
          console.log(id.id)
          if(file.list_id == id.id) return <li key={file.id}>{file.name}<br/>{file.description}</li>
        }
        )}
        </ul>
    </>
  )
}

export default FilesList