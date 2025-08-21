import React from 'react';

const Hero = () => {
  return (
    <div className='bg-black text-white py-20 px-8'>
      <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12'>
        {/* Left side - Profile Image */}
        <div className='flex-shrink-0'>
          <div className='relative'>
            <div className='w-72 h-72 rounded-3xl overflow-hidden border-spacing-4 border-gray-500 hover:border-blue-500 transition-all duration-300'>
              
              <div className='w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl font-bold text-white hover:scale-105 transition-transform duration-300'>
              <img src="/Mypic2.jpg" alt="Tashindu" 
              className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'/>  
              </div>
              
              
            </div>
          </div>
        </div>

        {/* Right side - Text Content */}
        <div className='flex-1 text-left lg:pl-12'>
          <h1 className='text-4xl lg:text-5xl font-bold mb-6'>
            Hi, I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>
              Tashindu Dasanayake
            </span>
          </h1>
          
          <h2 className='text-2xl lg:text-3xl text-gray-300 mb-6'>
            Full-Stack Developer
          </h2>
          
          <p className='text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl'>
            I specialize in building modern and responsive web applications with clean, efficient code.
          </p>
          
          <div className='flex flex-col sm:flex-row gap-4'>
            <button className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transform hover:scale-105 transition-all duration-300'>
              <a href= "#contact"  >Contact Me</a>
            </button>
            
            <button className='border-2 border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300'>
              <a href= "#project"  >View Projects</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;