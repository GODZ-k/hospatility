import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home_page from "./pages/Home_page";
import Goa_hotels_page from "./pages/Goa_hotels_page";
import MuskanVilla_page from "./pages/MuskanVilla_page";
import Mussoorie_hotels_page from "./pages/Mussoorie_hotels_page";
import Levendervilla_page from "./pages/Levender_villa";
import BagaVilla_page from "./pages/BagaVilla";
import BarishHotel_Resort_page from "./pages/BarishHotel_resort";
import HotelDrive_Inn_page from "./pages/HotelDrive_Inn_page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home_page />} />

       {/* Goa-Hotel */}
      
        <Route path="/goa_hotels" element={<Goa_hotels_page />} />
        <Route path="/mussoorie_hotels" element={<Mussoorie_hotels_page />} />
        <Route path="/goa_hotels/muskan-villa" element={<MuskanVilla_page/>}/>
        <Route path="/goa_hotels/Levender-villa" element={<Levendervilla_page/>}/> 
        <Route path="/goa_hotels/Baga-Villa" element={<BagaVilla_page/>}/> 

        {/* Mussoorie-Hotels */}
        <Route path="/mussoorie_hotels/BarishHotel-resort" element={<BarishHotel_Resort_page />} />
        <Route path="/mussoorie_hotels/HotelDrive-Inn" element={<HotelDrive_Inn_page />} />


      </Route>
    </Routes>
  );
}

export default App;
