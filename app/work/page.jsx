'use client';
import {motion} from 'framer-motion'
import 'swiper/css';
import { RiGlobalLine } from "react-icons/ri";
import Link from 'next/link';

const projects=[
    {
        num:'1',
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
        liveDemoLink: 'https://dolcesalato.ae/',

    },
    {
        num:'2',
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
        liveDemoLink: 'https://www.watchoasis.ae/',

    },
    {
        num:'3',
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
        liveDemoLink: 'https://anticapizzeriadamichele.ae/',

    },
    {
        num:'4',
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
        liveDemoLink: 'https://www.theway.ae/',

    },
    {
        num:'5',
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
        liveDemoLink: 'https://www.aixinvestment.com/',

    },
    {
        num:'6',
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
        liveDemoLink: 'https://issaskintherapy.com/',

    },
    {
        num:'7',
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
        liveDemoLink: 'https://wearethefuture-aix.com/', 

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
                            <Link href={`/projects/${project.num}`}> 
                            <div className='bg-accent rounded-xl photo-project' style={{display: 'inline-block', padding: '10px' }}>
                            <img src={project.image} alt="Project Image" style={{ display: 'block' }} className='rounded-xl project-photo' /> 
                            </div>
                            </Link>
                             <h2 className="text-[26px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 px-2">{project.title}</h2>
                             <p className="text-white/60 px-2">{project.description}</p>
                             {/*<p className='px-2 text-white/60' style={{ display: 'inline-flex', alignItems: 'center' }}>
                            <span style={{ marginRight: '5px',fontSize:'23px' }}>{project.icon}</span> Website
                            </p>*/}
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
                            </div>
                             )
                            })}
                         </motion.div>
                     </section>
              </>
    )
}

export default Work;