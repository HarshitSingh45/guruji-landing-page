import React from 'react'
import { work as data } from '../utils/data';

export default function Working() {
    const flag = true;
return (
    <div className='w-full bg-workbg'>
        <div className='pt-4 text-2xl font-bold flex items-center justify-center'>How it works</div>       
  
    <div
      className={`w-full bg-workbg flex items-center gap-5  my-12 scroll-smooth  ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >

      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item?.id}
            className=" min-w-[300px] min-h-[400px]  
             rounded-xl mb-5 ml-5 pb-6
             flex flex-col items-center justify-evenly "
          >
                <img
                  src={item?.src}
                  alt=""
                  className="w-full h-full object-contaian rounded-xl"
                />
                <div className='font-bold text-lg'>{item.name}</div>
                <div>{item.desc}</div>

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
