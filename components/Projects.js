import React from 'react';
import Image from 'next/image';
import pavlovniyaImg from '../public/assets/projects/pavlovniya.png'
import memeImg from '../public/assets/projects/memeImage.png'
import Link from 'next/link';
import ProjectItem from './ProjectItem';

const Projects =()=>{
    return(
        <div id='projects' className='w-full'>
           <div className='max-w-[1240] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Build</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                title='Pavloniya.uz' 
                backgroundImg={pavlovniyaImg} 
                propertyUrl='/pavloniya'
                />
                <ProjectItem 
                title='Meme Generator' 
                backgroundImg={memeImg} 
                propertyUrl='/meme'
                />
            </div>
           </div>
        </div>
    )
}

export default Projects