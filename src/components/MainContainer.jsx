import React from 'react'
import Astrologer from './Astrologer'
import Consultants from './Consultants'
import ConsultContainer from './ConsultContainer'
import Footer from './Footer'
import Guarantee from './Guarantee'
import HomeContainer from './HomeContainer'
import News from './News'
import Protect from './Protect'
import Reason from './Reason'
import Working from './Working'

export default function MainContainer() {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center gap-6'>
        {/* <div><HomeContainer /></div> */}
        <HomeContainer />
        <ConsultContainer />
        <Astrologer />
        <Reason />
        <Guarantee />
        <Working />
        <Consultants />
        <Protect />
        <News />
        <Footer />
    </div>
  )
}
