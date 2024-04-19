import { Fragment } from 'react'
import { useParams } from 'react-router-dom'


function SharePage(list, password) {
  const params = useParams();
  
  // async function fetchViews() {
  //   const response = await fetch(`http://127.0.0.1:5000/files/${list}`,{
  //       method: 'GET',
  //       credentials: 'include',
  //   });

  //   if (!response.ok) {
  //       const error = new Error('An error occured while fetching the events.');
  //       error.code = response.status;
  //       error.info = await response.json();
  //       throw error;
  //   }

  //   const { files } = await response.json();

  //   return files;
  // }

  return (
    <Fragment>
      <h1>page params:{params.sharePageId}</h1>
      

    </Fragment>
  )
}

export default SharePage