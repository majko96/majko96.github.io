import React, { useState } from 'react';
import { Box, Button, Drawer, ListItem, MenuItem, Menu, IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from './MenuIcon';
import Toggler from "./Toggler";
import { styled } from "@mui/system";
import { useTranslation } from 'react-i18next';
import './scss/Navbar.scss';

const StyledDrawer = styled(({ darkMode, ...otherProps }) => <Drawer {...otherProps} />)(({ theme, darkMode }) => ({
   '& .MuiDrawer-paper': {
      borderRadius: '30px 30px 0 0',
      background: darkMode ? '#1f1f1f' : 'white',
      color: darkMode ? 'white' : 'black',
      borderTop: darkMode ? '5px solid #424242' : '5px solid #cecece',
   }
}));

export default function Navbar({ darkMode, handleClick }) {
   const location = useLocation();
   const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
   const [state, setState] = useState(false);
   const [anchorEl, setAnchorEl] = useState(null);
   const { t, i18n } = useTranslation();

   const links = [
      {
         name: t('Home'),
         to: '/',
         active: 'home'
      },
      {
         name: t('About me'),
         to: '/about',
         active: 'about'
      },
      {
         name: t('Portfolio'),
         to: '/portfolio',
         active: 'portfolio'
      },
      {
         name: t('Experience'),
         to: '/experience',
         active: 'experience'
      },
      {
         name: 'CV',
         to: '/cv',
         active: 'cv'
      },
      {
         name: t('Contact'),
         to: '/contact',
         active: 'contact'
      }
   ]

   const toggleDrawer = () => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
         return;
      }

      setState(!state);
   };

   const handleLanguageMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleLanguageMenuClose = () => {
      setAnchorEl(null);
   };

   const handleLanguageChange = (lng) => {
      localStorage.setItem('language', lng);
      i18n.changeLanguage(lng);
      handleLanguageMenuClose();
   };

   const list = () => (
      <div
         role="presentation"
         onClick={toggleDrawer(false)}
         onKeyDown={toggleDrawer(false)}
      >
         <Box textAlign={'center'} p={'1rem'} textTransform={'lowercase'}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
               {links.map((link, index) => (
                  <li key={index} className={(link.active === active) ? 'active' : ''} style={{ display: 'flex', justifyContent: 'center' }}>
                     <Link to={link.to} onClick={() => setActive(link.active)}>
                        {link.name && <p style={{ paddingBottom: '1rem', fontSize: '1.5rem', color: darkMode ? 'white' : '#1f1f1f' }}>{link.name}</p>}
                     </Link>
                  </li>
               ))}
               <li style={{ display: 'flex', justifyContent: 'center' }}>
                  {i18n.language !== 'en' && (
                     <p style={{ paddingBottom: '1rem', fontSize: '1.5rem', color: darkMode ? 'white' : '#1f1f1f' }}>
                        <span onClick={() => handleLanguageChange('en')} style={{ cursor: 'pointer' }}>{t('language.en')}</span>
                     </p>
                  )}
               </li>
               <li style={{ display: 'flex', justifyContent: 'center' }}>
                  {i18n.language !== 'sk' && (
                     <p style={{ paddingBottom: '1rem', fontSize: '1.5rem', color: darkMode ? 'white' : '#1f1f1f' }}>
                        <span onClick={() => handleLanguageChange('sk')} style={{ cursor: 'pointer' }}>{t('language.sk')}</span>
                     </p>
                  )}
               </li>
            </ul>
            <ListItem style={{ display: 'flex', justifyContent: 'center' }}>
               <Toggler darkMode={darkMode} handleClick={handleClick} />
            </ListItem>
         </Box>
      </div>
   );

   return (
      <Box component={'nav'} width={'100%'}>
         <Box className={darkMode ? 'menuIconColorDark' : 'menuIconColorLight'} display={{ xs: "block", lg: "none" }} textAlign={'right'}>
            <Button name={'menu'} onClick={toggleDrawer(true)}>
               <MenuIcon/>
            </Button>
            <StyledDrawer
               anchor={'bottom'}
               open={state}
               onClose={toggleDrawer(false)}
               darkMode={darkMode}
            >
               {list()}
            </StyledDrawer>
         </Box>
         <Box component={'ul'} display={{ xs: "none", lg: "flex" }} justifyContent={'center'} alignItems={'center'}
            gap={{ xs: '2rem', md: '6rem' }}
            textTransform={'lowercase'} fontSize={'1rem'}>
            {links.map((link, index) => (
                <li className={(link.active === active) ? 'active' : ''} key={index}>
                   <Link aria-label={'home page'} to={link.to} onClick={() => setActive(link.active)}>
                      {link.name && <p style={{paddingBottom: '0.5rem'}}>{link.name}</p>}
                   </Link>
                </li>
            ))}
            <Box>
            <li>
               <IconButton onClick={handleLanguageMenuOpen} style={{ color: darkMode ? '#FFF' : '#1f1f1f'}}>
                  {t(`language.${i18n.language}`)}
               </IconButton>
               <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleLanguageMenuClose}
               >
                  {i18n.language !== 'en' && (
                     <MenuItem onClick={() => handleLanguageChange('en')}>{t('language.en')}</MenuItem>
                  )}
                  {i18n.language !== 'sk' && (
                     <MenuItem onClick={() => handleLanguageChange('sk')}>{t('language.sk')}</MenuItem>
                  )}
               </Menu>
            </li>
         </Box>
            <li>
               <Toggler darkMode={darkMode} handleClick={handleClick} />
            </li>
         </Box>
      </Box>
   )
}
