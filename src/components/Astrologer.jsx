import React, {useState} from 'react'
import {BsFillArrowUpCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

export default function Astrologer() {
    const [isOpen, setIsOpen] = useState(true)
  return (
    <div className='bg-astrbg w-full p-4'>
        <div className='mt-16 flex flex-col items-center justify-center'>
            <h1 className='font-bold text-3xl flex flex-row gap-3 items-center justify-center'>
                Why Astrology ? 
                {
                    isOpen ? 
                    <BsFillArrowUpCircleFill 
                        className='cursor-pointer'
                        onClick={()=>setIsOpen(!isOpen)}
                    /> 
                    :
                    <BsArrowRightCircleFill 
                        className='cursor-pointer'
                        onClick={()=>setIsOpen(!isOpen)}
                    />
                }
                
            </h1>
            <h3 className=' text-xl mb-8'>Astrology reveals the will of the god</h3>
        </div>
        
       {
        isOpen ?
        <div className='mb-8'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae aliquam hic, molestias, pariatur at dolorem eligendi quasi consectetur, harum nam perferendis debitis et! Perspiciatis, in earum ipsa ad exercitationem incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et porro, ipsa optio aliquid perferendis neque suscipit consequuntur quis hic delectus temporibus commodi autem odit consequatur quia ut distinctio perspiciatis obcaecati.</p>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, vel! Nesciunt officiis ad distinctio, recusandae mollitia deleniti provident officia nostrum laboriosam quo pariatur possimus dicta voluptas, quos nemo commodi. Voluptatem.</p>
       </div> 
        : 
        <></>
       }
       
        
    </div>
  )
}
