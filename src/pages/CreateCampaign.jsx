import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {fadeIn, textVariant} from "../utils/motion"
import { styles } from '../styles'
import Header from '../components/Header'
import { SectionWrapper } from '../hoc'
import { Select, Option } from "@material-tailwind/react";
import Tilt from "react-tilt"


const categoryArray = ['Animals', 'Community', 'Creative', 'Education','Emergencies','Environment','Events','Faith','Family','Other', 'Sports','Travel','Ukraine Relief','Volunteer','Wishes','Education']

const CategoryBox = ({title}) => {
  return (
    <div className='px-4 pt-2 h-[40px] border-solid border-[1px] rounded-[100px] m-2 flex  flex-wrap cursor-pointer hover:bg-sky-900'>
      <p className=''>{title}</p>
    </div>
  )
}

const Button=()=>{
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
          // onClick={()=> {
          //   index === 2 ? navigate('/campaigns'): navigate('/create/fundraiser')
          // }}
        >
          <h3 className='text-white text-[20px] font-bold text-center'>Continue</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const CreateCampaign = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    zipcode: '',
    country: '',
    category:''
  })
  const [loading, setLoading]=useState(false)
  const handleSubmit = () => {
  }
  const handleChange = () => {
    
  }
  

  return (
    <div className="relative flex z-0 bg-primary h-screen">
        <Header />
        <div className="w-full flex flex-wrap gap-10 bg-black-100 rounded-bl-[70px] rounded-tl-[70px]">
          <div className='w-full px-10 h-full'>
          <motion.div variants={textVariant()} className='mt-20'>
            <h2 className='text-white font-black md:text-[20px] sm:text-[20px] xs:text-[10px] text-[20px]'>Where are you located?</h2>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='mt-12 flex flex-col gap-8'
            >
              <div className='flex justify-between'>
                 <label className='w-[40%] flex flex-col'>
                  <span className='text-white font-medium mb-4'>Country</span>
                  <select
                    name='country'
                    value={form.country}
                    onChange={handleChange}
                    className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                  >
                    <option value=''>Select your country</option>
                    <option value='India'>India</option>
                    <option value='USA'>USA</option>
                    <option value='Canada'>Canada</option>
                    <option value='Mexico'>Mexico</option>
                    {/* add more options as needed */}
                  </select>
                </label>
              <lable className='w-[40%] flex flex-col'>
                <span className='text-white font-medium mb-4'>Zip code</span>
                <input
                  type='text'
                  name='name'
                  value={form.zipcode}
                  onChange={handleChange}
                  placeholder="What's your Zipcode ?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                />
              </lable>
              </div>
              <h2 className='text-white font-black md:text-[20px] sm:text-[20px] xs:text-[10px] text-[20px]'>What best describes why you're fundraising?</h2>
              <div className='flex flex-wrap w-full'>
                {categoryArray.map((item, index) => {
                  return <CategoryBox title={item} />
                })}
              </div>
              <hr className='border-t-2 border-gray-500' />
              <button className=''>
                <Button/>
              </button>
            </form>
          </motion.div>
          </div>  
        </div>
    </div>
  )
}

export default SectionWrapper(CreateCampaign, 'createCampaign')