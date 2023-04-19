import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn } from "../utils/motion";
import {SectionWrapper} from "../hoc/index"
import Button from "../components/Button";

const Donations = () => {
  return (
    <div className="w-[90%]">
      <motion.p variants={fadeIn("right", "spring", 0.5 * 1, 0.75)} className="m-5">
          <p className='text-white font-black md:text-[16px] font-medium text-[10px]'>Anonymous</p>
          <p className='text-white font-black md:text-[14px] font-medium text-[5px]'>$10 <span style={{fontSize:"12px", marginLeft:"10px"}}>23hrs</span> </p>
      </motion.p>
      <hr className='border-t-2 border-gray-500' />
    </div>
  )
}

const CampaignDetails = () => {
  return (
    <div className="relative z-0 bg-primary h-full">
      <div className="px-40 pt-20 flex flex-wrap">
          <motion.p variants={fadeIn("right", "spring", 0.5*1, 0.75)} className="mb-5">
            <h2 className='text-white font-black md:text-[30px] sm:text-[25px] xs:text-[20px] text-[30px]'>In Loving Tribute to Evelyn Dieckhaus</h2>
          </motion.p>
          <div className="w-[60%] h-full flex flex-col">
            <motion.div
            variants={fadeIn("right", "spring", 0.5*1, 0.75)}
            className='w-full rounded-[20px] shadow-card' 
            >
            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2ur9zNhioPkAJFv2sS0ftmBKTDvAJfN2D5_LaFjA8Tm8O9eef" className="w-[100%] object-contain rounded-[20px]" alt="" />
            </motion.div>
            <motion.p variants={fadeIn("right", "spring", 0.5 * 1, 0.75)} className="m-5">
            <p className='text-white font-black md:text-[16px] font-light text-[10px]'>Jill Talbert is organizing this fundraiser.</p>
            </motion.p>
            <hr className='border-t-2 border-gray-500' />
            <motion.p variants={fadeIn("right", "spring", 0.5 * 1, 0.75)} className="m-5">
            <p className='text-white font-black md:text-[16px] font-light text-[10px]'>Please join us in pouring love over the Dieckhaus family as they grieve the loss of their shining light, Evelyn. In the wake of this senseless tragedy, let us join hands in supporting our dear friends who selflessly love others so well.

  Thank you for your consideration. 100% of this fund will be sent to the Dieckhaus family.</p>
            </motion.p>
          <div className="w-full flex">
            <Button title="Donate"/>
            <Button title="Share"/>
          </div>
          </div>
          <div className="w-[35%] bg-black-200 h-full flex flex-col items-center border border-indigo-600 ml-[10px] h-full rounded-2xl shadow-inner">
            <motion.p variants={fadeIn("right", "spring", 0.5 * 1, 0.75)} className="m-5">
            <p className='text-white font-black md:text-[16px] font-bold text-[10px]'>$279,532 <span style={{fontSize:"12px"}}> USD raised of $50,000 goal</span></p>
            </motion.p>
            <div class="w-[90%] bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
              <div class="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500" style={{ width: "45%" }}>
              </div>
            </div>
            <div className="w-full flex my-[20px]">
              <Button title="Share" />
              <Button title="DonateNow"/>
            </div>
            <Donations/>
            <Donations/>
            <Donations/>
            <Donations/>
            <Donations/>
            <Donations/>
            <Donations/>
            <Donations/>
          </div>
      </div>
    </div>
  )
}

export default SectionWrapper(CampaignDetails,'campaignDetails')