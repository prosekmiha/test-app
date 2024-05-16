import React from 'react'

const UserItem = ( user ) => {

  return (
    <div className='flex flex-row border-b'>
        <div className='flex flex-col h-[60px] min-w-[400px] p-2'>
            <div>#{user.user.id}</div>
            <div className='text-slate-600 text-[14px]'>{user.user.email}</div>
        </div>
        <div className='flex flex-col h-[60px] min-w-[200px] p-2'>
            <div>{user.user.installDate.substring(0, 10)}</div>
            <div>{user.user.installDate.substring(11, 16)}</div>
        </div>
        <div className='flex flex-col h-[60px] min-w-[200px] p-2'>
            <div>{user.user.created.substring(0, 10)}</div>
            <div>{user.user.created.substring(11, 16)}</div>
        </div>
        <div className='h-[60px] min-w-[200px] p-2 flex items-center'>
            {
              user.user.hasReceipt == 0 ? 
                <span className='text-[red] font-semibold rounded-md text-[14px] w-[28px] h-[22px] flex justify-center bg-[#fcbbc4]'>No</span> : 
                <span className='text-[green] font-semibold rounded-md text-[14px] w-[28px] h-[22px] flex justify-center bg-[#bdffd1]'>Yes</span>
            }
        </div>
    </div>
  )
}

export default UserItem