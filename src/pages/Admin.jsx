import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import FilesList from "./FilesList";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./../components/ui/Accordion";
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
} from "./../components/ui/alert-dialog";
import classes from "./Admin.module.css";
import { postFilesList } from "../lib/postFilesList";
import { queryClient } from "../lib/query_client";
import { fetchLists } from "../lib/fetchLists";
import { deleteLists } from "../lib/deleteLists";

function Admin() {
  const [lists, setLists] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [listId, setListId] = useState("");
  const [chosenListName, setChosenListName] = useState("FileList");
  const [user_id, setUser_id] = useState(null);

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["lists"],
    queryFn: fetchLists,
    onSuccess: queryClient.invalidateQueries({ queryKey: ["lists"] }),
  });

  const { mutate: redeemList } = useMutation({
    mutationFn: postFilesList,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
  });

  const { mutate: deleteList } = useMutation({
    mutationFn: deleteLists,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["lists"] });
    },
  });

  const deleteListHandler = (id) => {
    deleteList(id);
  };

  const storeInputDataHandler = (event) => {
    setInputValue(event.target.value);
  };

  const addListHandler = () => {
    redeemList({
      name: inputValue,
      user_id: user_id,
    });
  };

  const showContentHandler = (id) => {
    setListId(id);
  };

  return (
    <div className="pl-4">
      <div className={`${classes.container} grid grid-flow-col border-black`}>
        <div>
          <ul>
            <h3 className="font-semibold text-xl">Lists:</h3>
            {data &&
              data.map((list) => {
                return (
                  <>
                    <Accordion type="single" collapsible key={list.id}>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>{list.name}</AccordionTrigger>
                        <AccordionContent>
                          <button
                            className="border bg-blue-700 text-white px-2 py-1 rounded-xl"
                            onClick={() => showContentHandler(list.id)}
                          >
                            Show details
                          </button>
                          <button
                            className="border bg-red-700 text-white px-2 py-1 rounded-xl"
                            onClick={() => deleteListHandler(list.id)}
                          >
                            delete
                          </button>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </>
                );
              })}
          </ul>
          <AlertDialog>
            <AlertDialogTrigger className="mt-2">Add list</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Set name of the list</AlertDialogTitle>
                <p>{inputValue}</p>
                <AlertDialogDescription>
                  <input
                    type="text"
                    className="border border-gray-500"
                    required
                    onChange={storeInputDataHandler}
                  />
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={addListHandler}>
                  Add list
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="px-24 border">
          {<FilesList id={listId} listName={chosenListName} />}
        </div>
      </div>
    </div>
  );
}

export default Admin;
