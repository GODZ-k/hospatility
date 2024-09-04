import BreadCrumb from "@/components/BreadCrumb";
import Container from "@/components/Container";
import ContainerHead from "@/components/ContainerHead";
import FAQ from "@/components/FAQ";
import HotelCard from "@/components/HotelCard";
import React from "react";


function Hotels_page() {
  return (
    <div>
      <div className=" relative w-full h-[30rem]">
        <img
          src="https://www.lemontreehotels.com/uploads/city/20230624160702863gurugram.jpg"
          className=" object-center object-cover w-full h-full"
          alt=""
        />
        <div className=" absolute top-0 right-0 w-full h-full bg-[#0000003d]">
          <div className=" flex justify-center items-center w-full h-full ">
            <div className=" text-white text-4xl tracking-widest font-sans font-semibold">
              Welcome to Gurgaon
            </div>
          </div>
        </div>
      </div>
      {/* destination  */}
      <Container>
        <BreadCrumb location={"gurgaon"} location_url={"/gurgaon_hotels"} />
      </Container>

      {/* hotels in location */}

      <Container id="hotels">
        <ContainerHead className={" sm:gap-16 "} head={"Hotels in Gurgaon"}>
          <div className=" flex justify-center w-full">
            <div className=" w-full  flex flex-wrap justify-evenly gap-4 ">
              <HotelCard
                image={"https://github.com/shadcn.png"}
                reviews={929}
                hotel={"Red Fox by Lemon Tree Hotels, East Delhi"}
                rating={4}
                explore={"/"}
                plane={23}
                metro={21}
                book={"/"}
                address={
                  "  Plot No. 6, Community Center, Mayur Vihar Phase III, Delhi - 110096, India"
                }
              />
              <HotelCard
                image={"https://github.com/shadcn.png"}
                reviews={929}
                hotel={"Red Fox by Lemon Tree Hotels, East Delhi"}
                rating={4}
                explore={"/"}
                plane={23}
                metro={21}
                book={"/"}
                address={
                  "  Plot No. 6, Community Center, Mayur Vihar Phase III, Delhi - 110096, India"
                }
              />
              <HotelCard
                image={"https://github.com/shadcn.png"}
                reviews={929}
                hotel={"Red Fox by Lemon Tree Hotels, East Delhi"}
                rating={4}
                explore={"/"}
                plane={23}
                metro={21}
                book={"/"}
                address={
                  "  Plot No. 6, Community Center, Mayur Vihar Phase III, Delhi - 110096, India"
                }
              />
              <HotelCard
                image={"https://github.com/shadcn.png"}
                reviews={929}
                hotel={"Red Fox by Lemon Tree Hotels, East Delhi"}
                rating={4}
                explore={"/"}
                plane={23}
                metro={21}
                book={"/"}
                address={
                  "  Plot No. 6, Community Center, Mayur Vihar Phase III, Delhi - 110096, India"
                }
              />
              <HotelCard
                image={"https://github.com/shadcn.png"}
                reviews={929}
                hotel={"Red Fox by Lemon Tree Hotels, East Delhi"}
                rating={4}
                explore={"/"}
                plane={23}
                metro={21}
                book={"/"}
                address={
                  "  Plot No. 6, Community Center, Mayur Vihar Phase III, Delhi - 110096, India"
                }
              />
              <HotelCard
                image={"https://github.com/shadcn.png"}
                reviews={929}
                hotel={"Red Fox by Lemon Tree Hotels, East Delhi"}
                rating={4}
                explore={"/"}
                plane={23}
                metro={21}
                book={"/"}
                address={
                  "  Plot No. 6, Community Center, Mayur Vihar Phase III, Delhi - 110096, India"
                }
              />
              <HotelCard
                image={"https://github.com/shadcn.png"}
                reviews={929}
                hotel={"Red Fox by Lemon Tree Hotels, East Delhi"}
                rating={4}
                explore={"/"}
                plane={23}
                metro={21}
                book={"/"}
                address={
                  "  Plot No. 6, Community Center, Mayur Vihar Phase III, Delhi - 110096, India"
                }
              />
              <HotelCard
                image={"https://github.com/shadcn.png"}
                reviews={929}
                hotel={"Red Fox by Lemon Tree Hotels, East Delhi"}
                rating={4}
                explore={"/"}
                plane={23}
                metro={21}
                book={"/"}
                address={
                  "  Plot No. 6, Community Center, Mayur Vihar Phase III, Delhi - 110096, India"
                }
              />
            </div>
          </div>
        </ContainerHead>
      </Container>

      {/* map */}
      <Container>
        <ContainerHead className={" sm:gap-16 "} head={"Map"}>
          <div className=" w-full h-[30rem] md:h-[40rem]">
            <iframe
              className=" w-full h-full"
              src="https://www.google.com/maps/d/u/3/embed?mid=1NO48jt_80lqRube0pYSR7B_EzCHUn9MO&ehbc=2E312F"
              frameborder="0"
            ></iframe>
          </div>
        </ContainerHead>
      </Container>

      {/* detail */}
      <Container>
        <div className=" w-full text-center text-gray-600 leading-normal">
          Delhi, the pulsating capital of India, harmoniously merges the echoes
          of its rich history with the beat of modernity. Embracing a myriad of
          cultures, the city exudes a captivating vibrancy, showcased through
          bustling markets and an array of mouthwatering street food. Explorers
          can venture into the enchanting past, gazing upon the majestic Red
          Fort, Jama Masjid, and Humayun's Tomb
        </div>
      </Container>

      {/* FAQ */}
      <Container>
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
    </div>
  );
}

export default Hotels_page;
