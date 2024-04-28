import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  return (
<>
<nav className="bg-blue-500 p-4">
  <div className="container mx-auto flex justify-between items-center">
    <a href="/" className="text-white text-xl font-bold">
        <p>ForensicsBlog</p>
        <p className='text-sm font-normal'>Where Every Detail Tells a Story</p>
    </a>

    <div className="hidden md:flex space-x-4">
      <a href="/" className="text-white hover:text-gray-200">Articles</a>
      <a href="/" className="text-white hover:text-gray-200">Cases</a>      
      <a href="/" className="text-white hover:text-gray-200">About</a>
      <a href="/contact" className="text-white hover:text-gray-200">Contact</a>
    </div>
    <div className='md:hidden text-white'>
    <RxHamburgerMenu size={24}/>
    </div>
  </div>
</nav>
</> 
 )
}

export default Navbar