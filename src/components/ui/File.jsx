import React, { Fragment } from 'react'
import pdfIcon from './../../assets/pdf.png'

function File(name, description) {
  return (
    <Fragment>
      <li className="border-2 p-2 w-52">
            <img src={pdfIcon}/><hr/>
            <h3 className="mt-4 font-bold">{console.log(name)}</h3><br/>
            <p>{description}</p><br/>
            <button className="border bg-red-700 text-white px-2 py-1 rounded-xl">delete</button>
      </li>
    </Fragment>
  )
}

export default File