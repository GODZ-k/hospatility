import React from 'react'
import {
    Card,
    CardContent,

  } from "@/components/ui/card";
  import { Rating } from "@mui/material";
  import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

function HotelCard({image , hotel , address , plane , metro , rating , reviews , explore , book }) {
  return (
    <Card className={" bg-gray-50 w-96 sm:w-72 md:w-80 flex flex-col gap-3 p-4 overflow-hidden rounded-2xl"}>
              <div className=" w-full h-64 md:h-72">
                <div className=" w-full rounded-2xl overflow-hidden h-full">
                  <img
                    src={image}
                    className=" w-full h-full object-center object-cover"
                    alt=""
                  />
                </div>
              </div>
              <CardContent className=" bg-white shadow-md rounded-2xl w-full flex flex-col gap-2 p-3">
                <div className=" text-lg text-gray-800 font-semibold leading-normal">{hotel}</div>
                <div className=" text-sm text-gray-500">
{address}
                </div>
               {
                (plane || metro) &&(
                    <div className=" flex gap-2 my-1 items-center">
                    <span className=" font-semibold text-gray-600">Distance:</span>
                    <div className=" flex gap-3 text-sm">
                       {plane && (
                         <div className=" flex gap-2 items-center">
                         <i class="fa-solid fa-plane"></i> <div>{plane} km</div>
                         </div>
                       )}
                       {metro && (
                         <div className=" flex items-center gap-2">
                         <i class="fa-solid fa-train"></i> <div>{metro} km</div>
                         </div>
                       )}
                    </div>
                </div>
                )
               }
                <div className=" flex gap-3 text-sm">
                    <div>
                    <Rating name="half-rating" size="small" defaultValue={rating} precision={rating} readOnly />
                    </div>
                    <div className=" text-gray-600">
                        {reviews} Reviews
                    </div>
                </div>
                <div className=" flex gap-3 items-center">
                   <Link to={`/${explore}`}> <Button>Explore</Button></Link>
                   <Link to={book}> <Button className=" bg-transparent border text-black font-semibold border-black">Book</Button></Link>
                </div>
              </CardContent>
            </Card>
  )
}

export default HotelCard