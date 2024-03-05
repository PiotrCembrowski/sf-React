import Files from "./Files";

function Admin() {
  return (
    <>
      <h1>Admin Page</h1>
      <div className="grid grid-flow-col">
        <div>
          <ul>
            <li>First group</li>
            <li>Second group</li>
          </ul>
        </div>
        <div>
          <Files/>
        </div>
      </div>
    </>
  )
}

export default Admin