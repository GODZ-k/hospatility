import React from 'react'
import { Link } from 'react-router-dom'

function DestinationCard({image , place , hotels , to}) {
  return (
    <Link to={to}>
    <div className=" shadow-md flex gap-4 items-center rounded-sm overflow-hidden">
    <div className=" sm:w-20 sm:h-20 w-16 h-16">
      <img loading='lazy'
        className=" w-full h-full object-center object-cover"
        src={image}
        alt=""
      />
    </div>
    <div className=' py-2 pr-2'>
      <div className="  font-semibold text-base">{place}</div>
      <div className=" text-gray-700 text-sm  ">{hotels} Hotels</div>
    </div>
  </div>
  </Link>
  )
}

export default DestinationCard