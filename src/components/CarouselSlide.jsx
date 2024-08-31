import React from 'react'
import { CarouselItem } from '@/components/ui/carousel'
import { Link } from 'react-router-dom'

function CarouselSlide({image , name , to}) {
  return (
    <CarouselItem>
    <div className=''>
     <div className=" relative   rounded-3xl overflow-hidden w-full h-[30vh] md:h-[50vh]">
       <img className=" w-full h-full object-coverobject-center" src={image} alt="" />
       <div className=" absolute w-full h-full flex items-end justify-center top-0 right-0">
         <div className="w-full bg-[#00000063] flex flex-col gap-2 min-h-20 text-white p-3 text-center ">
           <div className=" text-base sm:text-lg md:text-xl ">
             {name}
           </div>
           <Link to={to}>
           <button className=" sm:text-base text-sm underline"> 
             Explore Now
           </button>
           </Link>
         </div>

       </div>
     </div>
    </div>
   </CarouselItem>
  )
}

export default CarouselSlide