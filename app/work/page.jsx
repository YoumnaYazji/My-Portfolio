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

const projects=[
    {
        num:'01',
        title:'Dolce & Salato',
        description:'Contributed to the design and development of the Dolce & Salato website. ',
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
        architecture:'The project comes out from the need of homs city for new high rise and new hotel because the city has a one luxury hotel , and the project offers luxury apartments starting from 250 square meter apartments to 1000 square meter penthouse with its own elevator and with a view over looking the city  , also the project has shopping complex for retail stores , luxury restaurants with 360 view of the city , indoor and outdoor swimming pools ,gym ,basketball and tennis field ,and 260 space for parking.',
        structure:'The structure system design needed for this tower is special so that the space can be maximised without using internal columns , so the solution was to use a tube in tube system , using this system we maximised the space inside and we created a very strong structure that resist wind+earthquake louds  , this system is very economic because is cheaper than any structure system and more robust also . ',
    },
    {
        num:'02',
        title:'Restaurantly',
        description:'A delivery website for a restaurant where the customer can order online and determine his location using a real map. The website has a Dashboard for managing orders with the ability to view the details of each order individually, and also for managing the meals and foods that are available in the restaurant, displaying them, and the ability to modify them (add, delete, update).',
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
        architecture:'The project comes out from the need of homs city for new high rise and new hotel because the city has a one luxury hotel , and the project offers luxury apartments starting from 250 square meter apartments to 1000 square meter penthouse with its own elevator and with a view over looking the city  , also the project has shopping complex for retail stores , luxury restaurants with 360 view of the city , indoor and outdoor swimming pools ,gym ,basketball and tennis field ,and 260 space for parking.',
        structure:'The structure system design needed for this tower is special so that the space can be maximised without using internal columns , so the solution was to use a tube in tube system , using this system we maximised the space inside and we created a very strong structure that resist wind+earthquake louds  , this system is very economic because is cheaper than any structure system and more robust also . ',
    },
    
    
    
]
const Work =() =>{
    const [project,setProject]=useState(projects[0]);
    const handleSlideChange =(swiper)=>{
        //get Current slide index
        const currentIndex=swiper.activeIndex;
        //update project state based on Current slide index
        setProject(projects[currentIndex]);
    }
    return(
        <>
            <h5 className="text-accent text-center xs:px-10">Visit my projects and keep your feedback</h5>
            <h1 className="text-[66px] text-center xs:text-[58px] xs:px-5">My Projects</h1>
        <motion.div initial={{opacity:0}} animate={{opacity:1, transition :{delay:2, duration:0.4, ease:"easeIn"
            }}}  className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
            <div  className="container xs:max-w-[1300px] ">
            <div className="container mx-auto work-contianer xl:w-[100%] lg:w-[100%] md:w-[100%] xs:max-w-[1500px]">
            <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
              <div className='w-full xl:w-[50%] xs:w-[100%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                <div className='flex flex-col gap-[30px] h-[50%]'>
                    <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                        {project.num}
                    </div>
                    <h2 className='text-[42px] font-bold leading-none text-white graoup-hover:text-accent transition-all duration-500 capitalize'>{project.title}</h2>
                    <p className='text-white/60'>{project.description}</p>
                    <ul className='flex flex-wrap gap-4 text-xl text-accent'>
                    {project.stack.map((item, index) => (
                    <li key={index} className='inline-block text-xl text-accent'>{item.name}
                    {index !== project.stack.length-1 && ","}
                    </li>
                    ))}
                    </ul>
                    <Button style={{width:'30%',padding:'10px'}}>
                     More Info
                    </Button>
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
               <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[450px] mb-12' onSlideChange={handleSlideChange}>
                {projects.map((project ,index)=>{
                    return(
                        <SwiperSlide key={index} className='w-full '>
                           <div className='h-[500px] relative group flex justify-center items-center bg-pink-50/20'>  
                            <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'>

                            </div>
                            <div className='relative w-[700px] h-[500px]'>
                                <Image src={project.image} fill className='' alt='' />
                            </div>
                           </div>
                        </SwiperSlide>
                    )
                })}
               <WorkSliderBtns containerStyles="flex gap-2 mt-10 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'/>

               </Swiper>

              </div>
              
            </div>
          {/*  <div className='mt-10'>
                <h1 className='text-[42px] font-bold leading-none text-white graoup-hover:text-accent transition-all duration-500 capitalize'>Project Description</h1>
                
                <div className='inline-block text-white/60 text-3xl mt-10'>
                Architecture:
                <div className="mt-2">
                <span className='text-accent text-xl'>{project.architecture}</span>
                </div>
                <div className='mt-8 text-white/60 text-3xl ' >
                Structure:
                <div className="mt-2">
                <span className='text-accent text-xl'>{project.structure}</span>
                </div>
                </div>
                </div>
            </div>*
            <Swiper modules={[Autoplay]} spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12 mt-14' autoplay={{delay: 5000,disableOnInteraction: false, }} speed={400}  >
                {project.projectImage.map((projects ,index)=>{
                    return(
                        <SwiperSlide key={index} className='w-full' >
                           <div className='h-[460px] relative group flex justify-center items-center bg-pink-50/20'>  
                            <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'>

                            </div>

                            <div className=''>
                                <Image src={projects.img} fill className='object-cover' alt='' />
                            </div>
        
                           </div>
                        </SwiperSlide>
                    )
                })}
                </Swiper>
                */}
            </div> 
            </div>
            
        </motion.div>
        </>
    )
}

export default Work;