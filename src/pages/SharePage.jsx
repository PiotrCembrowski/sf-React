import { Fragment } from 'react'

function SharePage(list) {
  return (
    <Fragmet>
        {list.map(file => {
          if(file.list_id == id.id) return <li key={file.id} className="border-2 p-2 w-52">
            <img src={pdfIcon}/><hr/>
            <h3 className="mt-4 font-bold">{file.name}</h3><br/>
            <p>{file.description}</p><br/>
            <button className="border bg-red-700 text-white px-2 py-1 rounded-xl" onClick={() => deleteFileHandler(file.id)}>delete</button></li>
        }
        )}
    </Fragmet>
  )
}

export default SharePage