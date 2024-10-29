import React from "react";
import {Routes, Route} from "react-router-dom";

import Navigator from "./pages/Navigator"; // Nav Bar

import Home from "./pages/Home"; // Home

import AIprompt from "./pages/AIprompt"; // AIprompt
import AIplanner from "./pages/AIplanner"; // AIplanner
import TripInfo from "./pages/TripInfo"; // 관광지


function App() {
  return (
    <div className="App">
      <Navigator />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tripInfo" element={<TripInfo />}/>
        <Route path="/aiPrompt" element={<AIprompt />}/>
        <Route path="/aiPlanner" element={<AIplanner />}/>
      </Routes>
    </div>
  );
}

export default App;
