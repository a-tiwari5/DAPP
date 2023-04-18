import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {fadeIn, textVariant} from "../utils/motion"
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

const CampaignTypes = () => {
  const navigate=useNavigate()
  const [active, setActive]=useState(1)
    
  return (
    <div className="relative flex z-0 bg-primary h-screen">
        <div className="w-[55%] px-10 pt-20 flex flex-wrap gap-10">
        <motion.div variants={textVariant()} className='mt-20'>
        <p>1 of 4</p>
        <h2 className={styles.sectionHeadText}>Tell us a bit about your fundraiser</h2>
        <motion.p variants={fadeIn("","",.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            This information helps us get to know you and your fundraising needs.
        </motion.p>
        </motion.div>
      </div>
        <div className="w-full flex flex-wrap gap-10 bg-black-100 rounded-bl-[70px] rounded-tl-[70px]">
          <div className='w-full h-full px-10 h-full mt-20'>
          <motion.div variants={textVariant()} className='mt-20'>
            <h2 className='text-white font-black md:text-[20px] sm:text-[20px] xs:text-[10px] text-[20px]'>Who are you fundraising for ?</h2>
                <div
                    className={`flex justify-between w-[90%] h-[100px] ${active === 1 ? 'bg-gray-700' : 'bg-gray-900'} my-4 rounded-2xl p-[20px] cursor-pointer hover:bg-gray-700`}
                    onClick={()=> setActive(1)}
                >
                    
                <div className="left w-[70%]">
                    <p className='text-white font-black md:text-[18px] text-[18px] font-medium'>Yourself</p>              
                    <p className='text-white font-black md:text-[14px] text-[14px] font-light my-2'>Funds are delivered to your bank account for your own use</p>              
                </div>
                <div className="right w-max">
                    <img src="https://www.gofundme.com/static/media/yourself.f0b50d399c2485c1698f82eba958108f.png" alt="" className='w-[100px] h-[80px] object-contain'/>
                </div>
            </div>
            <div className={`flex justify-between w-[90%] h-[100px] ${active === 2 ? 'bg-gray-700' : 'bg-gray-900'} my-4 rounded-2xl p-[20px] cursor-pointer hover:bg-gray-700`} onClick={()=> setActive(2)}>
                <div className="left w-[70%]">
                    <p className='text-white font-black md:text-[18px] text-[18px] font-medium'>Someone else</p>              
                    <p className='text-white font-black md:text-[14px] text-[14px] font-light my-2'>You’ll invite a beneficiary to receive funds or distribute them yourself</p>              
                </div>
                <div className="right w-max">
                    <img src="https://www.gofundme.com/static/media/someone-else.5a430cd6767be30776f9dfd1b46be9ca.png" alt="" className='w-[100px] h-[80px] object-contain'/>
                </div>
            </div>
            <div className={`flex justify-between w-[90%] h-[100px] ${active === 3 ? 'bg-gray-700' : 'bg-gray-900'} my-4 rounded-2xl p-[20px] cursor-pointer hover:bg-gray-700`} onClick={()=> setActive(3)}>
                <div className="left w-[70%]">
                    <p className='text-white font-black md:text-[18px] text-[18px] font-medium'>Charity</p>              
                    <p className='text-white font-black md:text-[14px] text-[14px] font-light my-2'>You’ll invite a beneficiary to receive funds or distribute them yourself</p>              
                </div>
                <div className="right w-max">
                    <img src="https://www.gofundme.com/static/media/charity.9cb36cf97a1c6187e47608a680f09e05.png" alt="" className='w-[100px] h-[80px] object-contain'/>
                </div>
            </div>
            <hr className='border-t-2 border-gray-500' />
            <div className='flex justify-between py-[20px] items-center mt-[20px]'>
                <i class="fa-sharp fa-solid fa-arrow-left fa-2xl cursor-pointer" onClick={() => navigate(-1)}></i>
                <div onClick={()=> navigate('/create/fundraiser/goal')}>              
                    <Button/>              
                </div>
            </div>
          </motion.div>
          </div>  
        </div>
    </div>
  )
}

export default SectionWrapper(CampaignTypes, 'campaignTypes')