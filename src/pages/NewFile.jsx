import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "../lib/uploadFile";
import { postFile } from "../lib/postFile";
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
import ErrorBlock from "../components/ui/ErrorBlock";
import FileUpload from "../components/form/FileUpload";
import { queryClient } from "../lib/query_client";
import axios from "axios";

function NewFile({ pickedListId }) {
  const [FileNameStore, setFileNameStore] = useState("");
  const [FileDescriptionStore, setFileDescriptionStore] = useState("");
  const [attachment, setAttachment] = useState("");

  let content;

  const {
    mutate: redeemData,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: postFile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["files"] });
    },
  });

  const { mutate: redeemFile } = useMutation({
    mutationFn: uploadFile,
  });

  const storeFileNameHandler = (event) => {
    setFileNameStore(event.target.value);
  };

  const storeFileDescriptionHandler = (event) => {
    setFileDescriptionStore(event.target.value);
  };

  const storeFileAttachmentHandler = (event) => {
    setAttachment(event.target.files[0]);
  };

  const addFileHandler = async () => {
    let obj = {
      name: FileNameStore,
      description: FileDescriptionStore,
      list_id: pickedListId.id,
    };

    const form = new FormData();
    form.append("data", obj);
    form.append("file", attachment);

    // await redeemFile(attachment);
    await redeemData(form);
  };

  content = (
    <>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction onClick={addFileHandler}>Add file</AlertDialogAction>
    </>
  );

  if (isPending) {
    return (content = <p>Uploading...</p>);
  }

  if (isError) {
    return (content = (
      <ErrorBlock
        title="Failed to add file."
        message={
          error.info?.message ||
          "Failed to upload your file. Please check your inputs and try again."
        }
      />
    ));
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger>Add file</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <form>
            <AlertDialogTitle>Set name of the file</AlertDialogTitle>
            <p>{FileNameStore}</p>
            <AlertDialogDescription>
              <input
                type="text"
                className="border border-gray-500"
                required
                onChange={storeFileNameHandler}
              />
            </AlertDialogDescription>
            <AlertDialogTitle>Description:</AlertDialogTitle>
            <AlertDialogDescription>
              <textarea
                type="text"
                className="border border-gray-500 resize-y"
                required
                onChange={storeFileDescriptionHandler}
              />
            </AlertDialogDescription>
            <AlertDialogDescription>
              <FileUpload attachFile={storeFileAttachmentHandler} />
            </AlertDialogDescription>
          </form>
        </AlertDialogHeader>
        <AlertDialogFooter>{content}</AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default NewFile;
