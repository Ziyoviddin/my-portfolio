import React from 'react'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full  h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className='text-[#3b37b5]'>Ziyoviddin</span>
                </h1>
                <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I'm a front-end web developer specializing in building web applications. Currently, I'm focused on building responsive front-end web applications while learning back-end technologies. </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href='https://www.linkedin.com/in/ziyoviddin-akramov-346476245/'  target='_blank' alt="ziyoviddin-akramov"> 
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                           <FaLinkedinIn/>
                        </div>
                    </a>
                    <a href='https://github.com/Ziyoviddin'  target='_blank' alt="Ziyoviddin">
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <FaGithub/>
                        </div>
                    </a>
                    <a href="mailto:ziyoviddinakramov@gmail.com"  target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                <AiOutlineMail/>
                        </div>
                    </a>
                    <Link href='/contact'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
  }

export default Main