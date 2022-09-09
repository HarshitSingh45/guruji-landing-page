import React, {} from 'react'


export default function RowContainer({ flag, data }) {
  
  return (
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
            className=" min-w-[200px] h-[275px]  
             rounded-xl hover:drop-shadow-lg relative mb-5"
            //  flex flex-col items-center justify-evenly "
          >
                <img
                  src={item?.src}
                  alt=""
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className='text-white absolute left-8 bottom-10'>
                    <h2 className='font-bold text-xl'>{item.name}</h2>
                    <p className='text-lg'>{item.desc}</p>
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
  )
}
