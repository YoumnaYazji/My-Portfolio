"use client";

import {BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';
import {motion} from 'framer-motion'

const services = [
    {
        num:'01',
        title :'Front-end Web Development ',
        description:'I specialize in creating dynamic and responsive user interfaces using React.js. With a strong foundation in HTML, CSS, and JavaScript, with a focus on performance.'
    },
    {
        num:'02',
        title :'Back-end Development',
        description:'I specialize in building robust server-side applications using PHP and frameworks like Laravel. My focus is on creating scalable, efficient, and maintainable code.',
        href:"",
    },
    {
        num:'03',
        title :'Real-Time Solutions',
        description:'Using Socket.io, I develop real-time applications that enhance interaction and engagement, making every user experience seamless and dynamic.',
        href:"",
    },
    {
        num:'04',
        title :'Database Management Systems',
        description:'I work with relational databases (MySQL), and ensuring optimal data storage and retrieval strategies.',
        href:"",
    },
    
    {
        num:'05',
        title :'Technical Support Services',
        description:'I provide comprehensive assistance to individuals and businesses facing challenges with their software.I am dedicated to resolving technical issues efficiently.',
        href:"",
    },
    {
        num:'06',
        title :'Content Management Systems',
        description:'I specialize in setting up, customizing, and managing WordPress sites to ensure seamless content creation and publication, and I provide user-friendly solutions.',
        href:"",
    },

]

const Services =() =>{
    return(
        <>
        
            <h5 className="text-accent text-center xs:px-10">SERVICES</h5>
            <h1 className="text-[66px] text-center xs:text-[58px] xs:px-5">What I Do</h1>
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 xl:px-32 md:px-5 xs:px-8">
            <motion.div initial={{opacity:0}} animate={{opacity:1, transition :{delay:2, duration:0.4, ease:"easeIn"
            }}} className="grid grid-cols-1 md:grid-cols-3 gap-[60px] ">
               {services.map((service,index)=>{
                return (
                <div key={index} className="min-h-[45vh] flex-1 flex flex-col justify-center gap-6 group border border-white/20 w-full rounded-xl p-5">
                <div className="w-full flex justify-between items-center ">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                
                </div>
                <h2 className="text-[26px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                </div>
                )
               })}
            </motion.div>
        </section>
        </>
    )
}

export default Services;