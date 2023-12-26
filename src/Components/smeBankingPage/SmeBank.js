import React from 'react'
import Miniheader from './Miniheader'
import SmeCouresel from './SmeCouresel'
import BottomNavigation from './BottomNavigation'
import Featured from './Featured-Article/Featured'

import SmeFooter from './smefooter/SmeFooter'

const SmeBank = () => {
  return (
    <>
     <Miniheader/> 
     <SmeCouresel/>
     <BottomNavigation/>
     <Featured/>
     <SmeFooter/>
    </>
  )
}

export default SmeBank
