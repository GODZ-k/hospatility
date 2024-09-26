import React from 'react'

function Facilities({image,title}) {
  return (
    <div className=" flex justify-center items-center flex-col gap-2">
    <div className="w-12 h-12">
        <img src={image} alt="" />
    </div>
    <div className=" text-gray-800 text-sm">
       {title}
    </div>
  </div>
  )
}

export default Facilities