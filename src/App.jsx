import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home_page from "./pages/Home_page";
import Hotels_page from "./pages/hotels_page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home_page />} />
        <Route path="/gurgaon_hotels" element={<Hotels_page />} />
      </Route>
    </Routes>
  );
}

export default App;
