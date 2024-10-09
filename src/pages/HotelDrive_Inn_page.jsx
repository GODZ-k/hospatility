
import BreadCrumb from "@/components/BreadCrumb";
import Container from "@/components/Container";
import ContainerHead from "@/components/ContainerHead";
import CouponCard from "@/components/CouponCard";
import { Gallery } from "react-grid-gallery";
import Facilities from "@/components/Facilities";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

function HotelDrive_Inn_page() {
    const facilities = [
        {
            image:"https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727413899/garden-_n7x3d0.webp",
            title:"Garden"
        },
        {
            image:"https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727413971/swwiming_pool_i6op4w.png",
            title:"Swimming Pool"
        },
        {
            image:"https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727414345/houskepping_igsle6.png",
            title:"HousKeeping"
        },
        {
            image:"https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727414211/wifi_pzehfy.png",
            title:"Internet/Wifi"
        },
        {
            image:"https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727414210/resturant_ptce9g.png",
            title:"Restaurant"
        },
        {
            image:"https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727415630/Toiletries_vns7gn.png",
            title:"Toiletries"
        },
        {
            image:"https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727415728/Laundry_Service_p3wto4.png",
            title:"Laundry Service"
        },
        
    ]
    const images = [
        {
           src: "https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727671816/fe8c657e_ntzriy.webp",

           caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
           src: "https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727671816/hotel-drive-inn_1_ygntxd.jpg",

           alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
           src: "https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727671816/hotel-drive-inn_popc1w.jpg",

        },
        {
           src: "https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727671816/7_zcwppo.jpg",

        },
        {
          src: "https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727671815/70858147e35f4de332a48a141102039f_alcrui.jpg",

       },
       {
        src: "https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727436598/79989fec9d9211eea0210a58a9feac02_rxskfm.avif",

     },
    
     ];
  return (
    <Container className=" pt-12">
      {/* <Container> */}
      <BreadCrumb location={"Mussoorie"} location_url={"/mussoorie_hotels"} />
      {/* </Container> */}

      <div className=" flex-col sm:flex-row mt-20 gap-10 flex justify-between sm:items-center">
        <div className=" flex gap-2 items-center">
          <div className="w-32">
            <img
              src="https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727765053/logo_osbwiu.png"
              className=" h-full w-full object-center object-cover"
              alt=""
            />
          </div>
          <div>
            <div className=" text-xl font-semibold sm:text-2xl text-gray-800">
            Hotel Drive Inn Mussoorie
            </div>
            <div className=" text-sm sm:text-base">
            Near Picture Palace Mall Road Mussoerrie uttrakhnd - 248179
            </div>
          </div>
        </div>
        <div className=" flex gap-3 text-sm">
          <div>
            <Rating
              name="half-rating"
              size="small"
              defaultValue={"4"}
              precision={"4"}
              readOnly
            />
          </div>
          <div className=" text-gray-600">55 Reviews</div>
        </div>
      </div>
      
      <div className=" pt-8 w-full min-h-32">
      <Gallery className=" h-full w-full" images={images} />
      </div>


      <div className="pt-10 pb-20 flex flex-col gap-6 items-center">
        <div className=" sm:text-base text-sm text-gray-700 text-md text-center">
      A modest, family-friendly property with beautiful Himalayan views, the Drive Inn is 
      centrally located on bustling Mall Road in Mussoorie, the "Queen of Hills." The spacious
       standard guest rooms include a flat-screen television, Wi-Fi access, and an en-suite bathroom
        with complimentary toiletries. Superior rooms overlook the mountains. Air-conditioning and mini
         refrigerators are available upgrades. The Drive Inn welcomes travellers with a 24-hour front desk and plenty of free parking. 
        </div>
        {/* <div>
          <Button>Click here for more detail</Button>
        </div> */}
      </div>
      
      {/* facilities */}
      <div className=" pb-16 flex-wrap flex justify-center items-center gap-10">
        {facilities?.map((hotel,index)=>(
     <Facilities key={index} image={hotel.image} title={hotel.title}/>
        ))}
      </div>

{/* rooms features */}
<div className=" py-10" id="offers">
        <ContainerHead head={"Rooms & Suites"}>
          <div id="offers" className=" flex justify-center">
            <div className=" grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
              <CouponCard
                image={
                  "https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727671816/IMG_6004_original_XYWNNW_psoi88.jpg"
                }
                // to={"/"}
                content={"There are there living areas in the villa. All the living rooms have air conditioners. It could accommodate up to 6 to 10 people. "}
                offer={"BeadRooms"}
              />
              <CouponCard
                image={
                  "https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727674512/noon_bm8llv.jpg"
                }
                // to={"/"}
                content={" Your dining room is one of the most special spaces in your home to make memories with the people you love."}
                offer={"Dining-Area"}
              />
              <CouponCard
                image={
                  "https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727671815/20180418-162742-largejpg_hxmh1r.jpg"
                }
                // to={"/"}
                content={" Bathroom facilities can refer to a room with a toilet, sink, and sometimes a shower or bathtub, or to the equipment, services, or buildings that provide these facilities"}
                offer={"Bathroom"}
              />
               <CouponCard
                image={
                  "https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727674533/224e226a61f5c9fa_r47zqd.jpg"
                }
                // to={"/"}
                content={"A bedroom seating area will provide additional space to easily unwind with a book or send off a few emails from the comfort of your bedroom."}
                offer={"Bedroom-seating area"}
              />
            </div>
          </div>
          {/* <div className=" w-full flex justify-center">
      <Link>
      <Button className=" w-fit bg-gray-800 text-white " sx={{ color:"white", background:"black", textDecoration:"none" , textTransform:"none"}}>
            View more
          </Button>
          </Link>
          </div> */}
        </ContainerHead>
</div>


{/* menu timing */}
<div className="">
<div className=" flex text-4xl font-semibold mb-9">
<h1>Resturants</h1>
</div>

<div className=" flex flex-col md:flex-row gap-8 md:gap-16 w-full">
<div className="w-full rounded-md overflow-hidden   bg-blue-200">
  <img src="https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727671816/hotel-drive-inn-picture-palace-mussoorie-hotels-1l9xk3grzj_majdxd.avif" alt="" className=" w-full  h-full"/>
</div>
<div className="flex flex-col gap-9 w-full">
  <div className=" flex flex-col gap-3">
    <h1 className=" text-3xl text-gray-800 font-semibold">Republic of Noodles</h1>
    <p className=" text-sm sm:text-base">Apart from offering luxury accommodation, the 
      property offers various other leisure activities that the guests can indulge in.
       One can play indoor games like Ludo, UNO, Monopoly, and more. One can step outdoors
        and play badminton or cricket.</p>
  </div>

  <div className=" flex flex-col gap-3 ">
  <div className=" flex gap-4 ">
    <div className="text-2xl w-5">
    <i class="fa-solid fa-utensils"></i>
    </div>
    <div className="">
      <h1 className=" items-center text-md font-serif"><span className="font-bold">Cuisine Type: </span>Pan Asian</h1>
    </div>
  </div>

  <div className="flex gap-4">
    <div className="text-2xl w-5">
    <i class="fa-solid fa-file-lines"></i>
    </div>
    <div className="">
      <h1  className="items-center text-md font-serif"><span className="font-bold">Menu: </span>Card</h1>
    </div>
  </div>

  <div className="flex gap-4">
    <div className="text-2xl w-5">
      <i class="fa-regular fa-clock"></i>
      </div>
    <div className="">
      <h1 className=" items-center text-md font-serif"><span className="font-bold">Timing: </span> 7:00 AM To 11:00 PM</h1>
    </div>
  </div>
  </div>
  <div className=" ">
    <button className=" underline text-blue-950 text-lg">Explore</button>
  </div>
</div>
</div>
</div>

       {/* offers and promotions */}
      {/* <div className=" py-10" id="offers">
        <ContainerHead head={"Offers & Promotions"}>
          <div id="offers" className=" flex justify-center">
            <div className=" grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
              <CouponCard
                image={
                  "https://www.lemontreehotels.com/assets/front/images/6638a8966b8a8Sign%20Up.jpg"
                }
                to={"/"}
                offer={"Happy Hour"}
              />
              <CouponCard
                image={
                  "https://www.lemontreehotels.com/assets/front/images/6638a8966b8a8Sign%20Up.jpg"
                }
                to={"/"}
                offer={"Happy Hour"}
              />
              <CouponCard
                image={
                  "https://www.lemontreehotels.com/assets/front/images/6638a8966b8a8Sign%20Up.jpg"
                }
                to={"/"}
                offer={"Happy Hour"}
              />
            </div>
          </div>
          <div className=" w-full flex justify-center">
       <Link>
       <Button className=" w-fit bg-gray-800 text-white " sx={{ color:"white", background:"black", textDecoration:"none" , textTransform:"none"}}>
            View more
          </Button>
          </Link>
          </div>
        </ContainerHead>
      </div> */}

       {/* Aminities */}
       <div className=" py-16">
       <ContainerHead head={"Aminities"}>
          <div id="aminities" className=" sm:text-base text-sm text-center text-gray-600 flex justify-center">
          Experience convenience at its best with our 24x7 Front Desk and Housekeeping services, ensuring assistance
           whenever you need it. Take advantage of travel assistance and currency exchange for a hassle-free journey.
            Rest easy knowing that on-site parking facilities are available for your convenience. Trust us to provide a 
            seamless stay with our dedicated staff and essential amenities.
          </div>
          <div className=" pb-16 flex-wrap flex justify-center items-center gap-10 ">
        
           <Facilities image={"https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727419840/port_hlsjk4.png"} title={"Airport / Port Transfers"}/>
           <Facilities image={"https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727419840/Spa_Treatment_cpvd5c.png"} title={"Massage and Beauty Services"}/>
           <Facilities image={"https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727419840/Car_Rentals_sf65zu.png"} title={"Car Transport"}/>
      </div>
        </ContainerHead>
       </div>

       <div className=" py-16">
       <ContainerHead head={"Our Rewards Program"}>
          <div className=" rounded-xl overflow-hidden relative w-full h-96">
            <img loading='lazy'
              className=" w-full h-full object-bottom object-cover"
              src="https://res.cloudinary.com/dhb7hrvvn/image/upload/v1725096580/rew_raavio.jpg"
              alt=""
            />
            <div className=" absolute w-full h-full bg-[#00000063] flex items-center justify-center top-0 right-0">
              <div className="w-full sm:w-1/2 justify-start  flex flex-col gap-5 min-h-20 text-white p-3  ">
                <div className=" sm:text-lg md:text-xl text-base">
                These programs can offer rewards like discounts, free nights, or other perks. Guests
                 can earn points for staying at the hotel or participating in other activities. Points can 
                 be redeemed for rewards like gift cards, airline miles, or merchandise. Some programs have tiers,
                  with members earning more points and receiving better benefits as they progress. 

                </div>
                <div className=" text-3xl sm:text-5xl">Infinity Rewards</div>
                <div className=" flex gap-4 items-center">
                  <Link to="/">
                    <button className=" bg-transparent border border-white py-2 px-3 rounded-lg sm:text-base text-sm">
                      Explore Now
                    </button>
                  </Link>
                  <Link to="/">
                    <button className=" bg-black py-2 border border-black px-3 rounded-lg sm:text-base text-sm">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ContainerHead>
       </div>

      {/* FAQ */}
      <ContainerHead
          className={" sm:gap-16 "}
          head={"Frequently Asked Questions"}
        >
          <div className=" flex justify-center">
         <div className=" w-full md:w-4/5">
        <FAQ answer={"We offer chef services for meals in most of our villas and aim to expand this service to all properties. For meal availability details, check property descriptions or contact us directly.?"} question={"Does Lost Traveller provide chef for breakfast, lunch, snacks and dinner in all the villa stays?"}/>
        <FAQ answer={"Our villas offer barbecue setups, home theatres, private lawns, jacuzzis, heated pools, fishing, and exquisite culinary experiences. LTExperiences"} question={"What are the amenities offered in the villas by Lost Traveller?"}/>
        <FAQ answer={"We offer luxury experiences for all budgets. Our villas range from Rs.10,000 to Rs.75,000+ per night, depending on amenities, room count, and location."} question={"What is the price range of villas?"}/>

        
         </div>
          </div>
      </ContainerHead>
    </Container>
  );
}


export default HotelDrive_Inn_page
