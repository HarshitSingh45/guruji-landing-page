import React, {} from 'react'
import { AiFillStar } from 'react-icons/ai'

export default function TrustPilot() {
  return (
    <div className='w-[200px] h-[100px] border-2 border-headingColor 
      rounded-lg p-3 flex flex-col items-center justify-center '>
        <div className='flex flex-row items-center justify-start'>
            <AiFillStar className='text-green-500'/>
            TrustPilot
        </div>
        <div className='flex flex-row items-center justify-start'>
            <p className='font-bold text-2xl'>4.9</p>
            <div className='flex flex-row items-center justify-start'>
            <div className='bg-green-500 text-white text-lg ml-2'><AiFillStar /></div>
            <div className='bg-green-500 text-white text-lg ml-2'><AiFillStar /></div>
            <div className='bg-green-500 text-white text-lg ml-2'><AiFillStar /></div>
            <div className='bg-green-500 text-white text-lg ml-2'><AiFillStar /></div>
            <div className='bg-green-500 text-white text-lg  ml-2'><AiFillStar /></div>
            </div> 
        </div>
    </div>
  )
}
