"use client";

import {BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';
import {motion} from 'framer-motion'

const services = [
    {
        num:'01',
        title :'Territorial development planning and design',
        description:'The land development field includes a wide range of activities, from the construction of small residential projects to the development of large commercial and industrial facilities .',
        href:"",
    },
    {
        num:'02',
        title :'3D modelling using high tech programmes',
        description:'3D modelling  using high tech programmes enables highly detailed models of construction and infrastructure projects , and enable the client to Vision the project to better understand it.',
        href:"",
    },
    {
        num:'03',
        title :'Designing highrise structure systems',
        description:'Highrise building structure systems involves principles and expertise to design, analyze, and ensure the safety and stability of the building\'s structural systems.',
        href:"",
    },
    {
        num:'04',
        title :'Design',
        description:'Planning, analysis, design, construction, and maintenance of various infrastructure projects.',
        href:"",
    },

]

const Services =() =>{
    return(
        <>
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mt-12">
           <div className="container mx-auto ">
            <motion.div initial={{opacity:0}} animate={{opacity:1, transition :{delay:2, duration:0.4, ease:"easeIn"
            }}} className="grid grid-cols-1 md:grid-cols-3 gap-[60px] ">
               {services.map((service,index)=>{
                return (
                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group border border-white/20 w-full p-5">
                <div className="w-full flex justify-between items-center ">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                
                </div>
                <h2 className="text-[28px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                </div>
                )
               })}
            </motion.div>
           </div>
        </section>
        </>
    )
}

export default Services;