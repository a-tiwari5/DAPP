import React from 'react'
import Tilt from "react-tilt"
import {motion} from "framer-motion"
import {styles} from "../styles"
import { services } from '../constants'
import {fadeIn, textVariant} from "../utils/motion"
import { SectionWrapper } from '../hoc'

const ServiceCard=({index, title, icon})=>{
  console.log(title)
  return (
    <Tilt className="xs:w-[330px] w-full cursor-pointer">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' 
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex-justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='object-contain' width={300} height={300}/>
          {/* <img src="https://www.gofundme.com/c/wp-content/uploads/2022/06/Hero_Image_01-2.png" alt={title} className='w-16 h-16 object-contain'/> */}
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='mt-20'>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        This is a giving platform that enables nonprofits to connect supporters with the causes they care about. We believe giving should be easy, so we created a solution for online fundraising that creates great experiences for supporters. Through technology, we empower nonprofits to unlock the generosity of their supporters and help them advance their missions
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {/* {console.log(services)} */}
        {services.map((service, index)=>{
          return <ServiceCard key={service.title} index={index} {...service}/>
        })}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")