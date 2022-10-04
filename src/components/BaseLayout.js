import React, {useEffect, useState} from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import {Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import Contact from "./contact/Contact";
import Cv from "./cv/Cv";

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);
   const actualYear = new Date().getFullYear();

   useEffect(() => {
      const mode = localStorage.getItem('darkMode');
      if (mode) {
         setDarkMode(JSON.parse(mode));
      } else {
         setDarkMode(true);
      }
   }, []);

   function handleClick() {
      setDarkMode(!darkMode);
      localStorage.setItem('darkMode', JSON.stringify(!darkMode));
   }

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'block'} p={'20px'} flexDirection={'column'} minHeight={'100vh'}
               justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleClick}/>
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home/>}/>
                  <Route exact path={'/about'} element={<About isDarkMode={darkMode}/>}/>
                  <Route exact path={'/portfolio'} element={<Portfolio isDarkMode={darkMode}/>}/>
                  <Route exact path={'/cv'} element={<Cv isDarkMode={darkMode}/>}/>
                  <Route exact path={'/contact'} element={<Contact isDarkMode={darkMode}/>}/>
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'} textAlign={'center'}
                    py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
                  <p>When I wrote this code, only God and I understood what I did. Now only God knows.</p>
                  <p>&copy; 2020 - {actualYear}</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

