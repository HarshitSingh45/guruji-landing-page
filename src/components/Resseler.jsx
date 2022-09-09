import React from 'react'
import {AiFillStar, AiFillCheckCircle} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'

export default function Resseler() {
    return (
        <div className='w-[200px] h-[100px] border-2 border-headingColor 
          rounded-lg p-3 flex flex-col items-center justify-center'>
            <div className='flex flex-row items-center justify-start'>
                Reseller <span className='font-bold'> Rating</span> &nbsp;
                <AiFillCheckCircle className='text-reseller'/>
            </div>
            <div className='flex flex-row items-center justify-start'>
                <p className='font-bold text-2xl'>4.8</p>
                <div className='flex flex-row items-center justify-start'>
                <div className='text-reseller text-lg ml-2'><AiFillStar /></div>
                <div className='text-reseller text-lg ml-2'><AiFillStar /></div>
                <div className='text-reseller text-lg ml-2'><AiFillStar /></div>
                <div className='text-reseller text-lg ml-2'><AiFillStar /></div>
                <div className='text-reseller text-lg  ml-2'><BsStarHalf /></div>
                </div> 
            </div>
        </div>
      )
}
