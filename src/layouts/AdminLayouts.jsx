import { Outlet } from "react-router-dom"
import AdminNavigation from "./AdminNavigation"

function AdminLayouts() {
  return (
    <>
        <AdminNavigation/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default AdminLayouts