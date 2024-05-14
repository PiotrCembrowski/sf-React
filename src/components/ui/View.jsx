import { useState } from "react";
import Select from "react-select";
import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchFiles } from "./../../lib/fetchFiles";
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
} from "./alert-dialog";
import { Button } from "./button";
import ErrorBlock from "./ErrorBlock";
import LoadingIndicator from "./LoadingIndicator";
import { NavLink } from "react-router-dom";
import { fetchView } from "../../lib/fetchView";
import { resultView } from "../../lib/resultView";

function View() {
  const [list, setList] = useState([]);
  const [link, setLink] = useState("First choose a file and click share");

  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ["files"],
    queryFn: fetchFiles,
  });

  const { mutate } = useMutation({
    mutationFn: fetchView,
    onSuccess: resultView,
  });

  const stripString = (string) => {
    const newString = string.replace(/[0-9]/g, "");
    const updatedString = newString.replace(/-/g, "");
    return updatedString;
  };

  const sendFiles = () => {
    const uuid = crypto.randomUUID();
    const urlPath = stripString(uuid);
    const url = `http://127.0.0.1:5000/views/${urlPath}`;
    setLink(url);
    const blob = [uuid, list];

    mutate(blob);
  };

  let share_button = (
    <button
      onClick={() => {
        sendFiles();
      }}
      disabled
    >
      Share
    </button>
  );

  if (list != 0) {
    share_button = (
      <button
        onClick={() => {
          sendFiles();
        }}
      >
        Share
      </button>
    );
  }

  let content = list.map((file) => {
    return <li key={file.id}>{file.name}</li>;
  });
  let options = [];
  data.map((option) => options.push({ value: option.id, label: option.name }));

  const addToList = (e) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].name == e.label) {
        return alert("This file was already added.");
      }
    }

    setList((prevState) => [...prevState, { id: e.value, name: e.label }]);
  };

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="Failed to fetch the files."
        message={
          error.info?.message ||
          "Failed to fetch your data. Please try again later."
        }
      />
    );
  }

  return (
    <div className="my-2">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Share</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create a new View with files</AlertDialogTitle>
            <AlertDialogDescription>
              Pick files from the list.
            </AlertDialogDescription>
            <ul>{content}</ul>
            <Select options={options} onChange={(e) => addToList(e)} />
          </AlertDialogHeader>
          <NavLink to={link} target="_blank" rel="noopener noreferrer">
            Your link for sharing: {link}
          </NavLink>
          {share_button}
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Close</AlertDialogAction>
          </AlertDialogFooter>
          <br />
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default View;
