import React from 'react'
import { newsData } from '../utils/data'
import {CgSandClock} from 'react-icons/cg'

export default function News() {
  return (
    <div className='w-full mt-10'>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-3xl font-bold'>
                Guruji in News
            </p>
            <br />
            <p className='text-xl'>
                Our success stories in media headlines and lot of encouragement.
            </p>
        </div>
        <div className='mt-10 flex flex-wrap items-center justify-center gap-4 mb-10'>
            {newsData.map((item) => {
                return(
                    <div key={item.id} className='w-[200px] h-[125px] border-2 border-gray-300 shadow-md
                       flex flex-col items-center justify-center'>
                        <div className='w-full'>
                            <img src={item.src} alt="" className='w-full h-[50%] object-contain' />
                        </div>
                        <div className='flex flex-row items-center justify-center'>
                            <CgSandClock />{item.date}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
