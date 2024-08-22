import React, { useState } from "react";
import DestinationCard from "@/components/DestinationCard";
import Container from "@/components/Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Scrollbar } from "swiper/modules";
import { Carousel ,CarouselContent , CarouselNext , CarouselPrevious} from "@/components/ui/carousel"
import "swiper/css";
// import "swiper/css/navigation";;
// import "swiper/css/pagination";
import SwiperSlide_comp from "../components/SwiperSlide";
import CarouselSlide from "@/components/CarouselSlide";
import CouponCard from "@/components/CouponCard";
import { Link } from "react-router-dom";
import ContainerHead from "@/components/ContainerHead";

function Home_page() {
  return (
    <div>
      {/* video section */}
      <div className=" -z-10 relative h-[100vw] sm:h-[80vw] lg:h-full">
        <video
          className=" h-full w-full object-cover object-center"
          src="https://www.lemontreehotels.com/assets/front/video/lemon-tree-desktop-video-1.mp4"
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
                className=" bg-white border border-gray-300 py-1.5 placeholder:text-sm md:placeholder:text-base sm:py-2 px-4 rounded-md w-60 md:w-96"
              />
              <i className=" absolute top-3 right-3 text-sky-600 fa-solid fa-magnifying-glass"></i>
            </div>
          </div>{" "}
        </div>
      </div>
      {/* choose destination */}
      <Container>
        <ContainerHead
          className={" sm:gap-16"}
          head={"Choose Your Destination"}
        >
          <div className=" flex justify-center ">
            <div className=" grid grid-cols-2 w-full md:grid-cols-4 gap-4">
              {/* destination card */}
              <DestinationCard
                image={
                  "https://www.lemontreehotels.com/assets/front/images/travelForMumbai.jpg"
                }
                place={"Mumbai"}
                hotels={5}
              />
              <DestinationCard
                image={
                  "https://www.lemontreehotels.com/assets/front/images/travelForMumbai.jpg"
                }
                place={"Mumbai"}
                hotels={5}
              />
              <DestinationCard
                image={
                  "https://www.lemontreehotels.com/assets/front/images/travelForMumbai.jpg"
                }
                place={"Mumbai"}
                hotels={5}
              />
              <DestinationCard
                image={
                  "https://www.lemontreehotels.com/assets/front/images/travelForMumbai.jpg"
                }
                place={"Mumbai"}
                hotels={5}
              />
              <DestinationCard
                image={
                  "https://www.lemontreehotels.com/assets/front/images/travelForMumbai.jpg"
                }
                place={"Mumbai"}
                hotels={5}
              />
              <DestinationCard
                image={
                  "https://www.lemontreehotels.com/assets/front/images/travelForMumbai.jpg"
                }
                place={"Mumbai"}
                hotels={5}
              />
              <DestinationCard
                image={
                  "https://www.lemontreehotels.com/assets/front/images/travelForMumbai.jpg"
                }
                place={"Mumbai"}
                hotels={5}
              />
              <DestinationCard
                image={
                  "https://www.lemontreehotels.com/assets/front/images/travelForMumbai.jpg"
                }
                place={"Mumbai"}
                hotels={5}
              />
            </div>
          </div>
          <button className=" w-full flex justify-center items-center">
            <div className=" px-7 py-2.5 rounded-lg text-white bg-black ">
              Explore more destination
            </div>
          </button>
        </ContainerHead>
      </Container>
      {/* upcoming hotels */}
      <Container>
        <div className=" flex justify-between gap-10 md:flex-row flex-col">
          <div className=" pt-5 w-full flex flex-col gap-3">
            <div className=" font-semibold sm:text-3xl text-2xl">
              Upcoming Hotels
            </div>
            <div className=" text-gray-600">
              The renowned hospitality chain is all set to unveil a collection
              of new hotels, promising unforgettable experiences for
              travelers...
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
              spaceBetween={20}
              pagination={{
                type: "fraction",
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <SwiperSlide_comp
                  image={
                    "https://www.lemontreehotels.com/assets/front/images/02_Jul_2023_04_20_28Mossoorie.jpg"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperSlide_comp
                  image={
                    "https://www.lemontreehotels.com/assets/front/images/02_Jul_2023_04_20_28Mossoorie.jpg"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperSlide_comp
                  image={
                    "https://www.lemontreehotels.com/assets/front/images/02_Jul_2023_04_20_28Mossoorie.jpg"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperSlide_comp
                  image={
                    "https://www.lemontreehotels.com/assets/front/images/02_Jul_2023_04_20_28Mossoorie.jpg"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperSlide_comp
                  image={
                    "https://www.lemontreehotels.com/assets/front/images/02_Jul_2023_04_20_28Mossoorie.jpg"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperSlide_comp
                  image={
                    "https://www.lemontreehotels.com/assets/front/images/02_Jul_2023_04_20_28Mossoorie.jpg"
                  }
                />
              </SwiperSlide>
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
                    "https://www.lemontreehotels.com/assets/front/images/02_Jul_2023_04_20_28Mossoorie.jpg"
                  }
                  name={"Hotel taj , Mumbai"}
                  to={"/"}
                />
                <CarouselSlide
                  image={
                    "https://www.lemontreehotels.com/assets/front/images/02_Jul_2023_04_20_28Mossoorie.jpg"
                  }
                  name={"Hotel taj , Mumbai"}
                  to={"/"}
                />
                <CarouselSlide
                  image={
                    "https://www.lemontreehotels.com/assets/front/images/02_Jul_2023_04_20_28Mossoorie.jpg"
                  }
                  name={"Hotel taj , Mumbai"}
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
      <Container>
        <ContainerHead head={"Offers & Promotions"}>
          <div className=" flex justify-center">
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
        </ContainerHead>
      </Container>

      {/* What's new  */}
      <Container>
        <ContainerHead head={"What's New"}>
          <div className=" shadow-md p-5 rounded-3xl flex w-full flex-col-reverse sm:flex-row sm:gap-8 gap-5">
            <div className=" w-full sm:w-[50rem] flex flex-col gap-4">
              <div className=" text-xl font-semibold">
                CELEBRATING 77 YEARS OF FREEDOM
              </div>
              <div className=" text-[15px] text-gray-600">
                We are stoked to stay true to “Atithi Devo Bhava” and take this
                belief a step further by ensuring that your plates are
                colourful, adventures are liberating and celebrations are
                wholesome. We are pleased to announce new signings in Arpora,
                Pathankot and Kota, and a new opening in Jamshedpur. Here's to
                the freedom of building India, stronger together.
              </div>
              <Link>
                <button className=" bg-black py-3 px-4 rounded-lg text-white">
                  Click here for more detail
                </button>
              </Link>
            </div>
            <div className=" sm:w-[40rem] w-full rounded-2xl overflow-hidden">
              <img
                className=" w-full h-full object-center object-cover"
                src="https://www.lemontreehotels.com/assets/front/newimg/lemonade-aug.jpg"
                alt=""
              />
            </div>
          </div>
        </ContainerHead>
      </Container>

      {/* Reward Program */}
      <Container className={"lg:w-full"} mainClassNamee={"px-0 sm:p-0 md:!p-0"}>
        <ContainerHead head={"Our Rewards Program"}>
          <div className=" relative w-full h-96">
            <img
              className=" w-full h-full object-bottom object-cover"
              src="https://www.lemontreehotels.com/assets/front/images/rewards_banner_1.jpg"
              alt=""
            />
            <div className=" absolute w-full h-full bg-[#00000063] flex items-center justify-center top-0 right-0">
              <div className="w-full sm:w-1/2 justify-start  flex flex-col gap-5 min-h-20 text-white p-3  ">
                <div className=" sm:text-lg md:text-xl text-base">
                  Members exclusive rewards and privileges with endless
                  possibilities, from free stays and upgrades to special offers
                  and previews, and much more...
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

      <Container>
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
