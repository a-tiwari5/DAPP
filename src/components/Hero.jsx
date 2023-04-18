import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Tilt from "react-tilt"
import {fadeIn, textVariant} from "../utils/motion"
import { SectionWrapper } from '../hoc'
import { useNavigate } from "react-router-dom";

const HeroButton=({index, title})=>{
  const navigate=useNavigate()
  const positionLeft=index === 2 ? '300px' : '100px'
  console.log(positionLeft)
  return (
    <Tilt className={`xs:w-[200px] w-full cursor-pointer z-10 mx-2`}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer' 
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[70px] flex-justify-evenly items-center flex-col'
          onClick={()=> {
            index === 2 ? navigate('/campaigns'): navigate('/create/fundraiser')
          }}
        >
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Hero = () => {

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Donation <span className="text-[#915eff]">DApp </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A platform where you
            <br className="sm:block hidden" /> can make donations to campaigns through crypto.
          </p>
          {/* <HeroButton index={1} title={"Show all Campaigns"}/> */}
        </div>
        <div className="flex absolute top-80 left-[100px]" >
            <HeroButton index={1} title={"Start a Campaign"}/>
            <HeroButton index={2} title={"Show all Campaigns"}/>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero,"hero");
