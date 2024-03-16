import { useQuery } from "@tanstack/react-query";
import { fetchFiles } from "../lib/fetchFiles";
import LoadingIndicator from './../components/ui/LoadingIndicator';
import ErrorBlock from "../components/ui/ErrorBlock";
import NewFile from "./NewFile";


function FilesList(id) {
  const { data, isPending, isError, error, refetch } = useQuery({
    queryKey: ['files'],
    queryFn: fetchFiles,
    staleTime: 5000
  });

  let content;
  let addButton;

  if(isError) {
    content = <ErrorBlock/>
  }

  if(isPending) {
    content = <LoadingIndicator/>
  }

  if(data) {
    content = (
      <ul>
        {data.map(file => {
          if(file.list_id == id.id) return <li key={file.id}>{file.name}<br/>{file.description}</li>
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

  return (
    <>
      {/* <div>{listName}</div> */}
      {content}
        <div className="py-12">
          {addButton}
        </div>
    </>
  )
}

export default FilesList