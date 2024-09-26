import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home_page from "./pages/Home_page";
<<<<<<< HEAD
import Hotels_page from "./pages/Hotels_page";
import Mussoorie_hotels_page from "./pages/Mussoorie_hotel_page";
=======
import Goa_hotels_page from "./pages/Goa_hotels_page";
import MuskanVilla_page from "./pages/MuskanVilla_page";
import Mussoorie_hotels_page from "./pages/Mussoorie_hotels_page";

>>>>>>> 6a9104b7de800384b6ace4d293457c417b853952

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home_page />} />
<<<<<<< HEAD
        <Route path="/goa_hotels" element={<Hotels_page />} />
        <Route path="/mussoorie_hotels" element={<Mussoorie_hotels_page />} />
=======
        <Route path="/goa_hotels" element={<Goa_hotels_page />} />
        <Route path="/mussoorie_hotels" element={<Mussoorie_hotels_page />} />
        <Route path="/goa_hotels/muskan-villa" element={<MuskanVilla_page/>}/>
>>>>>>> 6a9104b7de800384b6ace4d293457c417b853952
      </Route>
    </Routes>
  );
}

export default App;
