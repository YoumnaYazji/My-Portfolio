"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {FiDownload} from 'react-icons/fi'
import Social from "@/components/Social";
import MyPhoto from "@/components/MyPhoto";
import Stats from "@/components/Stats";
import { TypeAnimation } from "react-type-animation";
import Services from "./services/page";
import Work from "./work/page";
import Resume from "./resume/page";
export default function Home() {
  return (
   <>
   <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl">
              WELCOME TO MY WORLD
            </span>
            <h1 className="h1 mb-6 mt-5">
              Hello I’m <span className="text-accent">Youmna Yazji a </span> <br/> 
              <TypeAnimation sequence={['Frontend Developer.',500,"Professional Coder.",900,"Software Engineer.",400]} repeat={Infinity}/>

            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 ">I am a passionate Software Engineer and professional coder with a strong foundation in React JS and Next JS, with over 2 years of experience, <br/>
            I thrive on tackling complex challenges and delivering high-quality code.
            <br/>
            My passion for coding drives me to continuously improve my skills and deliver exceptional results. 
            </p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button variant="outline" size="lg" className="uppercase gap-2">
            <a href="/Youmna Yazji.pdf" target="_blank" rel="noopener noreferrer" >Download CV</a>
            <FiDownload className="text-xl"/>
            </Button>
            <div className="mb-8 xl:mb-0 ">
              <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
            </div>
          </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <MyPhoto/>
          </div>
        </div>
      </div>
      <Stats/>
   </section>
   <div className="border-b border-white/20 w-full mt-12"></div>

   <div className="mt-12">
    <h5 className="text-accent">SERVICES</h5>
    <h1 className="text-[66px]">What I Do</h1>
   <Services/>
   </div>
   <div className="border-b border-white/20 w-full mt-12"></div>
   <div className="mt-12">
    <h5 className="text-accent text-center">Visit my projects and keep your feedback</h5>
    <h1 className="text-[66px] text-center">My Projects</h1>
    <Work/>
    </div>
    <div className="border-b border-white/20 w-full mt-12"></div>
   <div className="mt-12">
    <h5 className="text-accent text-center">+2 YEARS OF EXPERIENCE</h5>
    <h1 className="text-[66px] text-center">My Resume</h1>
    <Resume/>
    </div>
   </>
  );
}
