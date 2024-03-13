import axios from "axios";
import { useEffect, useState } from "react";
import Files from "./Files";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./../components/ui/Accordion"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./../components/ui/alert-dialog"

import classes from "./Admin.module.css"

function Admin() {

  const [lists, setLists] = useState([]);
  const [inputValue, setInputValue] = useState('')
  let listsArray = [];

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/fileslists')
    .then(response => {
      const data = response.data.lists;
      setLists(data);

      data.map(item => listsArray.push(item))
    })
    .catch(error => {
      console.log(error);
    });
  }, []);
  

  const deleteListHandler = async (id) => {
    await fetch(`http://127.0.0.1:8000/fileslists/${id}`, {
      method: "DELETE",
    })
    axios.get('http://127.0.0.1:8000/fileslists')
    .then(response => {
      setLists(response.data.lists);
    })
    .catch(error => {
      console.log(error);
    });
  }

  const storeInputDataHandler = (event) => {
    setInputValue(event.target.value)
  }

  const addListHandler = async () => {
    fetch('http://127.0.0.1:8000/fileslists', {
      method: 'POST',
      body: JSON.stringify({
        name: inputValue
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      
    axios.get('http://127.0.0.1:8000/fileslists')
    .then(response => {
      setLists(response.data.lists);
    })
    .catch(error => {
      console.log(error);
    });
  }

  const showContentHandler = () => {
    
  }

  return (
    <div className="pl-4">
      <div className={`${classes.container} grid grid-flow-col border-black`}>
        <div >
          <ul>
            lists;
            {lists && lists.map((list) => {
                return (
                  <>
                    <Accordion type="single" collapsible key={list.id}>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>{list.name}</AccordionTrigger>
                        <AccordionContent>
                          <button className="border bg-blue-700 text-white px-2 py-1 rounded-xl" onClick={showContentHandler}>Show details</button>
                          <button className="border bg-red-700 text-white px-2 py-1 rounded-xl" onClick={() => deleteListHandler(list.id)}>delete</button>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </>
                )
              })}
          </ul>
          <AlertDialog>
            <AlertDialogTrigger>Add list</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Set name of the list</AlertDialogTitle>
                <p>{inputValue}</p>
                <AlertDialogDescription>
                <input type="text" className="border border-gray-500" required onChange={storeInputDataHandler}/>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={addListHandler}>Add list</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="px-24 border">
          {<Files/>}
        </div>
      </div>
    </div>
  )
}

export default Admin