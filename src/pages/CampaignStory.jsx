import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import Button from '../components/Button'
import { textVariant, fadeIn, slideIn } from '../utils/motion'
import { styles } from '../styles'
import "react-input-range/lib/css/index.css";
import { useNavigate } from 'react-router-dom'
const CampaignStory = () => {
  const navigate=useNavigate()
  return (
    <div className="relative flex z-0 bg-primary h-screen">
        <div className="w-[55%] px-10 pt-20 flex flex-wrap gap-10">
        <motion.div variants={textVariant()} className='mt-20'>
        <p>4 of 4</p>
        <h2 className={styles.sectionHeadText}>Tell donors why you're fundraising</h2>
        <motion.p variants={fadeIn("","",.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            Some ideas to help you start writing:
        </motion.p>
        <motion.p variants={fadeIn("","",.1,1)} className='mt-4 text-secondary text-[13px] font-normal max-w-3xl leading-[30px]'>
            <ul className="list-disc mx-[20px]">
                <li className="mb-2">Introduce yourself and what you're raising funds for</li>
                <li className="mb-2">Describe why it's important to you</li>
                <li className="mb-2">Explain how the funds will be used</li>
            </ul>              
        </motion.p>
        </motion.div>
      </div>
        <div className="w-full flex flex-wrap gap-10 bg-black-100 rounded-bl-[70px] rounded-tl-[70px]">
          <div className='w-full px-10 mt-20'>
            <motion.div variants={slideIn("right", "spring", 0.5 * 1, 0.75)} className='mt-20'>
            <h2 className='text-white font-black md:text-[20px] sm:text-[20px] xs:text-[10px] text-[20px]'>Give your fundraiser a title</h2>
            <lable className='w-full mt-5 flex flex-col'>
                <input
                  type='text'
                  name='title'
                  placeholder="Donate to help.."
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
            </lable>
            <h2 className='text-white mt-[20px] font-black md:text-[20px] sm:text-[20px] xs:text-[10px] text-[20px]'>Tell your story</h2>
            <lable className='w-full mt-5 flex flex-col'>
                <textarea
                  type='text'
                  name='desc'
                  placeholder="Hi my name is Jane and I'm fundraising for.."
                  className='bg-tertiary h-60 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
            </lable>          

            <div className='flex justify-between w-full py-[20px] items-center mt-[20px]'>
               <i class="fa-sharp fa-solid fa-arrow-left fa-2xl cursor-pointer" onClick={() => navigate(-2)}></i>
               <div onClick={(e) => {
                    navigate('/create/fundraiser/story');
                          }}><Button title="Complete fundraiser" /></div>
            </div>
          </motion.div>
          </div>  
        </div>
    </div>
  )
}

export default SectionWrapper(CampaignStory,'sectionWrapper')