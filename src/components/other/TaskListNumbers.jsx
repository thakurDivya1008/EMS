import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] py-6 px-10 bg-red-400 p-10'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-10 bg-blue-400 p-10'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-10 bg-green-400 p-10'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-10 bg-yellow-400 p-10'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers