'use client';
import { Button } from '@/components/ui/button';
import {motion} from 'framer-motion'
import { useState } from 'react';
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import {BsArrowUpRight,BsGithub} from 'react-icons/bs'
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip'
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';
import { Autoplay } from 'swiper/modules';
import { RiGlobalLine } from "react-icons/ri";


const projects=[
    {
        num:'01',
        title:'Dolce & Salato',
        description:'Contributed to the design and development of the Dolce & Salato website. ',
        icon:<RiGlobalLine/>,
        stack:[
            {
                name:'React JS',
            },
            {
                name:'Redux',
            },
            {
                name:'Bootstrap',
            },
            
            

        ],
        image:'/dolce.png',
    },
    {
        num:'02',
        title:'Restaurantly',
        description:'A delivery website for a restaurant where the customer can order online and determine his location using a real map. The website has a Dashboard for managing orders with the ability to view the details of each order individually, and also for managing the meals and foods that are available in the restaurant, displaying them, and the ability to modify them (add, delete, update).',
        icon:<RiGlobalLine/>,
        stack:[
            {
                name:'React JS',
            },
            {
                name:'Redux',
            },
            {
                name:'Bootstrap',
            },
            {
                name:'Chart JS',
            }, 
            {
                name:'Laravel ',
            },
            {
                name:'MySQL',
            },
           
        ],
        image:'/coverSkyTower.jpg',
    },
    
    
    
]
const Work =() =>{

    return(
        <>
            <h5 className="text-accent text-center xs:px-10">Visit my projects and keep your feedback</h5>
            <h1 className="text-[66px] text-center xs:text-[58px] xs:px-5">My Projects</h1>
              <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 xl:px-32 md:px-5 xs:px-8 rounded-xl">
                         <motion.div initial={{opacity:0}} animate={{opacity:1, transition :{delay:2, duration:0.4, ease:"easeIn"
                         }}} className="grid grid-cols-1 md:grid-cols-3 gap-[60px]  ">
                            {projects.map((project,index)=>{
                             return (
                             <div key={index} className="min-h-[45vh] flex-1 flex flex-col justify-center gap-6 group border border-white/20 w-full rounded-xl p-5">
                          
                          <div className='bg-accent rounded-xl' style={{display: 'inline-block', padding: '10px' }}>
                            <img src={project.image} alt="Project Image" style={{ display: 'block' }} className='rounded-xl' /> 
                            </div>
                             <h2 className="text-[26px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 px-2">{project.title}</h2>
                             <p className="text-white/60 px-2">{project.description}</p>
                             <p className='px-2 text-white/60' style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '5px',fontSize:'23px' }}>{project.icon}</span> Website
                            </p>
                            </div>
                             )
                            })}
                         </motion.div>
                     </section>
        </>
    )
}

export default Work;