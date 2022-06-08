import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
// import Rules from "./components/Rules";
import Welcome from "./components/Welcome";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/game" element={<Game />} />
                {/* <Route path="/rules" element={<Rules />} /> */}
        </Routes>
      </BrowserRouter>
    );
  };
  
  export default RouteSwitch;