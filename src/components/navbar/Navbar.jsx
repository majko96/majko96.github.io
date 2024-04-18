import React, { useState } from 'react';
import { Box, Button, Drawer, ListItem } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from './MenuIcon';
import Toggler from "./Toggler";
import { styled } from "@mui/system";
import './scss/Navbar.scss';


const StyledDrawer = styled(({ darkMode, ...otherProps }) => <Drawer {...otherProps} />)(({ theme, darkMode }) => ({
   '& .MuiDrawer-paper': {
      borderRadius: '30px 30px 0 0',
      background: darkMode ? '#1f1f1f' : 'white',
      color: darkMode ? 'white' : 'black',
      borderTop: darkMode ? '5px solid #424242' : '5px solid #cecece',
   }
}));

const links = [
   {
      name: 'Home',
      to: '/',
      active: 'home'
   },
   {
      name: 'About Me',
      to: '/about',
      active: 'about'
   },
   {
      name: 'Portfolio',
      to: '/portfolio',
      active: 'portfolio'
   },
   {
      name: 'Experience',
      to: '/experience',
      active: 'experience'
   },
   {
      name: 'CV',
      to: '/cv',
      active: 'cv'
   },
   {
      name: 'Contact',
      to: '/contact',
      active: 'contact'
   }
]

export default function Navbar({ darkMode, handleClick }) {
   const location = useLocation();
   const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

   const [state, setState] = useState(false);

   const toggleDrawer = () => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
         return;
      }

      setState(!state);
   };

   const list = () => (
      <div
         role="presentation"
         onClick={toggleDrawer(false)}
         onKeyDown={toggleDrawer(false)}
      >
         <Box textAlign={'center'} p={'1rem'} textTransform={'lowercase'}>
            {links.map((link, index) => (
               <ListItem
                  key={index}
                  className={(link.active === active && !link.image) ? 'active' : ''}
                  style={{ display: 'flex', justifyContent: 'center' }}
               >
                  <Link to={link.to} onClick={() => setActive(link.active)}>
                        {link.name && <p style={{ paddingBottom: '0.5rem', fontSize: '1.3rem', color: darkMode ? 'white' : '#1f1f1f' }}>{link.name}</p>}
                  </Link>
               </ListItem>
            ))}
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
            gap={{ xs: '2rem', md: '7rem' }}
            textTransform={'lowercase'} fontSize={'1rem'}>
            {links.map((link, index) => (
                <li className={(link.active === active && !link.image) ? 'active' : ''} key={index}>
                   <Link aria-label={'home page'} to={link.to} onClick={() => setActive(link.active)}>
                      {link.name && <p style={{paddingBottom: '0.5rem'}}>{link.name}</p>}
                   </Link>
                </li>
            ))}
            <li>
               <Toggler darkMode={darkMode} handleClick={handleClick} />
            </li>
         </Box>
      </Box>
   )
}