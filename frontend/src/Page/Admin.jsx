import React from 'react'

const Admin = () => {
  return (
    <div className="container mx-auto flex justify-between items-start  px-4">
      <div className='mt-3 md:max-w-[700px] md:mx-auto w-full md:mt-10'>
        <h1 className='text-xl md:text-3xl font-bold tracking-tighter pb-3'>Create Post</h1>
        <div className='flex flex-col bg-slate-100 md:max-w-[700px] md:mx-auto md:flex-row md:justify-between md:items-baseline space-y-10 px-4 pt-4 pb-10 rounded-md'>
          <div className='flex flex-col gap-1 space-y-4'>
          <div className='flex flex-col gap-1' >
                <label htmlFor="" className='font-medium tracking-tight'>Title</label>
                <input type="text" placeholder='Title'  className='py-2 px-2 rounded-sm outline-none bg-inherit border-b border-sky-400'/>
            </div>
            <div className='flex flex-col gap-1'>
            <label htmlFor="" className='font-medium tracking-tight'>Blog</label>
            <input type="text" placeholder='Write Blog'  className=' bg-inherit border-b border-sky-400 py-3 px-2 rounded-sm outline-none md:w-[400px]'/>
            </div> 
            <div className='flex flex-col gap-1'>
            <label htmlFor="" className='font-medium tracking-tight'>Image</label>
            <input type="file" placeholder='Drag or select Image' className='border-b border-sky-400 py-4' />
            </div> 
          </div> 
          <div className='flex flex-col space-y-4'>
            <div className='flex flex-col gap-1' >
                <label htmlFor="" className='font-medium tracking-tight'>Category</label>
                <input type="text" placeholder='Category'  className='py-2 px-2 rounded-sm outline-none bg-inherit border-b border-sky-400'/>
            </div>
            
            <div className='flex flex-col gap-1' >
                <label htmlFor="" className='font-medium tracking-tight'>Author</label>
                <input type="text" placeholder='Author'  className='py-2 px-2 rounded-sm outline-none bg-inherit border-b border-sky-400'/>
            </div>
          </div>
        </div>
        <div className='mt-4 text-white font-semibold bg-sky-500 text-center py-2 rounded-md md:max-w-[100px] md:mx-auto'>
          <button>Publish</button>
        </div>

      </div>
    </div>
  )
}

export default Admin