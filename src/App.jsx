import React from "react";
import Navbar from "./components/Navbar";
import Home from "./routingComponents/Home";
import About from "./routingComponents/About";
import Contact from "./routingComponents/Contact";
import Constructions from "./routingComponents/Constructions";
import Mass_Timings from "./routingComponents/Mass_Timings";
import { Route,  Routes } from "react-router-dom";
import Footer from "./components/Footer";
import {ScrollShadow} from "@heroui/scroll-shadow";
import MaterialsRoutes from "./routingComponents/MaterialsRoute";
import OurFather from "./routingComponents/OurFather";
import { Events } from "./routingComponents/Events";
const App = () => {
  return (
    <main>
      <ScrollShadow className="w-full h-full">
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/Constructions' element={<Constructions />} />
        <Route path='/Mass_Timings' element={<Mass_Timings />} />
        <Route path='/material' element={<MaterialsRoutes />} /> 
        <Route path='/fathers' element={<OurFather />} /> 
        <Route path='/events' element={<Events />} /> 
      </Routes>
      <Footer/>
      </ScrollShadow>
    </main>
  );
};

export default App;
