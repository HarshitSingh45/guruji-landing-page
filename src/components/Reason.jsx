import React from 'react'
import {reasons} from '../utils/data';

export default function Reason() {
  return (
    <div className='border-b-2 border-gray-300 shadow-xl mb-6'>
        <div className='flex items-center justify-center text-3xl font-bold mt-6 mb-5'>
            4 Reasons why you should choose Guruji
        </div>
        <div className='flex flex-wrap gap-3 items-center justify-around'>
            {reasons.map((item)=>{
                
                return (
                    <div key={item.id} className=' w-300 sm:w-460 md:w-508
                    flex items-center justify-center h-225'>
                        <div className='w-[30%] h-[80%]'>
                        <img
                            src={item?.src}
                            alt=""
                            className="w-full h-full object-contain rounded-xl"
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center w-[65%] h-[80%] pl-2'>
                            <p className='text-xl font-bold'>{item.name}</p>
                            <p className='text-lg'>{item.desc}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
