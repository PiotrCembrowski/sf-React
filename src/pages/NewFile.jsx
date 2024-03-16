import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { uploadFile } from "../lib/uploadFile";
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

function NewFile({pickedListId}) {
    const [FileNameStore, setFileNameStore] = useState('')
    const [FileDescriptionStore, setFileDescriptionStore] = useState('')

    const { mutate, isPending, isError, error } = useMutation({
        mutationFn: uploadFile
    });

    const storeFileNameHandler = (event) => {
        setFileNameStore(event.target.value)
    }

    const storeFileDescriptionHandler = (event) => {
        setFileDescriptionStore(event.target.value)
    }

    const addFileHandler = () => {
        mutate({
            description: FileDescriptionStore,
            list_id: pickedListId.id,
            name: FileNameStore
        });
    }
    
    return (
        <AlertDialog>
            <AlertDialogTrigger>Add file</AlertDialogTrigger>
            <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Set name of the file</AlertDialogTitle>
                <p>{FileNameStore}</p>
                <AlertDialogDescription>
                <input type="text" className="border border-gray-500" required onChange={storeFileNameHandler}/>
                </AlertDialogDescription>
                <AlertDialogTitle>Description:</AlertDialogTitle>
                <AlertDialogDescription>
                <textarea type="text" className="border border-gray-500 resize-y" required onChange={storeFileDescriptionHandler}/>
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                {isPending && 'Uploading...'}
                {!isPending && (
                    <>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={addFileHandler}>Add file</AlertDialogAction>
                    </>
                )}
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default NewFile