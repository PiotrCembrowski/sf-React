import { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import pdfIcon from './../assets/pdf.png'
import File from './../components/ui/File'

function SharePage() {
  const { sharePageId } = useParams();

  const [ files, setFiles ] = useState([]);

  useEffect(()=>{
    async function fetchViews() {
      const response = await fetch(`http://127.0.0.1:5000/files`,{
          method: 'GET',
          credentials: 'include',
      });
  
      if (!response.ok) {
          const error = new Error('An error occured while fetching the events.');
          error.code = response.status;
          error.info = await response.json();
          throw error;
      }
  
      const { files } = await response.json();
      return setFiles(files);
    }
    fetchViews()
  },[])

  let content = files.map((file) => {
    <File key={file.id} name={file.name} description={file.description} />
  })
  
  return (
    <Fragment>
      <h1>page params:{sharePageId}</h1>
      {
        files.map(file => {
        return ( 
          <div className="border-2 p-2 w-52">
            <img src={pdfIcon}/><hr/>
            <h3 className="mt-4 font-bold">{file.name}</h3><br/>
            <p>{file.description}</p><br/>
            <button className="border bg-red-700 text-white px-2 py-1 rounded-xl">delete</button>
          </div>
        )
        })
      }
    </Fragment>
  )
}

export default SharePage