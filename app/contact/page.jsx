"use client";

import {FaMapMarkerAlt} from 'react-icons/fa';
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa6";

const about={ 
    description:'I am a Web Developer specializing in front end development, aiming towards a better understanding and development my knowledge at this field. Experienced with development cycle for dynamic web projects.',
    info :[

        {
            fieldName:'Phone',
            fieldValue:'+963 968 569 238',
            icon:<BsTelephone/>
        },
        {
            fieldName:'Email',
            fieldValue:'youmna.yazji@gmail.com',
            icon:<FaRegEnvelope/>
        },

    ]
}

const Contact =() =>{
    return(
        <>
        <h1 className="text-[66px] text-center xs:text-[58px] xs:px-5">Let’s Work Togther</h1>
        <h3 className="text-[36px] text-accent text-center xs:px-10">Youmna Yazji</h3>
        <p className='text-white/60  text-center xl:text-[18px] md:text-[22px] xl:px-5 xs:px-8'>
        Software And Information Systems Engineer | Frontend Developer
        <br/>
        I’m open for exciting freelance opportunities! Feel free to reach out and connect with me through my account.
        </p>
        <div className="px-12 mt-5 xl:w-[90%] mx-auto xs:w-full md:x-full">

        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
          
        <ul className="gap-y-6 xl:mx-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
        {about.info.map((item, index) => (
        <li
        key={index}
        className={`bg-[#232329]  text-[20px] h-[80px] w-full px-8 rounded-xl flex items-center justify-center xl:justify-center gap-4 ${
        index >= 0 ? "mt-6" : ""
        }

        `}
        >
        <div className="flex items-center gap-2">
        <span className="text-accent text-[18px] text-center">{item.icon}</span> 
        <span className="text-white/60">{item.fieldName}</span> 
        </div>
        <span className="text-white text-center">{item.fieldValue}</span>
        </li>
        ))}
        </ul>
        </div>
        </div>
      
        </>
    )
}

export default Contact;