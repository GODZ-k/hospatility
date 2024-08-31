import React from 'react'

function DestinationCard({image , place , hotels}) {
  return (
    <div className=" shadow-md flex gap-4 items-center rounded-sm overflow-hidden">
    <div className=" sm:w-20 sm:h-20 w-16 h-16">
      <img
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
  )
}

export default DestinationCard