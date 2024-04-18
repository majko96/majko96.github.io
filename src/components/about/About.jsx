import React from 'react';
import Terminal from "../Terminal/Terminal";
import {Box} from "@mui/material";


export default function About(props) {

   function aboutMeText() {
      return <>
         <p>
            Hello! I'm Mario a fullstack web developer from Povazska Bystrica.
            I love creating web applications with React and PHP.
         </p>
      </>;
   }

   function skillsText() {
      return <>
         <ul className={'skills'}>
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
         <ul className={'terminal-text'}>
            <li>💻 programming</li>
            <li>📖 reading</li>
            <li>🎥 movies</li>
         </ul>
      </>;
   }

   return (
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
         <Terminal text={aboutMeText()} isDarkMode={props.isDarkMode} pcText={'cat about-mario'}/>
         <Terminal text={skillsText()} isDarkMode={props.isDarkMode} pcText={'cd skills/tools && ls'}/>
         <Terminal text={miscText()} isDarkMode={props.isDarkMode} pcText={'cd hobbies && ls'}/>
      </Box>
   )
}
