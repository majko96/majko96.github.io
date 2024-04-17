import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box} from "@mui/material";


export default function About(props) {

   function aboutMeText() {
      return <>
         <p><span className={Style.green}>mario@mbpc:~$</span> cat about-mario </p>
         <p>
            Hello! I'm Mario a fullstack web developer from Povazska Bystrica.
            I love creating web applications with React and PHP.
         </p>

      </>;
   }

   function skillsText() {
      return <>
         <p><span className={Style.green}>mario@mbpc:~$</span> cd skills/tools && ls</p>
         <ul className={Style.skills}>
            <li>PHP</li>
            <li>TypeScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React</li>
            <li>Symfony</li>
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
         <p><span className={Style.green}>mario@mbpc:~$</span> cd hobbies && ls</p>
         <ul className={Style.contact}>
            <li>💻 programming</li>
            <li>📖 reading</li>
            <li>🎥 movies</li>
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
