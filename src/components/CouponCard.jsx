import React from "react";
import { Link } from "react-router-dom";

function CouponCard({ image, offer, to }) {
  return (
    <div className=" shadow-md w-full sm:w-64 sm:h-auto h-64  flex flex-row sm:flex-col rounded-2xl overflow-hidden">
      <div className="w-full h-full sm:h-52">
        <img
          className=" w-full h-full object-center object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className=" sm:w-fit w-96 flex gap-3 justify-between flex-col px-3 py-4">
        <div className=" w-full flex flex-col gap-2">
          <div className=" text-lg font-semibold sm:text-lg">{offer}</div>
          <div className="  text-sm">
            Unlock daily delight with our Happy Hours! Join us from 5 PM to 7 PM
            at the bar for a burst of joy and unbeatable deals that will turn
            every day into a celebration.
          </div>
        </div>
        <Link to={to}>
          <button className=" bg-black text-sm text-white py-2 px-3 rounded-md ">
            Explore
          </button>
        </Link>
      </div>
      <div></div>
    </div>
  );
}

export default CouponCard;
