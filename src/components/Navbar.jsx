import React from 'react'
import { Link } from 'react-router-dom'
import ProjectsDropdown from '../components/ProjectsDropdown'
import LogoutButton from './LogoutButton'
import CloseIcon from '@mui/icons-material/Close';

export const Navbar = ({closeNavbar}) => {
  return (
    <div className="flex flex-col items-center w-[250px] h-full text-gray-700 bg-gray-100 rounded z-[100]">
        <div onClick={() => closeNavbar()} className='absolute top-2 right-2 flex lg:hidden cursor-pointer'>
          <CloseIcon />
        </div>

        <div className='w-full h-[120px] border-b border-gray-300 p-4 mt-10'>
          <ProjectsDropdown />
        </div>
        <div className="w-full px-2">
          <div className="flex flex-col items-center w-full">

            <Link to="/users" className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-300">
              <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="ml-2 text-sm font-medium">Users</span>
            </Link>
          </div>

          
        </div>
        <div className='absolute bottom-5 left-5'>
          <LogoutButton />
        </div>
        
      </div>
  )
}
