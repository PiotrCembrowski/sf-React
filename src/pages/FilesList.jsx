import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchFiles } from "../lib/fetchFiles";
import LoadingIndicator from './../components/ui/LoadingIndicator';
import ErrorBlock from "../components/ui/ErrorBlock";
import NewFile from "./NewFile";
import View from "./../components/ui/View"
import { deleteFiles } from './../lib/deleteFiles'
import { queryClient } from './../lib/query_client'
import pdfIcon from './../assets/pdf.png'


function FilesList(id) {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['files'],
    queryFn: fetchFiles,
    staleTime: 500
  });

  const { mutate } = useMutation({
    mutationFn: deleteFiles,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['files'] });
    }
  })

  const deleteFileHandler = (id) => {
    mutate(id)
  }

  let content;
  let addButton;
  let addView;

  if(isError) {
    content = <ErrorBlock title="Failed to fetch the filelist." message={error.info?.message || "Failed to fetch your data. Please try again later."} />
  }

  if(isPending) {
    content = <LoadingIndicator/>
  }

  if(data) {
    content = (
      <ul className="my-4">
        {data.map(file => {
          if(file.list_id == id.id) return <li key={file.id} className="border-2 p-2 w-52">
            <img src={pdfIcon}/><hr/>
            <h3 className="mt-4 font-bold">{file.name}</h3><br/>
            <p>{file.description}</p><br/>
            <button className="border bg-red-700 text-white px-2 py-1 rounded-xl" onClick={() => deleteFileHandler(file.id)}>delete</button></li>
        }
        )}
      </ul>
    )
  }

  if(id.id != '') {
    addButton = (
      <NewFile pickedListId={id} />
    )
  }

  if(id.id != '') {
    addView = (
      <View />
    )
  }

  return (
    <>
      {/* <div>{listName}</div> */}
      {content}
        <div className="py-12">
          {addButton}
          {addView}
        </div>
    </>
  )
}

export default FilesList