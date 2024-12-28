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
    description:'Dedicated and experienced Civil Engineer with extensive knowledge of engineering principles, theories, specifications, a standards. Proven track record of finishing complex projects underbudget and ahead of schedule. Substantial knowledge and experience with environmentally sustainable construction.',
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
    description:'Highly skilled and dedicated civil engineer with 1 years of experience in designing, constructing, and managing various infrastructure projects.',
    items:[
        {
        company:'KSA Inc.',
        position:'Civil Engineer',
        duration :'2024- Present',
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
    description:'Proficient in managing large-scale projects, collaborating with multidisciplinary teams, and balancing technical requirements with economic and environmental considerations. Committed to creating safe, efficient, and sustainable solutions that enhance quality of life for communities worldwide.',
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
            <div className="px-12 mt-5 xl:w-[90%] mx-auto xs:w-full md:x-full">
                <Tabs defaultValue='education' className='gap-[60px]'>
                    <TabsList className=' w-full mx-auto xl:mx-0 gap-[60px] md:flex-col md:items-center md:gap-4 lg:flex-row lg:items-start lg:mx-auto xs:flex-col xs:items-center xl:gap-4 xl:mx-0 xs:px-5'>
                        <TabsTrigger value='education' className="text-[18px] md:text-[22px]">Education</TabsTrigger>
                        <TabsTrigger value='experience'className="text-[18px] md:text-[22px]" >Experience</TabsTrigger>
                        <TabsTrigger value='skills' className="text-[18px] md:text-[22px]">Skills</TabsTrigger>
                        <TabsTrigger value='about' className="text-[18px] md:text-[22px]">About Me</TabsTrigger>

                    </TabsList>
                    <div className='mt-10 min-h-[70vh] w-full'>

                    <TabsContent value='education' className='w-full h-full'>
                    <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                    <h3 className='text-4xl font-bold'>
                                    {education.title}
                                </h3>
                                <p className='text-white/60 text-[18px] md:text-[22px] xs:px-5'>
                                {education.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid frid-cols-1 lg:grid-cols-2 gap-[30px] xs:px-5 '>
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
                        <TabsContent value='experience' className='w-full'>
                             <div className='text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {experience.title}
                                </h3>
                                <p className='mt-6 text-white/80 mx-auto xl:mx-0'>{experience.description}</p>
                                <ScrollArea className='h-[400px] mt-6'>
                                    <ul className='grid frid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item,index)=>{
                                            return(
                                                <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span  className='text-accent'>
                                                        {item.duration}
                                                    </span>
                                                    <h3 className='xl:text-xl md:text-xl max-w-[260px] min-h-[60px] text-center lg:text-left sm:text-base xs:text-base xs:mb-2'>
                                                        {item.position}
                                                    </h3>
                                                    <div className='flex items-center gap-3'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60 sm:text-base xs:text-base xs:mb-2'>
                                                            {item.company}
                                                        </p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                             </div>
                        </TabsContent>
                        <TabsContent value='skills' className='w-full h-full'>
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                        <h3 className='text-4xl font-bold '>
                                        {skills.title}
                                    </h3>
                                    <p className='text-white/60 text-[18px] md:text-[22px] xs:px-5'>
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
                        <h3 className='text-4xl font-bold'>
                        {about.title}
                                </h3>
                                <p className='text-white/60 text-[18px] md:text-[22px] xs:px-5'>
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