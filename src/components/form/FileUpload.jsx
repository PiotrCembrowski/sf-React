
function FileUpload({attachFile}) {

  return (
    <input type="file" name="file" accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document, .pdf" onChange={attachFile}/>
  )
}

export default FileUpload