import React from 'react'
import star from '../img/star.png'
import {reviews} from '../utils/data';
import {AiFillStar} from 'react-icons/ai';

export default function Guarantee() {
  return (
    <div className='w-full mb-6'>
        <div className='flex items-center justify-center w-full'>
            <p className='border-b-2 border-headingColor w-[30%]'></p>
            <div className='w-[20%] h-150'>
               <img
                src={star}
                alt=""
                className="w-full h-full object-contain rounded-xl"
                />
            </div>
            <p className='border-b-2 border-headingColor w-[30%]'></p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-2xl font-bold'>
                100% Satisfaction Guarantee
            </p>
            <p className='text-lg'>
                If you are not satisfied by consultation. We promise you to refund and you can take another Guruji
            </p>
        </div>

        <div className='mt-8 flex flex-wrap gap-3 items-center justify-around'>
            {reviews.map((item)=>{
                
                return (
                    <div key={item.id} className=' w-300 sm:w-460 md:w-[550px]
                    flex items-center justify-center h-auto p-2 border-2 border-gray-200 shadow-lg'>
                        <div className='w-[20%] h-[80%] flex items-center justify-center'>
                            <img
                            src={item?.src}
                            alt=""
                            className='rounded-full w-10 min-w-[60px] h-10 min-h-[60px] shadow-2xl cursor-pointer'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center w-[75%] h-[80%] pl-2'>
                            <p className='text-lg font-bold'>
                                {item.name} to <span className='text-headingColor'>{item.to}</span>
                            </p>
                            <p className='text-headingColor flex flex-row items-center justify-center'>
                                <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                                &nbsp;<span className='text-black'>{item.date}</span>
                            </p>
                            <p className='text-base'>{item.review}</p>
                            <br />
                            <p className='flex flex-row items-center justify-center p-1 gap-1'>
                                {item.astr.map((ast,index)=>{
                                    return (
                                        <p key={index} className='p-1 border-2 border-headingColor rounded-xl'>{ast}</p>
                                    )
                                })}
                            </p>
                            <br />
                        </div>
                    </div>
                )
            })}
        </div>

    </div>
  )
}
