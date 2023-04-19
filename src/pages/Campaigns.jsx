import React from 'react'
import CampaignCard from '../components/CampaignCard'
import { SectionWrapper } from '../hoc'
import {campaigns} from "../constants/index"

const Campaigns = () => {
  return (
     <div className="relative z-0 bg-primary h-full">
      <div className="px-20 pt-40 flex flex-wrap justify-center gap-10">
        {campaigns.map((item, index) => {
          return <CampaignCard index={index} title={item.title} img={item.img} />
        })}
      </div>
    </div>
  )
}

export default SectionWrapper(Campaigns,'sectionWrapper')