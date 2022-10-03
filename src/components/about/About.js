import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";


export default function About(props) {

   function aboutMeText() {
      return <>
         <p><span className={Style.green}>mario $</span> cat aboutmario </p>
         <p><span className={Style.green}>aboutmario <span
             className={Style.green}>(main)</span> $</span></p>
         <p>
            Hello! I'm Mario a fullstack web developer from Povazska Bystrica.
            I love creating web applications with React and PHP.
            I've been working for United Classifieds since April 2021.
         </p>

      </>;
   }

   function skillsText() {
      return <>
         <p><span className={Style.green}>mario $</span> cd skills/tools</p>
         <p><span className={Style.green}>skills/tools <span
            className={Style.green}>(main)</span> $</span> ls</p>
         <p> Proficient With</p>
         <ul className={Style.skills}>
            <li>PHP</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React</li>
            <li>Symphony</li>
            <li>Bootstrap</li>
            <li>Material UI</li>
            <li>Sass</li>
            <li>Scss Modules</li>
            <li>Git</li>
            <li>Github</li>
            <li>npm</li>
            <li>composer</li>
            <li>API Requests</li>
            <li>JSON</li>
         </ul>
      </>;
   }

   function miscText() {
      return <>
         <p><span className={Style.green}>mario $</span> cd hobbies</p>
         <p><span className={Style.green}>hobbies<span
            className={Style.green}> (main)</span> $</span> ls</p>
         <ul>
            <li><Box component={'span'} mr={'1rem'}>💻</Box>programming</li>
            <li><Box component={'span'} mr={'1rem'}>📖</Box>reading</li>
            <li><Box component={'span'} mr={'1rem'}>🎥</Box>movies</li>
         </ul>
      </>;
   }

   return (
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
         <Terminal text={aboutMeText()} isDarkMode={props.isDarkMode}/>
         <Terminal text={skillsText()} isDarkMode={props.isDarkMode}/>
         <Terminal text={miscText()} isDarkMode={props.isDarkMode}/>
      </Box>
   )
}