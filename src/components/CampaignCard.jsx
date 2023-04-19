import React from 'react'
import Tilt from "react-tilt"
import {motion} from "framer-motion"
import {fadeIn, textVariant} from "../utils/motion"
import { useNavigate } from 'react-router-dom'

const CampaignCard = ({ index, title, img }) => {
  const navigate = useNavigate()
  
  const handleClick = () => {
    navigate('/campaigns/akjsdhasjkdh')
  }

  return (
    <Tilt className="xs:w-[550px] w-full cursor-pointer">
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
          className='bg-tertiary py-2 flex rounded-[20px] min-h-[380px] flex-justify-evenly items-center flex-col'
        >   
          <i class="absolute top-5 right-5 z-10 fa-solid fa-arrow-right fa-lg" onClick={handleClick}></i>
          <img src={img} alt={"asdasj"} className='object-contain rounded-lg' height={400} width={400}/>
          <h1 className='mt-2 text-white text-[20px] font-bold text-center'>{title}</h1>
          <p className='m-2'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
        </div>
      </motion.div>
    </Tilt>
  )
}

export default CampaignCard