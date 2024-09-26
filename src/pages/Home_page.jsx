import React, { useState } from "react";
import DestinationCard from "@/components/DestinationCard";
import Container from "@/components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import "swiper/css";
// import "swiper/css/navigation";;
// import "swiper/css/pagination";
import SwiperSlide_comp from "../components/SwiperSlide";
import CarouselSlide from "@/components/CarouselSlide";
import CouponCard from "@/components/CouponCard";
import { Link } from "react-router-dom";
import ContainerHead from "@/components/ContainerHead";
import { Button } from "@mui/material";

const hotels = [
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101426/WhatsApp_Image_2024-08-31_at_10.39.13_AM_1_ydad1h.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101343/WhatsApp_Image_2024-08-31_at_10.33.12_AM_2_bbdyxd.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101345/WhatsApp_Image_2024-08-31_at_10.33.14_AM_1_lbjnq5.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101424/WhatsApp_Image_2024-08-31_at_10.39.10_AM_1_z0t3p0.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101425/WhatsApp_Image_2024-08-31_at_10.39.09_AM_1_bnrtey.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101427/WhatsApp_Image_2024-08-31_at_10.39.12_AM_3_fxgqod.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101343/WhatsApp_Image_2024-08-31_at_10.33.11_AM_t4bacp.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101425/WhatsApp_Image_2024-08-31_at_10.39.11_AM_1_cifu4w.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101430/WhatsApp_Image_2024-08-31_at_10.39.19_AM_bzhhyf.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101340/WhatsApp_Image_2024-08-31_at_10.33.07_AM_2_lrkwql.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101342/WhatsApp_Image_2024-08-31_at_10.33.09_AM_1_kjnnay.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101339/WhatsApp_Image_2024-08-31_at_10.33.05_AM_1_csvvn2.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101340/WhatsApp_Image_2024-08-31_at_10.33.06_AM_2_fslmrq.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101344/WhatsApp_Image_2024-08-31_at_10.33.09_AM_2_dqs6ij.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101340/WhatsApp_Image_2024-08-31_at_10.33.06_AM_1_oq8vpf.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101339/WhatsApp_Image_2024-08-31_at_10.33.05_AM_2_lwrweb.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101342/WhatsApp_Image_2024-08-31_at_10.33.09_AM_wtzay6.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101334/WhatsApp_Image_2024-08-31_at_10.37.14_AM_2_qck7nz.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101431/WhatsApp_Image_2024-08-31_at_10.39.20_AM_mucrck.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101340/WhatsApp_Image_2024-08-31_at_10.33.07_AM_3_kmstzt.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101334/WhatsApp_Image_2024-08-31_at_10.37.15_AM_2_xcy3n6.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101427/WhatsApp_Image_2024-08-31_at_10.39.13_AM_a4f43i.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101336/WhatsApp_Image_2024-08-31_at_10.37.20_AM_2_o2lga8.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101336/WhatsApp_Image_2024-08-31_at_10.37.19_AM_yxwvbb.jpg",
    content: "",
    to: ""
  },
  {
    src: "https://res.cloudinary.com/dlkzk9g9k/image/upload/v1725101335/WhatsApp_Image_2024-08-31_at_10.37.16_AM_2_spqbxj.jpg",
    content: "",
    to: ""
  }
];

function Home_page() {
  return (
    <div>
      {/* video section */}
      <div id="home" className=" relative h-[100vw] sm:h-[80vw] lg:h-[45vw]">
        <video
          className="-z-10 h-full w-full object-cover object-center -z-1"
          src="https://res.cloudinary.com/dhb7hrvvn/video/upload/v1725083588/lav7_nrcir7.mp4"
          loop
          autoPlay
          muted
        ></video>
        <div className=" absolute top-0 pb-28 right-0 h-full w-full">
          <div className=" flex justify-center h-full w-full items-end">
            <div className=" relative">
              <input
                type="text"
                placeholder="Where to Next?"
                className=" z-10 bg-white border border-gray-300 py-1.5 placeholder:text-sm md:placeholder:text-base sm:py-2 px-4 rounded-md w-60 md:w-96"
              />
              <i className=" absolute top-3 right-3 text-sky-600 fa-solid fa-magnifying-glass"></i>
            </div>
          </div>{" "}
        </div>
      </div>
      {/* choose destination */}
      <Container id="hotels">
        <ContainerHead
          className={" sm:gap-16 "}
          head={"Choose Your Destination"}
        >
          <div className=" flex justify-center ">
            <div className=" grid grid-cols-2 w-full md:grid-cols-3 gap-4">
              {/* destination card */}
              <DestinationCard
                image={
                  "https://res.cloudinary.com/dhb7hrvvn/image/upload/v1725084571/lavender1_kgi0wu.jpg"
                }
                to="/goa_hotels"
                place={"Goa"}
                hotels={3}
              />
              <DestinationCard
                image={
                  "https://res.cloudinary.com/dhb7hrvvn/image/upload/v1725084866/muss_iojr6d.jpg"
                }
                place={"Mussoorie"}
                to="/mussoorie_hotels"
                hotels={3}
              />
              <DestinationCard
                image={
                  "https://res.cloudinary.com/dhb7hrvvn/image/upload/v1725084345/be3_o0gd1m.jpg"
                }
                place={"Haridwar"}
                to="/haridwar_hotels"
                hotels={2}
              />
            </div>
          </div>
          {/* <button className=" w-full flex justify-center items-center">
            <div className=" px-7 py-2.5 rounded-lg text-white bg-black ">
              Explore more destination
            </div>
          </button> */}
        </ContainerHead>
      </Container>

      {/* upcoming hotels */}
      <Container>
        <div className=" flex justify-between gap-10 md:flex-row flex-col">
          <div className=" pt-5 w-full flex flex-col gap-3">
            <div className=" font-semibold sm:text-3xl text-2xl">
              Be Ready for Our Exciting Transformation!
            </div>
            <div className=" text-gray-600">
              We’re renovating, but you can plan ahead! Book early to enjoy our
              refreshed spaces and exclusive reopening offers. Stay tuned for
              special deals and updates on our grand reveal!
            </div>
            <button className=" w-fit bg-black py-2 px-3 rounded-md text-white">
              Explore
            </button>
          </div>
          <div className="w-full  overflow-hidden">
            <Swiper
              modules={[Navigation, Autoplay, Scrollbar]}
              autoplay={{ delay: 2500 }}
              slidesPerView={3}
              // centeredSlides={true}
              loop={true}
              spaceBetween={20}
              pagination={{
                type: "fraction",
              }}
              className="mySwiper"
            >
              {hotels?.map((hotel,index) => (
                <SwiperSlide key={index}>
                  <SwiperSlide_comp
                    image={hotel.src}
                    // content={'Baris Hotel and Resort'}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </Container>

      {/* News editor */}
      <Container>
        <ContainerHead head={"Our Newest Additions"}>
          <div className=" rounded-3xl px-10 md:px-0">
            <Carousel>
              <CarouselContent>
                <CarouselSlide
                  image={
                    "https://res.cloudinary.com/dhb7hrvvn/image/upload/v1725084345/de2_qw1k0l.jpg"
                  }
                  name={"Hotel Drive Inn, Mussoorie"}
                  to={"/"}
                />
                <CarouselSlide
                  image={
                    "https://res.cloudinary.com/dhb7hrvvn/image/upload/v1725084346/lav2_alrj7i.jpg"
                  }
                  name={"Lavender Villa , Goa"}
                  to={"/"}
                />
                <CarouselSlide
                  image={
                    "https://res.cloudinary.com/dhb7hrvvn/image/upload/v1725087998/baris_koyiz6.jpg"
                  }
                  name={"BARIS Hotel, Mussoorie"}
                  to={"/"}
                />
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </ContainerHead>
      </Container>

      {/* offers and promotions */}
      {/* <Container id="offers">
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
      </Container> */}

      {/* What's new  */}
      <Container id="about">
        <ContainerHead head={"What's New"}>
          <div className=" shadow-md p-5 rounded-3xl flex w-full flex-col-reverse sm:flex-row sm:gap-8 gap-5">
            <div className=" w-full sm:w-[50rem] flex flex-col gap-4">
              <div className=" text-xl font-semibold">
                Tradition Meets Modern Luxury
              </div>
              <div className=" text-[15px] text-gray-600">
                Discover the Muss Collection at our hotel, where timeless
                elegance and modern comfort converge. Enjoy a stay that blends
                classic charm with contemporary style, offering exceptional
                service and sophistication. Redefine your travel experience with
                our unique fusion of tradition and luxury
              </div>
              <Link>
                <button className=" bg-black py-3 px-4 rounded-lg text-white">
                  Click here for more detail
                </button>
              </Link>
            </div>
            <div className=" sm:w-[40rem] w-full rounded-2xl overflow-hidden">
              <img loading='lazy'
                className=" w-full h-full object-center object-cover"
                src="https://res.cloudinary.com/dhb7hrvvn/image/upload/v1725095849/company_xhtqyg.jpg"
                alt=""
              />
            </div>
          </div>
        </ContainerHead>
      </Container>

      {/* Reward Program */}
      <Container
        id="rewards"
        className={"lg:w-full"}
        mainClassNamee={"px-0 sm:p-0 md:!p-0"}
      >
        <ContainerHead head={"Our Rewards Program"}>
          <div className=" relative w-full h-96">
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
      </Container>

      {/* Substainability */}

      <Container id="sustainability">
        <ContainerHead head={"Sustainability"}>
          <div className=" w-full h-[50vW]">
            <iframe
              className=" w-full h-full object-cover object-center"
              src="https://www.youtube-nocookie.com/embed/vZE35FI3wxw?playlist=vZE35FI3wxw&iv_load_policy=3&loop=1&modestbranding=1&mute=1&enablejsapi=1&origin=https%3A%2F%2Fwww.lemontreehotels.com"
              frameborder="0"
            ></iframe>
          </div>
        </ContainerHead>
      </Container>
    </div>
  );
}

export default Home_page;
