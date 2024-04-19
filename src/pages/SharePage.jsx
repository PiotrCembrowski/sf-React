import { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import File from './../components/ui/File'

function SharePage() {
  const { sharePageId } = useParams();

  const [ files, setFiles ] = useState([]);

  useEffect(() => {
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
  }, [ sharePageId ])
  

  return (
    <Fragment>
      <h1>page params:{sharePageId}</h1>
      {console.log(files)}
      {
        files.map((file) => {
          <File key={file.id} name={file.name} description={file.description} />
        })
      }
    </Fragment>
  )
}

export default SharePage