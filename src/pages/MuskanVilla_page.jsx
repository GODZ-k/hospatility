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

function MuskanVilla_page() {

    const facilities = [
        {
            image:"https://www.lemontreehotels.com/uploads/images/19_20_2023_03_20_22disabled.png",
            title:"Accessable Rooms"
        },
        {
            image:"https://www.lemontreehotels.com/uploads/images/19_20_2023_03_20_22disabled.png",
            title:"Accessable Rooms"
        },
        {
            image:"https://www.lemontreehotels.com/uploads/images/19_20_2023_03_20_22disabled.png",
            title:"Accessable Rooms"
        },
        {
            image:"https://www.lemontreehotels.com/uploads/images/19_20_2023_03_20_22disabled.png",
            title:"Accessable Rooms"
        },
        {
            image:"https://www.lemontreehotels.com/uploads/images/19_20_2023_03_20_22disabled.png",
            title:"Accessable Rooms"
        },
        {
            image:"https://www.lemontreehotels.com/uploads/images/19_20_2023_03_20_22disabled.png",
            title:"Accessable Rooms"
        },
        {
            image:"https://www.lemontreehotels.com/uploads/images/19_20_2023_03_20_22disabled.png",
            title:"Accessable Rooms"
        },
        {
            image:"https://www.lemontreehotels.com/uploads/images/19_20_2023_03_20_22disabled.png",
            title:"Accessable Rooms"
        },
    ]
    const images = [
        {
           src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",

           caption: "After Rain (Jeshu John - designerspics.com)",
        },
        {
           src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",

           alt: "Boats (Jeshu John - designerspics.com)",
        },
        {
           src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",

        },
        {
           src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",

        },
     ];
  return (
    <Container className=" pt-12">
      {/* <Container> */}
      <BreadCrumb location={"gurgaon"} location_url={"/gurgaon_hotels"} />
      {/* </Container> */}

      <div className=" flex-col sm:flex-row mt-20 gap-10 flex justify-between sm:items-center">
        <div className=" flex gap-2 items-center">
          <div className="w-32">
            <img
              src="logo.png"
              className=" h-full w-full object-center object-cover"
              alt=""
            />
          </div>
          <div>
            <div className=" text-xl font-semibold sm:text-2xl text-gray-800">
              Lemon Tree Hotel, Kalina, Mumbai
            </div>
            <div className=" text-sm sm:text-base">
              176, CST Road, Santacruz (East), Kalina, Mumbai, Maharashtra -
              400098, India
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
          <div className=" text-gray-600">998 Reviews</div>
        </div>
      </div>
      
      <div className=" pt-8 w-full min-h-32">
      <Gallery className=" h-full w-full" images={images} />
      </div>


      <div className="pt-10 pb-20 flex flex-col gap-6 items-center">
        <div className=" sm:text-base text-sm text-gray-700 text-md text-center">
          Handpicked amongst the best hotels in Santacruz for you, located in
          the heart of Mumbai, Lemon Tree Hotel, Kalina is a short ten-minute
          drive from Chhatrapati Shivaji Maharaj International Airport.
          Strategically situated in immediate proximity to Bandra Kurla Complex,
          the thriving business district, and not far from the key areas of
          Santacruz, Bandra and Juhu, this hotel is the perfect address for
          travellers to the financial capital.
        </div>
        <div>
          <Button>Click here for more detail</Button>
        </div>
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
      </div>


{/* menu timing */}
<div className="">
      <div className=" flex text-4xl font-semibold mb-9">
      <h1>Resturants</h1>
      </div>

      <div className=" flex flex-col md:flex-row gap-8 md:gap-16 w-full">
        <div className="w-full rounded-md overflow-hidden   bg-blue-200">
          <img src="https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727326603/lovepik-hotel_gkzfvo.jpg" alt="" className=" w-full  h-full"/>
        </div>
        <div className="flex flex-col gap-9 w-full">
          <div className=" flex flex-col gap-3">
            <h1 className=" text-3xl text-gray-800 font-semibold">Republic of Noodles</h1>
            <p className=" text-sm sm:text-base">There are multiple matches for Musa Villa, including a 
              luxury villa on Lake Como, a property in Gili Air, Indonesia, and a luxury villa in Marrakech: 
             Villa Musa, Lake Como
             A luxury villa on the west shore of Lake Como, Italy, this villa has six 
             bedrooms and can accommodate up to 12 people. It has a swimming pool, jacuzzi, gym equipment, and a fully 
             equipped kitchen. The villa also offers a spa, cooking classes, and bicycle rentals. </p>
          </div>

          <div className=" flex flex-col gap-3 ">
          <div className=" flex gap-4 ">
            <div className="text-2xl w-5">
            <i class="fa-solid fa-utensils"></i>
            </div>
            <div className="">
              <h1 className=" items-center text-lg font-serif"><span className="font-bold">Cuisine Type: </span>Pan Asian</h1>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-2xl w-5">
            <i class="fa-solid fa-file-lines"></i>
            </div>
            <div className="">
              <h1  className="items-center text-lg font-serif"><span className="font-bold">Menu: </span>Carte</h1>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-2xl w-5">
              <i class="fa-regular fa-clock"></i>
              </div>
            <div className="">
              <h1 className=" items-center text-lg font-serif"><span className="font-bold">Timing: </span> 5:00 PM To 11:00 PM</h1>
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
      <div className=" py-10" id="offers">
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
      </div>

       {/* Aminities */}
       <div className=" py-16">
       <ContainerHead head={"Aminities"}>
          <div id="aminities" className=" sm:text-base text-sm text-center text-gray-600 flex justify-center">
          Experience convenience at its best with our 24x7 Front Desk and Housekeeping services, ensuring assistance whenever you need it. Take advantage of travel assistance and currency exchange for a hassle-free journey. Rest easy knowing that on-site parking facilities are available for your convenience. Trust us to provide a seamless stay with our dedicated staff and essential amenities.
          </div>
          <div className=" pb-16 flex-wrap flex justify-center items-center gap-10">
        
           <Facilities image={"https://www.lemontreehotels.com/uploads/images/19_20_2023_03_20_22disabled.png"} title={"Transport"}/>
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
                  Exclusive rewards and privileges for members, including
                  complimentary stays, upgrades, special offers, and previews,
                  with limitless possibilities to enhance your experience and
                  enjoyment. Enjoy a world of benefits tailored just for you.
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
        <FAQ answer={"The best time to visit Delhi is during the winter months, from November to February. The weather is relatively cool and pleasant, making it suitable for outdoor activities and sightseeing. Avoid visiting during the scorching summer months (April to June) due to high temperatures, and the monsoon season (July to September) due to heavy rainfall and humidity."} question={"What is the best time to visit gurgaon"}/>
        <FAQ answer={"The best time to visit Delhi is during the winter months, from November to February. The weather is relatively cool and pleasant, making it suitable for outdoor activities and sightseeing. Avoid visiting during the scorching summer months (April to June) due to high temperatures, and the monsoon season (July to September) due to heavy rainfall and humidity."} question={"What is the best time to visit gurgaon"}/>
        <FAQ answer={"The best time to visit Delhi is during the winter months, from November to February. The weather is relatively cool and pleasant, making it suitable for outdoor activities and sightseeing. Avoid visiting during the scorching summer months (April to June) due to high temperatures, and the monsoon season (July to September) due to heavy rainfall and humidity."} question={"What is the best time to visit gurgaon"}/>

        
         </div>
          </div>
      </ContainerHead>
    </Container>
  );
}

export default MuskanVilla_page;
