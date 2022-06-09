import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GameContextProvider } from "./context/GameContext";
import App from "./App";
import GameOver from "./components/GameOver";
import Welcome from "./components/Welcome";

const RouteSwitch = () => {
  return (
    <GameContextProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/game" element={<App />} />
                <Route path="/game-over" element={<GameOver />} />
        </Routes>
      </BrowserRouter>
    </GameContextProvider>
  );
  };
  
  export default RouteSwitch;