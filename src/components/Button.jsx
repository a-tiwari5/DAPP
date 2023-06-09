import React from 'react'
import { motion } from 'framer-motion'
import {fadeIn} from "../utils/motion"
import Tilt from "react-tilt"
import { useNavigate } from 'react-router-dom'
// import { Buffer } from "buffer";
// import { PublicKey } from '@solana/web3.js';
// import * as web3 from '@solana/web3.js';

window.Buffer = Buffer;

const Button = ({ title }) => {
  console.log(title)
const navigate=useNavigate()
  return (
    <Tilt className={`xs:w-[200px] w-full cursor-pointer z-10 mx-2`}>
      <motion.div
        variants={fadeIn("right", "spring", 0.5*1, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card cursor-pointer' 
      >
        <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className='bg-tertiary rounded-[20px] py-2 px-12 min-h-[20px] flex-justify-evenly items-center flex-col'
          onClick={() => {
            if(title !== 'DonateNow')
            navigate('/create/fundraiser/types')
          }}
        >
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

export default Button