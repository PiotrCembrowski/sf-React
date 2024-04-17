import { Fragment } from 'react'

function SharePage(list, password) {
  return (
    <Fragment>
      <h1>Welcome</h1>
      {/* {list.map((file) => { return <li key={file.id}>{file.name}</li> })} */}
      {console.log(list)}
    </Fragment>
  )
}

export default SharePage