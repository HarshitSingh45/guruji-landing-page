import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {BsStarHalf, BsPatchCheckFill} from 'react-icons/bs'


export default function Reviews() {
    return (
        <div className='w-[200px] h-[100px] border-2 border-headingColor 
        rounded-lg p-3 flex flex-col items-center justify-center'>
            <div className='flex flex-row items-center justify-start'>
                <AiFillStar className='bg-black rounded-full text-white'/> &nbsp;
                REVIEWS
            </div>
            <div className='flex flex-row items-center justify-start'>
                <p className='font-bold text-2xl'>4.8</p>
                <div className='flex flex-row items-center justify-start'>
                <div className=' text-reviews text-lg ml-2'><AiFillStar /></div>
                <div className=' text-reviews text-lg ml-2'><AiFillStar /></div>
                <div className=' text-reviews text-lg ml-2'><AiFillStar /></div>
                <div className=' text-reviews text-lg ml-2'><AiFillStar /></div>
                <div className=' text-reviews text-lg  ml-2'><BsStarHalf /></div>&nbsp;
                <div className='text-green-600'><BsPatchCheckFill /></div>
                </div> 
            </div>
        </div>
      )
}
