import React from 'react'
import {MdOutlineAlternateEmail} from 'react-icons/md'
import {BiRupee} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'
import { consultants as data } from '../utils/data'
import sky from '../img/sky.jpeg'

export default function Consultants() {

    const flag = true;
    return (
        <div className='w-full'>
            <div className='pt-4 text-2xl font-bold flex items-center justify-center'>
                Start your first consultation <MdOutlineAlternateEmail /><BiRupee />5/min </div>       
      
        <div
          className={`w-full flex items-center gap-5  my-12 scroll-smooth  ${
            flag
              ? "overflow-x-scroll scrollbar-none"
              : "overflow-x-hidden flex-wrap justify-center"
          }`}
        >
    
          {data && data.length > 0 ? (
            data.map((item) => (
              <div
                key={item?.id}
                className=" min-w-[275px] min-h-[400px] border-2 border-gray-200
                 shadow-lg 
                 rounded-xl mb-5 ml-5 pb-6
                 flex flex-col items-center justify-evenly "
              >
                    <div className='relative w-full'>
                        <img
                        src={sky}
                        alt=""
                        className="w-full h-[200px]  object-contaian rounded-xl"
                        />
                        <img
                        src='https://media.istockphoto.com/photos/sadhu-or-baba-on-the-ghats-of-ganges-river-picture-id969162040'
                        alt=''
                        className=' absolute top-14 left-[35%] rounded-full w-10 min-w-[70px] h-10 min-h-[70px] shadow-2xl' 
                    />
                    </div>
                    
                    <div className='h-[200px] pl-3 w-full mt-2 leading-9'>
                        <div className='flex flow-row items-center justify-start'>
                            <AiFillStar className='text-headingColor'/>
                            {item.star} &nbsp;
                            ({item.votes} total)
                        </div>
                        <div className='font-bold text-lg'>{item.name}</div>
                        <div className='text-gray-500'>{item.exp}</div>
                        <div className='text-gray-500'>{item.language.map((item,index)=>item+'  ')}</div>
                        <div className='flex flex-row'>
                            <span className=' text-xl font-semibold flex flex-row items-center justify-center'> <BiRupee />{item.avlPrice}</span> &nbsp;
                            <span className='text-gray-500 flex flex-row items-center justify-center' style={{textDecoration: 'line-through'}}><BiRupee />{item.orgPrice}</span>
                        </div>
                        <div className='text-gray-500'>Est-time {item.estTime}</div>
                    </div>
                    
    
              </div>
            ))
          ) : (
            <div className="w-full flex flex-col items-center justify-center">
              {/* <img src={NotFound} className="h-340" /> */}
              <p className="text-xl text-headingColor font-semibold my-2">
                Items Not Available
              </p>
            </div>
          )}
        </div>
        </div>
      )
}
