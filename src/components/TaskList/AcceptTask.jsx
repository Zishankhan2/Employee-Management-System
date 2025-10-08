import React from 'react'

const AcceptTask = ({data}) => {
    return (

        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-violet-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-violet-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}
            </p>
            <div className='mt-5 flex justify-between'>
                <button className='bg-green-500 text-sm px-2 py-1'>Mark as Completed</button>
                <button className='bg-red-500 text-sm px-2 py-1'>Mark as Failed</button>
            </div>
        </div>

    )
}

export default AcceptTask

