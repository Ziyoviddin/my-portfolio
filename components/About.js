import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/assets/me.png';
import Link from "next/link"

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2 '>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className=' py-2 text-gray-600'>Hi. I’m Ziyoviddin, a freelance Front-end Developer. 
                 I like to code things from scratch, and enjoy bringing ideas to life in the browser. I like to develop. In my spare time I enjoy DIY, building my own projects. My preferred tools are React, Next.js and Tailwind.
                 I’m interested in learning new skills, discover new places and people. I always try to widen my horizon . </p>
                <p className=' py-2 text-gray-600'>
                Currently, I’m focused on writing modern, performant, maintainable code and 
                working with different tools, platforms, frameworks and content management systems and also improving my skills.</p>
                <p className=' py-2 text-gray-600 underline hover:decoration-teal-500 cursor-pointer'>
                  <Link href='/#projects'>Check out some of my latest projects.</Link>
                </p>
                
            </div>
            <div className='max-lg:hidden relative w-full h-[400px]  rounded-xl  p-4 hover:scale-105 ease-in duration-300 '>
                    <Image className='rounded-xl absolute bottom-0 left-0 pb-[80px] scale-125 ' src={AboutImg} alt="/"/>
            </div>
        </div>
    </div>
  )
}

export default About