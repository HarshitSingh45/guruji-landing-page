import React from 'react'
import home from '../img/home.png'
import Resseler from './Resseler'
import Reviews from './Reviews'
import TrustPilot from './TrustPilot'

export default function HomeContainer() {
  return (
    <>
    {/* desktop */}
    <section className='hidden md:grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-auto md:h-auto bg-homeBg'>
      <div className='py-2 flex flex-col items-start md:items-start justify-  flex-1 gap-6'>
        <p className='text-[2.5rem] lg:text-[4.25rem] font-bold tracking-wide text-black'>
          Find your destiny and remedies with top expert astrologers
        </p>
        <p className='border-b-2 border-gray-400 w-full'></p>
        <p className='text-black font-semibold text-lg text-center md:text-left md:w-[80%]'>
        Call to consult with professional astrologers
        </p>
        <div className='flex flex-row items-center justify-around'>
        <TrustPilot /> &nbsp;
        <Resseler /> &nbsp;
        <Reviews />
        </div>
        
        <button 
          type='button'
          className='bg-headingColor text-white w-full md:w-[250px] md:h-[50px] px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out'>
            Order Now
          </button>
      </div>
      <div className='py-2 flex-1 flex'>
        <img src={home} 
             alt="herobgpic" 
             className='ml-auto h-420 w-full lg:w-auto md:h-510' 
        />
        
      </div>
    </section>

    {/* mobile */}
    <section className='md:hidden grid grid-cols-1 md:grid-cols-2 gap-2 w-full h-auto md:h-screen bg-homeBg'>
    <div className='py-2 flex-1 flex'>
        <img src={home} 
             alt="herobgpic" 
             className=' ml-auto h-370 sm:h-510 w-full lg:w-auto lg:h-650' 
        />
        
      </div>
      <div className='py-2 flex flex-col items-start md:items-start justify-  flex-1 gap-6'>
        <p className='text-[2.5rem] lg:text-[4.25rem] font-bold tracking-wide text-black'>
          Find your destiny and remedies with top expert astrologers
        </p>
        <p className='border-b-2 border-gray-400 w-full'></p>
        <p className='text-black font-semibold text-lg text-center md:text-left md:w-[80%]'>
        Call to consult with professional astrologers
        </p>

        <div className='flex flex-wrap gap-4 flex-row items-center justify-center'>
        <TrustPilot /> &nbsp;
        <Resseler /> &nbsp;
        <Reviews /> &nbsp;
        </div>
        <button 
          type='button'
          className='bg-headingColor text-white w-full md:w-[250px] md:h-[50px] px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out'>
            Order Now
          </button>
      </div>
      
    </section>
    </>
  )
}
