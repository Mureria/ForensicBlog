import React from 'react'
import { MdOutlineEmojiEmotions } from "react-icons/md";


const Comment = () => {
  return (
    <div className='border-t-2'>
        <div className='font-bold text-base mt-5 md:mt-10 pb-5 '>
            <p>141 Comments</p>
        </div>
        <div className='flex gap-3'>
            <div className='flex justify-center items-center font-bold w-8 h-8 rounded-full bg-sky-500'>C</div>
            <div className='flex-1'>
                <div>
                <input type="text" placeholder='Add a comment' className='outline-none border-b w-full focus:border-sky-500' />
                <div className='flex justify-between py-3 items-center'>
                    <div><MdOutlineEmojiEmotions /></div>
                    <div className='flex gap-3'>
                        <button className='border hover:border-sky-500 rounded-full text-sm px-3 py-1'>Cancel</button>
                        <button className='border text-white bg-sky-500 rounded-full text-sm px-3 py-1'>Send</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className='flex gap-2 md:gap-3 mt-4 '>
        <div className='flex justify-center items-center font-bold w-8 h-8 rounded-full bg-sky-500'>
            <img src="https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-8 h-8 rounded-full object-cover' />
        </div>
            <div className='text-sm'>
                <p className='font-semibold'>@maryeyrt43</p>
                <p className='text-xs text-slate-400'>3 months ago</p>
                <p className='my-2'>Godammit!</p>
            </div>
        </div>
    </div>
  )
}

export default Comment