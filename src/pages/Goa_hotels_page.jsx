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
          src="https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727257497/goa_2_11zon_xnsm5v.webp"
          className=" object-center object-cover w-full h-full"
          alt=""
        />
        <div className=" absolute top-0 right-0 w-full h-full bg-[#0000003d]">
          <div className=" flex justify-center items-center w-full h-full ">
            <div className=" text-white text-4xl tracking-widest font-sans font-semibold">
              Welcome to Goa
            </div>
          </div>
        </div>
      </div>
      {/* destination  */}
      <Container>
        <BreadCrumb location={"Goa"} location_url={"/gurgaon_hotels"} />
      </Container>

      {/* hotels in location */}

      <Container id="hotels">
        <ContainerHead className={" sm:gap-16 "} head={"Hotels in Goa"}>
          <div className=" flex justify-center w-full">
            <div className=" w-full  flex flex-wrap justify-evenly gap-4 ">
              <HotelCard
                image={"https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727257224/muskan-sol-villa-no-2-nerul-goa-tvyh7wak86_wa8kuk.avif"}
                reviews={61}
                hotel={"The Baris Nerul   Villa Goa"}
                rating={4}
                explore={"muskan-villa"}
                plane={33}
                metro={21}
                book={"/"}
                address={
                  " Muskan sol Villa No.2 Nerul reis margos Rd. Goa  Nerul , Goa   403114"
                }
              />
              <HotelCard
                image={"https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727258316/weddingvenues-lavender-villa-eventspace-10_15_434826-167531960558898_qzv9zw.jpg"}
                reviews={149}
                hotel={"Lavender Villa Goa"}
                rating={4}
                explore={"goa_hotels/muskan-villa"}
                plane={31}
                metro={21}
                book={"/"}
                address={
                  " H.no. 1/9A/3 Gauravaddo Calangute ,Goa 403516"
                }
              />
              <HotelCard
                image={"https://res.cloudinary.com/dmrqjhzx5/image/upload/v1727262281/baga_incjaf.webp"}
                reviews={108}
                hotel={"Baga Villa (The Heriage Beach Villa)"}
                rating={4}
                explore={"/muskan-villa"}
                plane={30}
                metro={41}
                book={"/"}
                address={
                  " House no. 1314 Calanguate bega Road UMTA vaddo Calangute Bardez Goa near sea shore Resort Calangute Goa 403516"
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
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15378.422396424368!2d73.7884818!3d15.5056326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfc1a96444fe23%3A0xdaf513abce2761e7!2sMuskan%20Sol%20Villa%20No.%202!5e0!3m2!1sen!2sin!4v1727255476224!5m2!1sen!2sin"
              frameborder="0"
            ></iframe>
           
          </div>
        </ContainerHead>
      </Container>

      {/* detail */}
      <Container>
        <div className=" w-full text-center text-gray-600 leading-normal">
        Whoever has been in Goa may say that he has seen the choicest rarities of India, for it is the 
        most famous and celebrated city, on account of its commercial intercourse with people of all nationalities
         of the East who bring there the products of their respective countries, articles of merchandize, necessaries 
         of life and other commodities in great abundance because every year more than a thousand ships touch there laden
          with cargo’ ‘as for the multitude of people, it is a marvel to see the number which come and go every day by sea
           and land on business of every kind.One would say that a fair was being held every day for the sale of all sorts of merchandise.’
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

export default Hotels_page;