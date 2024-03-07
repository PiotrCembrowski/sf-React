import { useEffect, useState } from "react";
import axios from "axios";
import Files from "./Files";

function Admin() {

  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/fileslists')
    .then(response => {
      setLists(response.data.lists);
      console.log(response.data.lists)
    })
    .catch(error => {
      console.log(error);
    });
  }, []);


  return (
    <>
      <h1>Admin Page</h1>
      <div className="grid grid-flow-col">
        <div>
          <ul>lists;
          {lists.map(list => (
            <li key={list.id}>{list.name}</li>
          ))}
          </ul>
        </div>
        <div>
          <Files/>
        </div>
      </div>
    </>
  )
}

export default Admin