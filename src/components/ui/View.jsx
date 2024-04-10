import { Fragment, useState, useEffect } from 'react';
import Select from 'react-select'
import { useQuery } from "@tanstack/react-query";
import { fetchFiles } from "./../../lib/fetchFiles";
import { queryClient } from './../../lib/query_client'
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
import { Button } from './button'
import ErrorBlock from "./ErrorBlock";
import LoadingIndicator from './LoadingIndicator'

let listId = 0;

function View() {

const [viewFile, setViewFile] = useState('')
const [list, setList] = useState([])

const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['files'],
    queryFn: fetchFiles,
});

let content;
let options = [];
data.map(option => options.push({value:option.id, label:option.name}))


const addToList = async (e) => {
    await setList([
        ...list,
        { id: ++listId, name: e.label}
    ])
}

const renderingList = () => {
    return content = list.map((file) => { return <p key={file.id}>{file.name}</p> })
}

if(isPending) {
    content = <LoadingIndicator/>
}

if(isError) {
    content = <ErrorBlock title="Failed to fetch the files." message={error.info?.message || "Failed to fetch your data. Please try again later."} />
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
                Share files with your employees or friends!
            </AlertDialogDescription>
            {content}
            <Select options={options} onChange={(e)=>addToList(e)} />
            <button type="button" onClick={renderingList}>add file</button>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Share</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
    </div>
  )
}

export default View