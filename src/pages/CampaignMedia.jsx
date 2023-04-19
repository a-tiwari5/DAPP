import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import Button from '../components/Button'
import { textVariant, fadeIn, slideIn } from '../utils/motion'
import { styles } from '../styles'
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { useNavigate } from 'react-router-dom'

const CampaignMedia = () => {
  const navigate=useNavigate()
  return (
    <div className="relative flex z-0 bg-primary h-screen">
        <div className="w-[55%] px-10 pt-20 flex flex-wrap gap-10">
        <motion.div variants={textVariant()} className='mt-20'>
        <p>3 of 4</p>
        <h2 className={styles.sectionHeadText}>Add a cover photo or video</h2>
        <motion.p variants={fadeIn("","",.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            Using a bright and clear photo helps people connect to your fundraiser right away.
        </motion.p>
        </motion.div>
      </div>
        <div className="w-full flex flex-wrap gap-10 bg-black-100 rounded-bl-[70px] rounded-tl-[70px]">
          <div className='w-full px-10 mt-20'>
          <motion.div variants={slideIn("right", "spring", 0.5*1, 0.75)} className='flex flex-col items-center mt-20'>
            <div class="flex items-center justify-center w-full">
                <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-80 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-black-200 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                </label>
            </div> 
            <div className='flex justify-between w-full py-[20px] items-center mt-[20px]'>
               <i class="fa-sharp fa-solid fa-arrow-left fa-2xl cursor-pointer" onClick={() => navigate(-2)}></i>
               <div onClick={(e) => {
                    navigate('/create/fundraiser/story');
                }}><Button title='Continue'/></div>
            </div>
          </motion.div>
          </div>  
        </div>
    </div>
  )
}

export default SectionWrapper(CampaignMedia, 'campaignMedia')