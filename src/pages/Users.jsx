import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Context } from '../App';
import UserItem from '../components/UserItem';
import Pagination from '../components/Pagination';
import MenuIcon from '@mui/icons-material/Menu';


const Users = () => {

    document.title = "Users";

    const [users, setUsers] = useState();
    const {selectedProject, setSelectedProject} = useContext(Context);
    const accessToken = sessionStorage.getItem('accessToken');

    const [skip, setSkip] = useState(0);
    const [count, setCount] = useState(10);

    async function getUsers() {
        console.log(skip, count)
        fetch(`https://tat-staging.topapp.si/dashboardapi/api/reports/users?skip=${skip}&count=10&appBundleId=${selectedProject.bundleId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${accessToken}`
            }
        })
        .then(response => response.json())
        .then((response) => {
            setUsers(response.users)
        })
    }

    const paginationHandlerFunction = (s, c) => {
        setSkip(s);
        setCount(c)
    }

    useEffect(() => {
        if(!accessToken) { window.location.href = "/login";}
    }, [])
    

    useEffect(() => {      
        getUsers();    
    }, [selectedProject, skip])

    const [displayNavbar, setDisplayNavbar] = useState(false);

    function closeNavbar() {
        setDisplayNavbar(!displayNavbar);
    }
    
  return (
    <div className='flex flex-row h-full w-[100vw] overflow-visible'>
        <div onClick={() => setDisplayNavbar(true)} className={`${displayNavbar ? 'hidden' : 'flex'} lg:hidden absolute top-4 left-4 cursor-pointer`}>
            <MenuIcon />
        </div>
        <div className={`${displayNavbar ? 'flex' : 'hidden'} lg:relative absolute h-full lg:block z-99`}>
            <Navbar closeNavbar={closeNavbar} />
        </div>
        <div className='flex justify-center items-center h-full w-full flex-col p-5'>
            <div className='w-[90%] lg:w-[1080px] h-[60px] align-left'>
                <h1 className='font-semibold text-[24px]'>Users</h1>
            </div>
            
            <div className='relative flex flex-col w-[90%] lg:w-[1080px] shadow-md pb-4 rounded-2xl overflow-auto'>
                <div className='flex flex-row items-center h-[40px] bg-slate-100 font-bold text-slate-600 rounded-t-2xl'>               
                    <div className='h-[50px] min-w-[400px] p-2 flex items-center'>ID</div>
                    <div className='h-[50px] min-w-[200px] p-2 flex items-center'>Install Date</div>
                    <div className='h-[50px] min-w-[200px] p-2 flex items-center'>Created Date</div>
                    <div className='h-[50px] min-w-[200px] p-2 flex items-center'>Has Receipt</div>
                </div>
                <div>
                    {users && users.map((user, i) => {
                        return (
                            <UserItem key={i} user={user} />
                        )
                    })
                    }
                </div>
                <Pagination skip={skip} count={count} paginationHandlerFunction={paginationHandlerFunction} />
            </div>
        </div>
    </div>
  )
}

export default Users