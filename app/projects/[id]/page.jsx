// app/projects/[id]/page.js
"use client"
import { notFound } from 'next/navigation';
import projectsData from '../../projects.json';
import {motion} from 'framer-motion'
import { useState } from 'react';
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import {BsArrowUpRight,BsGithub} from 'react-icons/bs'
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '../../../components/ui/tooltip'
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '../../../components/WorkSliderBtns';
import { Autoplay } from 'swiper/modules';
export default function ProjectPage({ params }) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, transition :{delay:2, duration:0.4, ease:"easeIn"
    }}}  className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
    <div  className="container xs:max-w-[1300px] ">
    <div className="container mx-auto work-contianer xl:w-[100%] lg:w-[100%] md:w-[100%] xs:max-w-[1500px]">
    <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
      <div className='w-full xl:w-[50%] xs:w-[100%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
        <div className='flex flex-col gap-[30px] h-[50%]'>
            <h2 className='text-[42px] font-bold leading-none text-white graoup-hover:text-accent transition-all duration-500 capitalize'>{project.title}</h2>
            <p className='text-white/60'>{project.description}</p>
            {/*<ul className='flex flex-wrap gap-4 text-xl text-accent'>
            {project.stack.map((item, index) => (
            <li key={index} className='inline-block text-xl text-accent'>{item.name}
            {index !== project.stack.length-1 && ","}
            </li>
            ))}
            </ul>*/}
            {project.liveDemoLink && (
                            <a
                            href={project.liveDemoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent w-[30%] text-center p-1 rounded-xl text-black link-project"
                            >
                            Live Demo
                            </a>
                            
                            )}
              <div className='border border-white/20'>
              </div>
              <div className='flex items-center gap-4'>
              {/*  <Link href={project.live}>
                <TooltipProvider delayDuration={100} >
                    <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                            <BsArrowUpRight className='text-white text-3xl group-hover:text-accent'/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Live Project</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                </Link>
                <Link href={project.github}>
                <TooltipProvider delayDuration={100} >
                    <Tooltip>
                        <TooltipTrigger className='w-[70px] h-[70px]  rounded-full bg-white/5 flex justify-center items-center group'>
                            <BsGithub className='text-white text-3xl group-hover:text-accent'/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Github repository</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                </Link>*/}
              </div>
        </div>
      </div>
      <div className='w-full xl:w-[50%] '>
        <div>
          
                <div className='w-full '>
                   <div className='relative group flex justify-center items-center bg-pink-50/20'>  
                    <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'>

                    </div>
                    <div className='relative w-full h-full'>
                    <img src={project.image} alt="Project Image" style={{ display: 'block' }} className='rounded-xl project-photo' /> 
                    </div>
                   </div>
                </div>
       </div>
      </div>
    </div>
    <div className='mt-10'>
        <h1 className='text-[42px] font-bold leading-none text-white graoup-hover:text-accent transition-all duration-500 capitalize'>Project Overview</h1>
        
        <p className='text-white/60 mt-8'>{project.projectoverview}</p>
    </div>
   
    </div> 
    </div>
    
</motion.div>
  );
}