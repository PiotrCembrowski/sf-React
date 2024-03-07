import { Outlet } from "react-router-dom"
import { Fragment, useState } from "react"
import SideBar from "../components/ui/SideBar"
import { Transition } from "@headlessui/react"
import TopBar from "../components/ui/TopBar"

function AdminLayouts() {
  const [showNav, setShowNaw] = useState(true)

  return (
    <>
      <TopBar showNav={showNav} setShowNaw={setShowNaw} />
      <Transition as={Fragment} show={showNav} enter="transform transition duration-[400ms]" enterFrom="-translate-x-full" enterTo="translate-x-0" leave="transform duration-[400ms] transition ease-in-out" leaveFrom="translate-x-0" leaveTo="-translate-x-full">
        <SideBar showNav={showNav}/>
      </Transition>
      <main className='pt-16 transition-all duration-[400ms] pl-56'>
        <Outlet />
      </main>
    </>
  )
}

export default AdminLayouts