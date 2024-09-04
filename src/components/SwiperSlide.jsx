import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function SwiperSlide_comp({image , content , to}) {
  const [isOpen ,setIsOpen] =useState(false)
  return (
    <div onMouseOver={()=>{
      setIsOpen(true)
    }} onMouseLeave={()=>{
      setIsOpen(false)
    }} className=" cursor-pointer relative w-60 h-56 rounded-tr-3xl rounded-bl-3xl overflow-hidden">
      <img loading='lazy' className=" w-full h-full object-cover" src={image} alt="" />
    {content && (
        <div   className=' absolute top-0 flex justify-center items-end right-0 w-full h-full bg-transparent'>
        <div className={`${isOpen ? 'h-24' : 'h-16 '} bg-[#0000008c] text-sm py-5 text-white w-full  transition-all ease-in-out duration-500 flex flex-col gap-5`}>
          <div>
            {content}
          </div>
          <Link to={to}>
          <div className=' underline decoration-white'>
          Read More
          </div>
          </Link>
        </div>
      </div>
    )}
    </div>
  )
}

export default SwiperSlide_comp