import React from 'react'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Pagination = ({ skip, count, paginationHandlerFunction }) => {

    function usersPageNmb(d) {
        if(d == 'forward') {
            paginationHandlerFunction(skip + 10, count + 10)
        }
        if(d == 'back' && skip >= 10) {
            paginationHandlerFunction(skip - 10, count - 10)
        }
        
    }

  return (
    <div className='flex flex-row justify-end mt-2 mr-2'>
        <span>{skip + 1}</span>
        <span className='w-[15px] flex justify-center'>-</span>
        <span>{count}</span>
        <NavigateBeforeIcon className='cursor-pointer' onClick={() => usersPageNmb('back')}/>
        <NavigateNextIcon className='cursor-pointer'  onClick={() => usersPageNmb('forward')}/>
    </div>
  )
}

export default Pagination