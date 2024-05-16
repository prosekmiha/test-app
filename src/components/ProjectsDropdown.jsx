import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../App';


const ProjectsDropdown = () => {

    const {selectedProject, setSelectedProject} = useContext(Context);
    const [projects, setProjects] = useState([]);
    const accessToken = sessionStorage.getItem('accessToken');

    async function getProjects() {
        fetch('https://tat-staging.topapp.si/dashboardapi/api/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${accessToken}`
            }

        })
        .then(response => response.json())
        .then((response) => {
            const data = response.projects;
            setSelectedProject(data[0])
            setProjects(data)          
        })
    }

    useEffect(() => {
        getProjects();
    }, [])

    function handleChange(i) {
        setSelectedProject(projects[i])
        setDisplayDropdown(!displayDropdown)
    }

    const [displayDropdown, setDisplayDropdown] = useState(false);

  return (
    <section>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a project</label>
      <button onClick={() => setDisplayDropdown(!displayDropdown)} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-5 py-2.5 text-center flex justify-between items-center" type="button">
        {selectedProject && selectedProject.name}
        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
      </svg>
      </button>

      
      <div className={`${displayDropdown ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700`}>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            
            {projects?.map((project, i) => { 
              return (
                  <li key={i} className='relative bg-white'>
                    <a onClick={() => handleChange(i)} className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">{project.name}</a>
                  </li>
              )
              })}
          </ul>
      </div>
    </section>

  )
}

export default ProjectsDropdown