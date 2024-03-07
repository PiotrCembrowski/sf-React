import { Fragment } from 'react'
import { Menu, Transition, Popover } from "@headlessui/react"
import { NavLink } from 'react-router-dom'
import {
    Bars3CenterLeftIcon,
    PencilIcon,
    ChevronDownIcon,
    CreditCardIcon,
    Cog8ToothIcon,
    BellIcon,
    CheckIcon,
} from "@heroicons/react/24/solid"
import logo from './../../assets/blank.png'

function TopBar({ showNav, setShowNav }) {
  return (
    <div className='fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms]'>
        <div className='pl-16'>
            <Bars3CenterLeftIcon className='h-8 w-8 text-gray-700 cursor-pointer' onClick={()=>setShowNav(!showNav)}/>
        </div>
        <div className="flex items-center pr-16">
            <Popover className="relative">
                <Popover.Button className="outline-none mr-8 cursor-pointer text-gray-700">
                    <BellIcon className='h-6 w-6'/>
                </Popover.Button>
                <Transition 
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform scale-95'
                    enterTo='transform scale-100'
                    leave='transition ease-in duration=75'
                    leaveFrom='transform scale-100'
                    leaveTo='transform scale-95'
                >
                    <Popover.Panel className="absolute -right-16 z-50 mt-2 bg-white shadow-sm rounded w-96">
                        <div className='relative p-3'>
                            <div className="flex justify-between item-center w-full">
                                <p className='text-gray-700 font-medium'>
                                    Notifications
                                </p>
                                <a href="#" className="text-sm text-orange-500">
                                    Mark all as read
                                </a>
                            </div>
                            <div className='mt-4 grid gap-4 grid-cols-1 overflow-hidden'>
                                <div className='flex'>
                                    <div className='rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center'>
                                        <CheckIcon className='h-4 w-4 text-green-600' />
                                    </div>
                                    <div className="ml-4">
                                        <p className='font-medium text-gray-700'>
                                            Notification Title
                                        </p>
                                        <p className='text-gray-500 truncate'>
                                            First notification text testing
                                        </p>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className='rounded-full shrink-0 bg-green-200 h-8 w-8 flex items-center justify-center'>
                                        <CheckIcon className='h-4 w-4 text-green-600' />
                                    </div>
                                    <div className="ml-4">
                                        <p className='font-medium text-gray-700'>
                                            Notification Title
                                        </p>
                                        <p className='text-gray-500 truncate'>
                                            First notification text testing
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center items-center">
                        <picture>
                            <img src={logo} alt="profile picture" className='rounded-full h-8 mr-8 border-2 border-white shadow-sm' />
                        </picture>
                        <span className="font-medium text-gray-700">Piotr C.</span>
                        <ChevronDownIcon className='ml-2 h-4 w-4 text-gray-700'/>
                    </Menu.Button>
                </div>
                <Transition 
                    as={Fragment}
                    enter='transition ease-out duration-100'
                    enterFrom='transform scale-95'
                    enterTo='transform scale-100'
                    leave='transition ease-in duration=75'
                    leaveFrom='transform scale-100'
                    leaveTo='transform scale-95'
                >
                    <Menu.Items className="absolute roght-0 w-56 z-50 mt-2 origin-top-right bg-white rounded shadow-sm">
                        <div className='p-1'>
                            <Menu.Item>
                                <NavLink href="#" className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                                    <PencilIcon className='h-4 w-4 mr-2' />
                                    Edit
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item>
                                <NavLink href="#" className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                                    <CreditCardIcon className='h-4 w-4 mr-2' />
                                    Billing
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item>
                                <NavLink href="#" className="flex hover:bg-orange-500 hover:text-white text-gray-700 rounded p-2 text-sm group transition-colors items-center">
                                    <Cog8ToothIcon className='h-4 w-4 mr-2' />
                                    Settings
                                </NavLink>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    </div>
  )
}

export default TopBar