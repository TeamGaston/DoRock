import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import List from "./pages/List";
import TripInfoPage from "./pages/TripInfoPage";
import Navigator from "./pages/Navigator";

function App() {
  return (
    <div className="App">
      <Navigator />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/input" element={<Input/>}/>
        <Route path="/input2" element={<Input2/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/TripInfoPage" element={<TripInfoPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
