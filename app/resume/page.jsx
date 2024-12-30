"use client";

import {FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaBootstrap,FaSass,FaLaravel,FaWordpress,FaGitAlt, FaGithub   } from 'react-icons/fa'
import { FaRegUser } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa6";
import { LiaLanguageSolid } from "react-icons/lia";
import { SiFreelancer,SiJira,SiJquery,SiMongodb,SiMysql, SiPostman   } from "react-icons/si";
import { FaLink } from "react-icons/fa6";

import { SiTailwindcss,SiNextdotjs} from 'react-icons/si'
import { Tabs,TabsContent,TabsList,TabsTrigger } from '@/components/ui/tabs'
import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from '@/components/ui/tooltip'
import {ScrollArea} from '@/components/ui/scroll-area'
import { motion } from 'framer-motion';

const about={ 
    title:'About me',
    description:'I am a Web Developer specializing in front end development, aiming towards a better understanding and development my knowledge at this field. Experienced with development cycle for dynamic web projects.',
    info :[
        {
            fieldName:'Name',
            fieldValue:'Youmna Yazji',
            icon:<FaRegUser/>
        },
        {
            fieldName:'Phone',
            fieldValue:'+963 968 569 238',
            icon:<BsTelephone/>
        },
        {
            fieldName:'Experience',
            fieldValue:'+ 2 Years',
            icon:<FaLink/>
        },
        {
            fieldName:'Email',
            fieldValue:'youmna.yazji@gmail.com',
            icon:<FaRegEnvelope/>
        },
        {
            fieldName:'Freelance',
            fieldValue:'Available',
            icon:<SiFreelancer/>
        },
        {
            fieldName:'Languages',
            fieldValue:'Arabic, English',
            icon:<LiaLanguageSolid/>
        }

    ]
}
const experience ={
    icon:'',
    title:'My Experience',
    description:'Frontend Software Engineer with two years of experience in developing and implementing user-friendly web interfaces for projects [web applications, e-commerce platforms, interactive dashboards]. Proven ability to collaborate effectively within development teams to deliver high-quality, performant, and accessible frontend solutions.',
    items:[
        {
        company:'Freelancer.',
        position:'Software Engineer & Frontend developer',
        duration :'2023- Present',
    },
]
}
const education ={
    icon:'',
    title:'My Education',
    description: 'My education in software engineering at Homs University has provided me with a strong foundation in software development and information systems, and I\’m a passionate lifelong learner and committed to continually expanding my knowledge and skills in software engineering to stay up to date with the latest technologies.'
    ,
    items:[
        {
        instituation:'Homs University',
        degree:'Bachelor\'s Degree in Software Engineering',
        duration :'2019-2024',
    },
  
]
}
const skills ={
    icon:'',
    title:'My Skills',
    description:'Proficient in managing complex software projects, collaborating effectively with cross-functional teams (including designers, backend developers, and product managers), and balancing technical feasibility with user experience and business requirements. Committed to building robust, user-friendly, and maintainable frontend solutions that enhance user engagement and satisfaction.',
    skillList:[
        {   
        icon:<FaHtml5/>,
        name:'HTML5'
    },
    {
        icon:<FaCss3/>,
        name:'CSS3'
    },
    {
        icon:<SiTailwindcss/>,
        name:'Tailwind'
    },
    {
        icon:<FaBootstrap/>,
        name:'Bootstrap'
    },  
    {
        icon:<FaSass/>,
        name:'Sass'
    },  
    {
        icon:<FaJs/>,
        name:'JavaScript'
    },
    {
        icon:<SiJquery/>,
        name:'Jquery'
    },
    {
        icon:<FaReact/>,
        name:'React JS'
    },
    {
        icon:<SiNextdotjs/>,
        name:'Next JS'
    },
    {
        icon:<FaFigma/>,
        name:'Figma'
    },
    {
        icon:<FaLaravel/>,
        name:'Laravel'
    },
    {
        icon:<SiMysql/>,
        name:'My SQL'
    },
    {
        icon:<SiMongodb/>,
        name:"MongoDB"
    },
    {
        icon:<FaGitAlt/>,
        name:'Git'
    },
    {
        icon:<FaGithub/>,
        name:'Github'
    },
     {
        icon:<SiPostman/>,
        name:'Postman'
     },
     {
        icon:<SiJira/>,
        name:'Jira'

     },
    {
        icon:<FaWordpress/>,
        name:'Wordpress'
    },
   
]
}


const Resume =() =>{
    return(
        <>
        <h5 className="text-accent text-center xs:px-10">+2 years of experience</h5>
            <h1 className="text-[66px] text-center xs:text-[58px] xs:px-5">My Resume</h1>
            <div className="px-12 mt-5 xl:w-[90%] mx-auto xs:w-full md:x-full">
                <Tabs defaultValue='education' className='gap-[60px]'>
                    <TabsList className=' w-full mx-auto xl:mx-0 gap-[60px] md:flex-col md:items-center md:gap-4 lg:flex-row lg:items-start lg:mx-auto xs:flex-col xs:items-center xl:gap-4 xl:mx-0'>
                        <TabsTrigger value='education' className="xl:text-[18px] md:text-[24px]">Education</TabsTrigger>
                        <TabsTrigger value='experience'className="xl:text-[18px] md:text-[24px]" >Experience</TabsTrigger>
                        <TabsTrigger value='skills' className="xl:text-[18px] md:text-[24px]">Skills</TabsTrigger>
                        <TabsTrigger value='about' className="xl:text-[18px] md:text-[24px]">About Me</TabsTrigger>

                    </TabsList>
                    <div className='mt-10 w-full'>

                    <TabsContent value='education' className='w-full h-full'>
                    <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='xl:text-4xl md:text-xl xs:text-4xl  xl:px-5 font-bold'>
                                    {education.title}
                                </h3>
                                <p className='text-white/60 xl:text-[18px] md:text-[22px] xl:px-5'>
                                {education.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] xs:px-5 '>
                                        {education.items.map((item,index)=>{
                                            return(
                                                <li key={index} className='bg-[#232329] h-[184px] xl:h-[200px] lg:h-[200px] md:-[200px] sm:h-[200px] xs:h-[300px] md:text-xl sm:text-xl xs:text-xl py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span  className='text-accent'>
                                                        {item.duration}
                                                    </span>
                                                    <h3 className='text-2xl mt-2 text-center lg:text-left md:text-xl sm:text-xl xs:text-xl xs:mb-2'>
                                                        {item.degree}
                                                    </h3>
                                                        <p className='text-white/60 text-xl mt-2 sm:text-xl xs:text-xl xs:mb-2'>
                                                            {item.instituation}
                                                        </p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                             </div>
                        </TabsContent>
                        <TabsContent value='experience' className='w-full h-full'>  
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                        <h3 className='xl:text-4xl md:text-xl xs:text-4xl  xl:px-5 font-bold'>
                        {experience.title}
                                </h3>
                                <p className='text-white/60 xl:text-[18px] md:text-[22px] xl:px-5'>
                                {experience.description}</p>
                                <ScrollArea className='h-[400px]'>
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] xs:px-5 '>
                                {experience.items.map((item,index)=>{
                                            return(
                                                <li key={index} className='bg-[#232329] h-[184px] xl:h-[200px] lg:h-[200px] md:-[200px] sm:h-[200px] xs:h-[300px] md:text-xl sm:text-xl xs:text-xl py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span  className='text-accent'>
                                                        {item.duration}
                                                    </span>
                                                    <h3 className='text-2xl mt-2 text-center lg:text-left md:text-xl sm:text-xl xs:text-xl xs:mb-2'>
                                                        {item.position}
                                                    </h3>
                                                        <p className='text-white/60 text-xl mt-2 sm:text-xl xs:text-xl xs:mb-2'>
                                                            {item.company}
                                                        </p>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                             </div>
                        </TabsContent>
                        <TabsContent value='skills' className='w-full h-full'>
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                        <h3 className='xl:text-4xl md:text-xl xs:text-4xl  xl:px-5 font-bold'>
                        {skills.title}
                                    </h3>
                                    <p className='text-white/60 xl:text-[18px] md:text-[22px] '>
                                    {skills.description}
                                    </p>
                                <ul className='grid grid-cols-2 mt-6 sm:grid-cols-3 xs:grid-cols-1 md:grid-cols-4 gap-4 xl:gap-[30px] xs:px-5'>                                    {skills.skillList.map((skill,index)=>{
                                        return(
                                            <li key={index}>
                                               <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}<span className='text-xl'>{skill.name}</span></div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='capitialize'>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                               </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                             </div>
                        </TabsContent>
                        <TabsContent value='about' className='w-full h-full'>
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                        <h3 className='xl:text-4xl md:text-xl xs:text-4xl  xl:px-5 font-bold'>
                        {about.title}
                                </h3>
                                <p className='text-white/60 xl:text-[18px] md:text-[22px]'>
                                {about.description}</p>
                                <ul className="gap-y-6 xl:mx-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                {about.info.map((item, index) => (
                                <li
                                key={index}
                                className={`bg-[#232329]  text-[18px] h-[80px] w-full px-8 rounded-xl flex items-center justify-center xl:justify-start gap-4 ${
                                  index >= 0 ? "mt-6" : ""
                                }
                              
                                `}
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-accent text-[18px]">{item.icon}</span> 
                                  <span className="text-white/60">{item.fieldName}</span> 
                                </div>
                                <span className="text-white">{item.fieldValue}</span>
                              </li>
                                ))}
                                </ul>
                             </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div> 
        </>
    )
}

export default Resume;