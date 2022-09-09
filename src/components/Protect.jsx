import React from 'react'
import { protectData } from '../utils/data'

export default function Protect() {
  return (
    <div className='w-full bg-workbg p-6'>
        <div className='text-3xl font-bold mb-5 flex items-center justify-center'>We protect the rights of user</div>
        <div className='flex items-center justify-center'>
            {
                protectData.map((item) => {
                    return (
                        <div key={item.id} className='w-[30%]  flex flex-col items-center justify-center'>
                            <div>
                                <img src={item.src} alt="" />
                            </div>
                            <div>{item.name}</div>
                        </div>
                    )
                }) 
            }
        </div>
    </div>
  )
}
