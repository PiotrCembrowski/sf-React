import { useEffect, useState } from 'react';
import Select from 'react-select'
import { useQuery } from "@tanstack/react-query";
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
import { Button } from './button'
import ErrorBlock from "./ErrorBlock";
import LoadingIndicator from './LoadingIndicator'
import SharePage from './../../pages/SharePage'
import { NavLink, redirect } from 'react-router-dom';
import { hashing_string } from './../../utils/hashing_string'


let listId = 0;
let uuid = crypto.randomUUID();

console.log(hashing_string(uuid));

function View() {

    const [list, setList] = useState([])
    const [link, setLink] = useState('Link to share')

    const { data, isPending, isError, error, refetch } = useQuery({
        queryKey: ['files'],
        queryFn: fetchFiles,
    });



    let content = list.map((file) => { return <li key={file.id}>{file.name}</li> });
    let options = [];
    data.map(option => options.push({value:option.id, label:option.name}))

    useEffect(() => {
        console.log(link)
    }, [link]);

    const addToList = (e) => {
        for(let i = 0; i < list.length; i++) {
            if(list[i].name == e.label) {
                return alert('This file was already added.')
            }
        }
        
        setList([
            ...list,
            { id: e.value, name: e.label}
        ])

        const url = `localhost:5173/${uuid}`;

        setLink(url)
    }

    const pushFiles = (event) => {
        <SharePage list={list} />
        // return redirect(`/${uuid}`)
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
                    Pick files from the list.
                </AlertDialogDescription>
                <ul>
                    {content}
                </ul>
                <Select options={options} onChange={(e)=>addToList(e)} />
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                {!link && <AlertDialogAction onClick={(event)=>pushFiles(event)}  >Share</AlertDialogAction>}
                {link && <AlertDialogAction disabled onClick={(event)=>pushFiles(event)}  >Share</AlertDialogAction>}
                </AlertDialogFooter>
                <br/>
                <NavLink to={link}>{link}</NavLink>
            </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default View