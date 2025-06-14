import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gradient-to-r from-slate-500 to-slate-700 px-7 md:px-20 lg:px-24'>
        <div className='text-white container py-4 flex justify-center md:justify-between items-center'>
            <div className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-2xl font-bold hidden md:inline'>
                Tashindu Dasanayake
            </div>
            <div className='space-x-8'>
                <a href="#home" className='hover:text-green-400 font-bold transition-colors duration-300'>Home</a>
                <a href="#about" className='hover:text-green-400 font-bold transition-colors duration-300'>About Me</a>
                <a href="#skills" className='hover:text-green-400 font-bold transition-colors duration-300'>Technical Skills</a>
                <a href="#project" className='hover:text-green-400 font-bold transition-colors duration-300'>Projects</a>
                <a href="#contact" className='hover:text-green-400 font-bold transition-colors duration-300'>Contact</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar