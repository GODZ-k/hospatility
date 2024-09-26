import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home_page from "./pages/Home_page";
import Hotels_page from "./pages/Hotels_page";
import Mussoorie_hotels_page from "./pages/Mussoorie_hotel_page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home_page />} />
        <Route path="/goa_hotels" element={<Hotels_page />} />
        <Route path="/mussoorie_hotels" element={<Mussoorie_hotels_page />} />
      </Route>
    </Routes>
  );
}

export default App;
