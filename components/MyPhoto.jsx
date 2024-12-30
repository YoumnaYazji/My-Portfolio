"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import myphoto from '../public/youmna.png'
const MyPhoto = () =>{
    return (
        <>
        <div className="h-full w-full relative">
            <motion.div initial={{opacity:0}} animate={{opacity:1, transition :{delay:2, duration:0.4, ease:"easeInOut"
            }}} >
                <motion.div
                initial={{opacity:0}} animate={{opacity:1, transition :{delay:2.4, duration:0.4, ease:"easeInOut"
                }}} 
                 className=" xs:h-[400px] xs:w-[370px] sm:w-[420px]  sm:h-[420px] md:w-[498px] md:h-[450px] lg:w-[450px]  lg:h-[498px] xl:w-[498px] xl:h-[498px] xs:ml-8 xs:mt-12 sm:ml-8 sm:mt-8 md:ml-1 md:mt-5 xl:ml-9 xl:mt-6 my-photo absolute">
                    <Image src={myphoto} priority quality={100} fill alt="" className="object-contain photo sm:max-width[100%] xl:ml-12"/>
                </motion.div>
                <motion.svg className="md:w-[480px] xs:w-[400px] xl:w-[582px] h-[550px] xl:h-[570px] " fill="transparent" viewBox="0 0 490 490" xmlns="http://www.w3.org/2000/svg"> 
    <motion.circle  
        cx="248"  
        cy="256"  
        r="218"  
        stroke="#00ff99"  
        strokeWidth="4"  
        strokeLinecap="round"  
        strokeLinejoin="round"  
        initial={{strokeDasharray:"24 10 0 0"}}  
        animate={{ 
            strokeDasharray: ["15 120 25 25","16 25 92 72","4 250 22 22"], 
            rotate: [300,360], 
        }} 
        transition={{duration:20,repeat:Infinity,repeatType:'reverse'}} 
    /> 
</motion.svg>


            </motion.div>
        </div>
        </>
    )

}

export default MyPhoto;