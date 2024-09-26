import BreadCrumb from "@/components/BreadCrumb";
import Container from "@/components/Container";
import ContainerHead from "@/components/ContainerHead";
import FAQ from "@/components/FAQ";
import HotelCard from "@/components/HotelCard";
import React from "react";


function Mussoorie_hotels_page() {
  return (
    <div>
      <div className=" relative w-full h-[30rem]">
        <img
          src="https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727259964/Mussoorie-Tourism_nbscyi.jpg"
          className=" object-center object-cover w-full h-full"
          alt=""
        />
        <div className=" absolute top-0 right-0 w-full h-full bg-[#0000003d]">
          <div className=" flex justify-center items-center w-full h-full ">
            <div className=" text-white text-4xl tracking-widest font-sans font-semibold">
              Welcome to Mussoorie
            </div>
          </div>
        </div>
      </div>
      {/* destination  */}
      <Container>
        <BreadCrumb location={"Mussoorie"} location_url={"/gurgaon_hotels"} />
      </Container>

      {/* hotels in location */}

      <Container id="hotels">
        <ContainerHead className={" sm:gap-16 "} head={"Hotels in Mussoorie"}>
          <div className=" flex justify-center w-full">
            <div className=" w-full  flex flex-wrap justify-evenly gap-4 ">
              <HotelCard
                image={"https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727259614/barish_evqxon.webp"}
                reviews={6}
                hotel={"Barish Hotel & Resort"}
                rating={4}
                explore={"/"}
                plane={49}
                metro={30}
                book={"/"}
                address={
                  "Oakdene estate Barlowganj Mussoorie 248122"
                }
              />
              <HotelCard
                image={"https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727260585/open-terrace_rbljgh.jpg"}
                reviews={55}
                hotel={"Hotel drive Inn Mussoorie"}
                rating={4}
                explore={"/"} 
                plane={52}
                metro={34}
                book={"/"}
                address={
                  "Near Picture Palace Mall Road Mussoorie Uttarakhand - 248179"
                }
              />
              {/* <HotelCard
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
              /> */}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.325125551555!2d78.07917007430576!3d30.45522789899351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d1bf90bc601d%3A0x575b85040be017c1!2sHotel%20Drive%20Inn!5e0!3m2!1sen!2sin!4v1727260726963!5m2!1sen!2sin"
              frameborder="0"
            ></iframe>
           
          </div>
        </ContainerHead>
      </Container>

      {/* detail */}
      <Container>
        <div className=" w-full text-center text-gray-600 leading-normal">
        Mussoorie, also known as Queen of the Hills, is among the most popular hill 
        stations of the country. A Britisher, Captain Frederick Young, accompanied by an 
        official named FJ Shore, had climbed up the hill from the Doon valley in 1827 and found this ridge 
        offering great views and a salubrious climate. This visit laid the foundation for this grand hill station. 

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
        <FAQ answer={"Standard check-in time is at 2 PM and check-out at 12 PM. Kindly note that check-in time may be shifted to 3:00 PM during high occupancy periods. ."} question={" What are the check-in and check-out times?"}/>
        <FAQ answer={"Each of our rooms has a workspace along with free access to Wi-Fi. You can print documents at the reception or enjoy our free fax and scanning services. Each of our rooms also includes a power block on the desk, which has two outlets and two USB ports."} question={" Do your rooms include a workspace?"}/>
        <FAQ answer={"The credit card information is used as a guarantee in case you do not show up or decide to cancel at the last minute. A no-show could result in additional fees equivalent to a night’s stay."} question={ "Why do you need my credit card information?"}/>
        <FAQ answer={"Our cancellation policy claims that you can cancel your reservation before 11AM, without penalty, the day of your arrival. If you fail to comply, you will be billed for the night’s stay. Certain conditions apply for groups and packages. In addition, reservations made with the NR10% reduction code are non-cancellable and non-refundable."} question={ "What are your cancellation policies?"}/>
        
         </div>
          </div>
        </ContainerHead>
      </Container>
    </div>
  );
}

export default Mussoorie_hotels_page;
