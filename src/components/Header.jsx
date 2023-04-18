import React from 'react'
import { motion } from 'framer-motion'
import { textVariant, fadeIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../styles'

const Header = () => {
  return (
    <div className="w-[55%] px-10 pt-20 flex flex-wrap gap-10">
        <motion.div variants={textVariant()} className='mt-20'>
        <h2 className={styles.sectionHeadText}>Let's begin your fundraising journey</h2>
        <motion.p variants={fadeIn("","",.1,1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
            We're here to guide you every step of the way.
        </motion.p>
        </motion.div>
      </div>
  )
}

export default Header