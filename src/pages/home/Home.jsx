import React from 'react';
import './scss/Home.scss';
import SocialIcon from "../../components/socialIcon/SocialIcon";
import {Box} from "@mui/material";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faLinkedin, faGithub, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faFacebook, faLinkedin, faGithub, faTiktok);
import { useTranslation } from 'react-i18next';

const socials = [
   {
      link: "https://github.com/majko96",
      icon: <FontAwesomeIcon icon={["fab", "github"]} />,
      label: 'Github',
      disabled: false,
   },
   {
      link: 'https://www.facebook.com/mario.babinec.9/',
      icon: <FontAwesomeIcon icon={["fab", "facebook"]} />,
      label: 'Facebook',
      disabled: false,
   },
    {
        link: "https://sk.linkedin.com/in/mario-babinec-618221212",
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} />,
        label: 'LinkedIn',
        disabled: true,
    },
]

export default function Home() {
   const { t, i18n } = useTranslation();

   return (
      <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
           justifyContent={'center'} minHeight={'calc(100vh - 185px)'}>
         <Box zIndex={2} >
            <h1>{t('home.first')} <span className={'firstName'}>{t('home.mario')}</span>
               <span className={'hand'}>🤚</span>
            </h1>
            <h2>{t('home.last')}</h2>
            <Box display={'flex'} gap={'3rem'} justifyContent={'center'} fontSize={{xs: '2rem', md: '2.5rem'}} mt={'2rem'}>
               {socials.map((social, index) => (
                  <SocialIcon
                      key={index}
                      link={social.link}
                      icon={social.icon}
                      label={social.label}
                      disabled={social.disabled}
                  />
               ))}
            </Box>
         </Box>
      </Box>
   )
}