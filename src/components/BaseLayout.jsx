import React, {useState} from 'react';
import './BaseLayout.scss';
import Navbar from "./navbar/Navbar";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Portfolio from "../pages/portfolio/Portfolio";
import {Navigate, Route, Routes} from "react-router-dom";
import {Box, Grid} from "@mui/material";
import Contact from "../pages/contact/Contact";
import Cv from "../pages/cv/Cv";
import Experience from "../pages/experience/Experience";

export default function BaseLayout(props) {
   let [darkMode, setDarkMode] = useState(props.appMode);
   const actualYear = new Date().getFullYear();

   function handleClick() {
      setDarkMode(!darkMode);
      localStorage.setItem('darkMode', JSON.stringify(!darkMode));
   }

   return (
      <Box className={darkMode ? 'dark' : 'light'}>
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
                  <Route exact path={'/experience'} element={<Experience isDarkMode={darkMode}/>}/>
                  <Route exact path={'/cv'} element={<Cv isDarkMode={darkMode}/>}/>
                  <Route exact path={'/contact'} element={<Contact isDarkMode={darkMode}/>}/>
                  <Route path={'*'} element={<Navigate to={'/'}/>}/>
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

