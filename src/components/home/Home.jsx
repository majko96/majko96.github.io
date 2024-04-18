import React from 'react';
import './scss/Home.scss';
import SocialIcon from "./SocialIcon";
import {Box} from "@mui/material";

const socials = [
   {
      link: "https://github.com/majko96",
      icon: "fa fa-github",
      label: 'Github'
   },
   {
      link: "https://sk.linkedin.com/in/mario-babinec-618221212",
      icon: "fa fa-linkedin",
      label: 'LinkedIn'
   },
   {
      link: 'https://www.facebook.com/mario.babinec.9/',
      icon: "fa fa-facebook",
      label: 'Facebook'
   }
]

export default function Home() {

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 185px)'}>
         <Box>
            <h1>Hi, I'm <span className={'firstName'}>Mario</span>
               <span className={'hand'}>🤚</span>
            </h1>
            <h2>I'm a fullstack web developer.</h2>
            <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}} mt={'1rem'}>
               {socials.map((social, index) => (
                  <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
               ))}
            </Box>
         </Box>
      </Box>
   )
}