import React from 'react'
import last1 from '../img/last1.jpeg';

export default function Footer() {
  return (
    <>
    <div className='relative w-full h-[300px]'>
        <img src={last1} 
             alt=""
             className='w-full h-full object-cover' />
         <div className='absolute top-[25%] left-[20%]'>
            <p className=' font-bold text-4xl md:text-5xl text-white'>
                What are you waiting for ?       
            </p>
            <br />
            <button 
                type='button'
                className='absolute left-1  md:left-[40%] bg-headingColor text-lg text-white w-[250px] px-4 py-2 rounded-lg hover:shadow-lg'>
                    Talk Now
            </button>
         </div>
    </div>
   
    </>
        

  )
}
