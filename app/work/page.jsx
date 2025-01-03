'use client';
import {motion} from 'framer-motion'
import 'swiper/css';
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
        title:'Watch Oasis',
        description:'A delivery website for a restaurant where the customer can order online.',
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
        image:'/watch.png',
    },
    {
        num:'03',
        title:'L\'Antica Pizzeria',
        description:'A delivery website for a restaurant where the customer can order online.',
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
        image:'/pizzara.png',
    },
    {
        num:'04',
        title:'The Way',
        description:'A delivery website for a restaurant where the customer can order online.',
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
        image:'/the_Way.png',
    },
    {
        num:'05',
        title:'Aix Investment',
        description:'A delivery website for a restaurant where the customer can order online.',
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
        image:'/aix.png',
    },
    {
        num:'06',
        title:'ISSA Skintherapy',
        description:'A delivery website for a restaurant where the customer can order online.',
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
        image:'/issa.png',
    },
    {
        num:'07',
        title:'We are the future',
        description:'A delivery website for a restaurant where the customer can order online.',
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
        image:'/future.png',
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