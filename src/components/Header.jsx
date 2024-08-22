import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [navBar, setNavbar] = useState(false);

  return (
    <div className=" z-50 w-full py-2 px-4 sm:px-8 fixed bg-transparent backdrop-blur-md">
      <div className=" flex justify-between gap-8 items-center relative">
        <div className=" w-28 flex justify-center items-center">
          <img
            className=" h-full w-full object-center object-cover"
            src="logo.png"
            alt=""
          />
        </div>
          <div
            className={`${
              navBar ? "right-0" : "-right-96"
            } w-80 md:w-fit md:static fixed h-screen md:h-auto top-0 transition-all ease-in-out lg:text-base text-base md:text-sm bg-white md:bg-transparent px-10 pt-20 md:p-0 `}
          >
            <div className=" absolute md:hidden visible top-8 left-10">
              <button className=" text-lg" onClick={() => setNavbar(false)}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <ul className=" pt-10 md:pt-0 flex md:flex-row flex-col md:bg-transparent gap-14 md:gap-8 lg:gap-10 md:text-white text-black md:items-center justify-between">
                <Link>
                <li>Home</li></Link>
              <li>Hotel</li>
              <li>Offers & Promotions</li>
              <li>Rewards Program</li>
              <li>Our Brands</li>
              <li>Sustainability</li>
            </ul>
          </div>
        <div className=" flex gap-8 items-center">
          <button className=" py-1.5 px-3 text-sm bg-yellow-500 border border-white rounded-md">
            Book Now
          </button>
        <div className=" md:hidden text-white visible text-xl">
          <button onClick={() => setNavbar(!navBar)}>
            <i class="fa-solid fa-bars"></i>
          </button>
        </div> 
        </div>
      </div>
    </div>
  );
}

export default Header;
