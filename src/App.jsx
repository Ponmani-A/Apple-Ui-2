import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CompareAirpods from "./pages/CompareAirpods/CompareAirpods";
import AirpodsMax from "./pages/AirpodsMax/AirpodsMax";
import Displays from "./pages/Displays/Displays";
import ShopMac from "./pages/ShopMac/ShopMac";
import WatchNike from "./pages/WatchNike/WatchNike";
import Tv from "./pages/Tv/Tv";
import Fitness from "./pages/Fitness/Fitness";
import Ipad from "./pages/Ipad/Ipad";
import Iphone from "./pages/Iphone/Iphone";
import Support from "./pages/Support/Support";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compare-airpods" element={<CompareAirpods />} />
        <Route path="/airpods-max" element={<AirpodsMax />} />
        <Route path="/displays" element={<Displays />} />
        <Route path="/shop-mac" element={<ShopMac />} />
        <Route path="/watch-nike" element={<WatchNike />} />
        <Route path="/Tv-Home" element={<Tv />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  );
}
