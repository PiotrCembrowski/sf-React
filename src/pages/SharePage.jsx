import { Fragment, useState } from 'react'
import { useParams } from 'react-router-dom'
import pdfIcon from './../assets/pdf.png'
import { fetchView } from "./../lib/fetchView";
import { useMutation } from '@tanstack/react-query';

function SharePage(list) {
  const { sharePageId } = useParams();

  const [ files, setFiles ] = useState([]);

  const { mutate } = useMutation({
    mutationFn: fetchView,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['view'] });
    }
  })

  mutate({
    id: sharePageId,
    files: files,
  })

  const { data, isPending, isError, error, refetch} = useQuery({
    queryKey: ['view'],
    queryFn: fetchView(sharePageId),
  });
  
  return (
    <Fragment>
      <h1>page params:{sharePageId}</h1>
      {
        files.map(file => {
        return ( 
          <div className="border-2 p-2 w-52">
            <img src={pdfIcon}/><hr/>
            <h3 className="mt-4 font-bold">{file.name}</h3><br/>
            <p>{file.description}</p><br/>
            <button className="border bg-red-700 text-white px-2 py-1 rounded-xl">delete</button>
          </div>
        )
        })
      }
    </Fragment>
  )
}

export default SharePage