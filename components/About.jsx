import React from 'react';

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>Great at making websites</p>
          <p className='py-2 text-gray-600'>
            I have always been interested in technology. While working as a process engineer I needed a way to input test
            data into a spreadsheet that didn't rely on staring at hundreds of cells at once. I figured it couldn't
            be that hard to make a quick form the technician could fill out one sample at a time. I started learning HTML, CSS and a tiny bit of Bootstrap
            to make this form. I found myself enjoying looking at the documentation to learn how these technologies worked.
          </p>
          <p className='py-2 text-gray-600'>
            I realized I wanted to code for a living and so I enrolled in Hack Reactor's Software Engineering Immersive.
            After many hours of work and some bumps along the way, I graduated from Hack Reactor and I am now looking for my first role as a
            software engineer.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out some of my latest projects
          </p>
        </div>
        <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl border-solid border-2 border-black flex justify-center items-center'>
          Photo goes here
        </div>
      </div>
    </div>
  )
}

export default About;