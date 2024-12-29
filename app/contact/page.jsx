"use client";

import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from 'react-icons/fa';
import { motion } from "framer-motion";
import { FaRegUser } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa6";
import { LiaLanguageSolid } from "react-icons/lia";
import { SiFreelancer } from "react-icons/si";
import { FaLink } from "react-icons/fa6";

const about={ 
    title:'Let’s Work Togther',
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
        {
            fieldName:'Address',
            fieldValue:'Homs, Syria',
            icon:<FaMapMarkerAlt/>,
        }
       

    ]
}

const Contact =() =>{
    return(
        <>

         <div className='flex flex-col gap-[30px] text-center xl:text-left px-5'>
         <h1 className="text-[66px] text-center xs:text-[58px] xs:px-5">{about.title}</h1>

                                
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
      {/*  <motion.section initial={{opacity:0}} animate={{opacity:1, transition :{delay:2, duration:0.4, ease:"easeIn"
            }}} className="py-6">
        
               <div className="xl:h-[54%] order-2 xl:order-none">
                <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" >
                    <h3 className="text-4xl text-accent">
                        Let’s work together
                    </h3>
                    <p className="text-white/60">Lorem ipsum dolor sit amet. Est aliquid aliquam et earum laudantium et amet fugit in dignissimos earum est delectus dolores cum nulla cumque est obcaecati internos.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeHolder="First Name"/>
                  <Input type="lastname" placeHolder="Last Name"/>
                  <Input type="email" placeHolder="Email Address"/>
                  <Input type="Phone" placeHolder="Phone Number"/>
                </div>
                <Select>
                    <SelectTrigger className='w-full'>
                        <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>
                                Select a service
                            </SelectLabel>
                                <SelectItem value='est'>
                                Web Development
                                </SelectItem>
                                <SelectItem value='cst'>
                                UI/UX Desgin
                                </SelectItem>
                                <SelectItem value='mst'>
                                Logo Design
                                </SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Textarea className='h-[200px]' placeholder='Type Your Message Here'/>
                <Button size="md" className='max-w-40'>
                    Send Message
                </Button>
                </form>
                </div>
            <h3 className="text-4xl text-accent md:text-left xs:text-center xs:mr-5 md:ml-20">
            Let’s work together
            </h3>
            <div className="container xs:ml-20">

        <div className="flex-1 flex order-1 xl:order-none mb-8 xl:mb-0 ">
        <ul className="flex flex-col gap-10 mt-10">
        {info.map((item, index) => {
        return (
        <>
          <li key={index} className="flex items-center gap-6">
            <div className="w-[52px] h-[52px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex justify-center items-center">
              <div className="text-[28px]">{item.icon}</div>
            </div>
            <div className="flex-1">
              <p className="text-white/60">{item.title}</p>
              <h3 className="text-xl">{item.description}</h3>
            </div>
          </li>
        </>
      );
    })}
  </ul>
</div>
</div>

            
        </motion.section>*/}
        </>
    )
}

export default Contact;