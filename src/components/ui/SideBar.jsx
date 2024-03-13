import { forwardRef } from "react"
import { NavLink } from "react-router-dom";

const SideBar = forwardRef(({ showNav }, ref) => {


    return (
        <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm border bg-gray-100/40">
            <div className="flex justify-center mt-6 mb-14">

            </div>
            <div className="flex flex-col">
                <NavLink to='/'>
                    <div className="pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center">
                        Home
                    </div>
                </NavLink>
                <NavLink to='files'>
                    <div className="pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center">
                        Files
                    </div>
                </NavLink>
            </div>
        </div>
    )
});

SideBar.displayName = "SideBar";

export default SideBar