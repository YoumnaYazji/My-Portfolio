"use client";

import {FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs} from 'react-icons/fa'
import { SiAutocad,SiAutodeskrevit,SiMicrosoftexcel ,  } from "react-icons/si";
import { FaRegUser } from "react-icons/fa";
import { PiMicrosoftWordLogoFill } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa6";
import { LiaLanguageSolid } from "react-icons/lia";
import { SiFreelancer } from "react-icons/si";
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
        icon:<SiAutocad/>,
        name:'AutoCad'
    },
    {
        icon:<SiAutodeskrevit/>,
        name:'Revit'
    },
    {
        icon:<SiMicrosoftexcel/>,
        name:'Excel'
    },
    {
        icon:<PiMicrosoftWordLogoFill/>,
        name:'Word'
    },
]
}


const Resume =() =>{
    return(
        <>
            <div className="px-24 mt-5 mx-auto xs:w-full md:x-full">
                <Tabs defaultValue='education' className='gap-[60px]'>
                    <TabsList className=' w-full mx-auto xl:mx-0 gap-[60px] md:flex-col md:items-center md:gap-4 lg:flex-row lg:items-start lg:mx-auto xs:flex-col xs:items-center xl:gap-4 xl:mx-0'>
                        <TabsTrigger value='education' className="text-[18px]">Education</TabsTrigger>
                        <TabsTrigger value='experience'className="text-[18px]" >Experience</TabsTrigger>
                        <TabsTrigger value='skills' className="text-[18px]">Skills</TabsTrigger>
                        <TabsTrigger value='about' className="text-[18px]">About Me</TabsTrigger>

                    </TabsList>
                    <div className='mt-10 min-h-[70vh] w-full'>

                        <TabsContent value='education' className='w-full'>
                        <div className='flex flex-col gap-[30px] p-5 xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {education.title}
                                </h3>
                                <p className='text-white/80 mx-auto text-[18px] xl:mx-0'>{education.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid frid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item,index)=>{
                                            return(
                                                <li key={index} className='bg-[#232329] h-[184px] xl:h-[200px] lg:h-[200px] md:-[200px] sm:h-[200px] xs:h-[300px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span  className='text-accent'>
                                                        {item.duration}
                                                    </span>
                                                    <h3 className='text-xl mt-2 text-center lg:text-left md:text-xl sm:text-base xs:text-base xs:mb-2'>
                                                        {item.degree}
                                                    </h3>
                                                        <p className='text-white/60 mt-2 sm:text-base xs:text-base xs:mb-2'>
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
                             <div className='flex- flex-col- gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold '>
                                        {skills.title}
                                    </h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
                                        {skills.description}
                                    </p>
                                </div>
                                <ul className='grid grid-cols-2 mt-6 sm:grid-cols-3 xs:grid-cols-1 md:grid-cols-4 gap-4 xl:gap-[30px]'>                                    {skills.skillList.map((skill,index)=>{
                                        return(
                                            <li key={index}>
                                               <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
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
                                    <p className='text-2xl mt-10'>+7 another Program</p>
                             </div>
                        </TabsContent>
                        <TabsContent value='about' className='w-full'>
                        <div className='flex flex-col gap-[30px] p-5 xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {about.title}
                                </h3>
                                <p className='text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className="gap-y-6 xl:mx-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
                                {about.info.map((item, index) => (
                                <li
                                key={index}
                                className={`bg-[#232329] text-[18px] h-[80px] w-full px-8 rounded-xl flex items-center justify-center xl:justify-start gap-4 ${
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