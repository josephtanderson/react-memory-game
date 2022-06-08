import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameContextProvider } from "./context/GameContext";
import Game from "./components/Game";
// import Rules from "./components/Rules";
import Welcome from "./components/Welcome";

const RouteSwitch = () => {
  return (
    <GameContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/game" element={<Game />} />
                {/* <Route path="/rules" element={<Rules />} /> */}
        </Routes>
      </BrowserRouter>
    </GameContextProvider>
  );
  };
  
  export default RouteSwitch;