import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import Button from '../components/Button'
import { textVariant, fadeIn } from '../utils/motion'
import { styles } from '../styles'
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { useNavigate } from 'react-router-dom'

const CampaignGoals = () => {
const navigate=useNavigate()
  const [value, setValue] = useState(0);

  function handleOnChange(value) {
    setValue(value);
  }
  return (
    <div className="relative flex z-0 bg-primary h-screen">
        <div className="w-[55%] px-10 pt-20 flex flex-wrap gap-10">
        <motion.div variants={textVariant()} className='mt-20'>
        <p>2 of 4</p>
        <h2 className={styles.sectionHeadText}>How much would you like to raise?</h2>
        <motion.p variants={fadeIn("","",.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            It's completely expected to need funds beyond your starting goal. You can always change your goal as you go.
        </motion.p>
        </motion.div>
      </div>
        <div className="w-full flex flex-wrap gap-10 bg-black-100 rounded-bl-[70px] rounded-tl-[70px]">
          <div className='w-full h-full px-10 h-full mt-20'>
          <motion.div variants={textVariant()} className='flex flex-col items-center mt-20'>
            <h2 className='text-white font-black md:text-[40px] sm:text-[20px] xs:text-[10px] text-[20px]'>Set your starting goal</h2>
            {/* <input id="default-range" type="range" value="0" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"></input> */}
                      <h2 className='text-white font-black md:text-[20px] sm:text-[20px] xs:text-[10px] text-[20px] my-[30px]'>{value} SOL</h2>
            <div className='w-[60%] my-[30px]'>
                <InputRange
                maxValue={1000}
                minValue={0}
                value={value}
                onChange={handleOnChange}
                />              
            </div>
            <hr className='border-t-2 border-gray-500' />
          </motion.div>
            <div className='flex justify-between py-[20px] items-center mt-[20px]'>
                <i class="fa-sharp fa-solid fa-arrow-left fa-2xl cursor-pointer" onClick={() => window.history.back()}></i>
               <div onClick={(e) => {
                    navigate('/create/fundraiser/media');
                }}><Button/></div>
            </div>
          </div>  
        </div>
    </div>
  )
}

export default SectionWrapper(CampaignGoals,'sectionWrapper')