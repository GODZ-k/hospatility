import React, { useState } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const hotelLocation = [
  {
    name:"BARIS Hotel in Mussoorie"
  },
  {
    name:"Hotel in Haridwar"
  },
  {
    name:"Lavender Villa in Goa"
  },
  {
    name:"Hotel Drive Inn Mussoorie"
  },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
  // {
  //   name:"Hotel in Agra"
  // },
]
function Footer() {
  const [isOpen , setIsOpen] = useState(false)

  return (
    <div className=" bg-black w-full  text-white p-5">
      <Container mainClassNamee={"pb-0 sm:pb-0 md:pb-0"}>
        <div className=" mb-10">
          <button onClick={()=> setIsOpen(!isOpen)} className=" flex gap-3 items-center">
            <div className=" font-semibold text-xl">Our Presence</div>
            {isOpen ? <i class="fa-solid fa-minus"></i> : <i className=" font-semibold fa-solid fa-plus"></i>}
          </button>
        { hotelLocation.length>0 && (
           isOpen && (
            <div className="w-full my-8">
            <ul className=" flex  flex-wrap gap-5">
             {hotelLocation?.map((hotel)=>(
               <li className=" text-gray-400">{hotel.name}</li>
             ))}
            </ul>
          </div>
           )
        )}
        </div>
        <div className=" flex justify-start sm:justify-between gap-16 flex-wrap">
          <ul className=" w-fit flex flex-col gap-3">
            <li>Awards</li>
            <li>About us</li>
            <li>Career</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Newsletters</li>
          </ul>
          <ul className=" w-fit flex flex-col gap-3">
            <li>Blogs</li>
            <li>Day Use</li>
            <li>Cookie Policy</li>
            <li>Non Affiliation</li>
            <li>Term & Conditions</li>
          </ul>
          <ul className=" w-fit flex flex-col gap-3">
            <li>Media</li>
            <li>Site Map</li>
            <li>Travel Guidelines</li>
            <li>Investor Relations</li>
          </ul>
        </div>
        <div className=" w-full sm:items-end sm:justify-between flex flex-col sm:flex-row gap-10 my-10">
          <div className=" flex flex-col gap-4">
            <div className=" text-2xl font-semibold">Join our newsletters</div>
            <div className=" flex gap-3">
              <input
                type="text"
                className=" placeholder:px-2 rounded-lg"
                placeholder="Enter your Email Id"
              />
              <button className="bg-yellow-600 py-3 px-4 text-white border border-white rounded-lg ">
                Submit
              </button>
            </div>
          </div>
          <div className=" flex items-center gap-4 ">
            <div className=" text-lg sm:text-xl">Follow Us</div>
            <div className=" flex gap-4">
              <Link>
                <i className=" text-2xl fa-brands fa-instagram"></i>
              </Link>
              <Link>
                <i className=" text-2xl  fa-brands fa-facebook"></i>
              </Link>
              <Link>
                <i className="text-2xl  fa-brands fa-twitter"></i>
              </Link>
              <Link>
                <i className="text-2xl fa-brands fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className=" text-xs text-center text-gray-400 mt-10">
          ©2024 by Gorgeous Hospitality Hotels Ltd. All Rights Reserved.
        </div>
      </Container>
    </div>
  );
}

export default Footer;
