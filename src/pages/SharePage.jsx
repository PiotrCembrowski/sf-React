import { Fragment } from 'react'


function SharePage(list, password) {
  
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
      <h1>Welcome</h1>
      
      {console.log(list)}
    </Fragment>
  )
}

export default SharePage