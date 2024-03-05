

const FILES = [
    { id: 'f1', title: 'File1' },
    { id: 'f2', title: 'File2' },
    { id: 'f3', title: 'File3' },
    { id: 'f4', title: 'File4' },
  ];
  
  function FilesList() {
    return (
      <>
        <div>FilesList</div>
        <ul>
          { FILES.map(file => (
            <li key={file.id}>
              { file.title }
            </li>
          )) }
        </ul>
      </>
    )
  }
  
  export default FilesList