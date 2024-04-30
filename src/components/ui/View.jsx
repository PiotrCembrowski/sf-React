import { useEffect, useState } from 'react';
import Select from 'react-select'
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
import { Button } from './button'
import ErrorBlock from "./ErrorBlock";
import LoadingIndicator from './LoadingIndicator'
import { NavLink } from 'react-router-dom';
import { fetchView } from '../../lib/fetchView';
import { resultView } from '../../lib/resultView';


let listId = 0;

function View() {

    const [list, setList] = useState([])
    const [link, setLink] = useState('Link to share')
    const [viewId, setViewId] = useState('')
    
    let share_button = <AlertDialogAction>Share</AlertDialogAction>;

    const { data, isPending, isError, error, refetch } = useQuery({
        queryKey: ['files'],
        queryFn: fetchFiles,
    });

    const { data: fetchedView, mutate } = useMutation({
        mutationFn: fetchView,
        onSuccess: resultView
    })

    let content = list.map((file) => { return <li key={file.id}>{file.name}</li> });
    let options = [];
    data.map(option => options.push({value:option.id, label:option.name}))

    useEffect(() => {
        share_button = <AlertDialogAction disabled >Share</AlertDialogAction>
    }, [link]);

    const addToList = (e) => {
        for(let i = 0; i < list.length; i++) {
            if(list[i].name == e.label) {
                return alert('This file was already added.')
            }
        }
        
        setList(prevState => ([...prevState, { id: e.value, name: e.label}]))
        const uuid = crypto.randomUUID();
        const url = `http://localhost:5173/${uuid}`;

        setLink(url)
        setViewId(uuid)
    }

    useEffect(() => {
        const blob = []
        blob.push(viewId, list)
        mutate(blob)
    }, [viewId, list])

    if(isPending) {
        content = <LoadingIndicator/>
    }

    if(isError) {
        content = <ErrorBlock title="Failed to fetch the files." message={error.info?.message || "Failed to fetch your data. Please try again later."} />
    }

    console.log(fetchedView)

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
                {share_button}
                </AlertDialogFooter>
                <br/>
                <NavLink to={link} target="_blank" rel="noopener noreferrer" >{link}</NavLink>
            </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}

export default View