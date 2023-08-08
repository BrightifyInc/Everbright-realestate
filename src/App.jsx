import React from "react";
import Header from "./components/Header/Header";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import {Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"
import Residences from "./pages/Residencies";
import Value from "./pages/Value";

function App() {



  return (

    <>

      <Header />

      <AnimatePresence >

        <Routes>
            <Route path="/" element={
                <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ scale: 0, transition: {duration: 1} }}>
                    <Home />
                </motion.div>
            } >
            </Route>

            <Route path="/about" element={
                <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ scale: 0, transition: {duration: 1} }}>
                    <About />
                </motion.div>
            }>
            </Route>                        
            
            <Route path="/contact" element={
                <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ scale: 0, transition: {duration: 1} }}>
                    <Contact />
                </motion.div>
            }>
            </Route> 

            <Route path="/residencies" element={
                <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ scale: 0, transition: {duration: 1} }}>
                    <Residences />
                </motion.div>
            }>
            </Route>                        

            <Route path="/value" element={
                <motion.div initial={{ x: 300 }} animate={{ x: 0 }} exit={{ scale: 0, transition: {duration: 1} }}>
                    <Value />
                </motion.div>
            }>
            </Route>                        

        </Routes>

      </AnimatePresence>

    </>

      
    
  );
}

export default App;
