import React from "react";
import { Link } from "react-router-dom";
import { GiSleepingBag } from "react-icons/gi";
import { FaWifi } from "react-icons/fa6";
import { MdDinnerDining } from "react-icons/md";

function CouponCard({ image, offer, to,content }) {
  return (
    <div className=" shadow-md w-full sm:w-64 sm:h-auto h-64  flex flex-row sm:flex-col rounded-2xl overflow-hidden">
      <div className="w-full h-full sm:h-52">
        <img loading='lazy'
          className=" w-full h-full object-center object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className=" sm:w-fit w-96 flex gap-3 justify-between flex-col px-3 py-4">
        <div className=" w-full flex flex-col gap-2">
          <div className=" text-lg font-semibold sm:text-lg">{offer}</div>
          <div className=" flex flex-col gap-9">
          <div className="  text-sm">
            {content}
          </div>
          <div className="flex gap-3 text-xl ">
          <GiSleepingBag />
          <FaWifi />
          <MdDinnerDining />
          </div>
          </div>
        </div>
       {
      to &&(
        <Link to={to}>
        <button className=" bg-black text-sm text-white py-2 px-3 rounded-md ">
          Explore
        </button>
      </Link>
      )
       }
      </div>
      <div></div>
    </div>
  );
}

export default CouponCard;
