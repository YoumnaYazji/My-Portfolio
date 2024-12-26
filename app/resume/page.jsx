"use client";

import {FaHtml5,FaCss3,FaJs,FaReact,FaFigma,FaNodeJs} from 'react-icons/fa'
import { SiAutocad,SiAutodeskrevit,SiMicrosoftexcel ,  } from "react-icons/si";
import { PiMicrosoftWordLogoFill } from "react-icons/pi";

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
            fieldValue:'Samir Khouzam',
        },
        {
            fieldName:'Phone',
            fieldValue:'+963 994 685 433',
        },
        {
            fieldName:'Experience',
            fieldValue:'+1 Years',
        },
        {
            fieldName:'Nationality',
            fieldValue:'Syrian',
        },
        {
            fieldName:'Email',
            fieldValue:'skhzam111@gmail.com',
        },
        {
            fieldName:'Freelance',
            fieldValue:'Available',
        },
        {
            fieldName:'Languages',
            fieldValue:'Arabic, English, French',
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
    description:'I\'m passionate about lifelong learning and committed to continuously expanding my knowledge and skills in civil engineering to stay ahead of industry trends and drive innovation',
    items:[
        {
        instituation:'Al-Hawash Private University.',
        degree:'Bachelor\'s Degree in Civil Engineering',
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
        <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:'easeIn'}}} className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 '>
                        <TabsTrigger value='experience'>Experience</TabsTrigger>
                        <TabsTrigger value='education'>Education</TabsTrigger>
                        <TabsTrigger value='skills'>Skills</TabsTrigger>
                        <TabsTrigger value='about'>About Me</TabsTrigger>

                    </TabsList>
                    <div className='min-h-[70vh] w-full'>
                        <TabsContent value='experience' className='w-full'>
                             <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {experience.title}
                                </h3>
                                <p className='max-w-[600px] text-white/80 mx-auto xl:mx-0'>{experience.description}</p>
                                <ScrollArea className='h-[400px]'>
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
                        <TabsContent value='education' className='w-full'>
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>
                                    {education.title}
                                </h3>
                                <p className='max-w-[600px] text-white/80 mx-auto xl:mx-0'>{education.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid frid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item,index)=>{
                                            return(
                                                <li key={index} className='bg-[#232329] h-[184px] xl:h-[200px] lg:h-[200px] md:-[200px] sm:h-[200px] xs:h-[300px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                    <span  className='text-accent'>
                                                        {item.duration}
                                                    </span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left md:text-xl sm:text-base xs:text-base  xs:mb-2'>
                                                        {item.degree}
                                                    </h3>
                                                    <div className='flex items-center gap-3 xs:h-[150px]'>
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent xl:w-[6px] lg:w-[6px] md:w-[6px] sm:w-[6px] xs:w-[15px]'></span>
                                                        <p className='text-white/60 sm:text-base xs:text-base xs:mb-2'>
                                                            {item.instituation}
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
                        <TabsContent value='about' className='w-full text-center xl:text-left'>
                             <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item,index)=>{
                                    return(
                                        <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                           <span className='text-white/60'> {item.fieldName}</span>
                                           <span className='text-white'>{item.fieldValue}</span>
                                        </li>
                                    )
                                    })}
                                </ul>
                             </div>
                        </TabsContent>

                    </div>
                </Tabs>
            </div> 
        </motion.div>
        </>
    )
}

export default Resume;