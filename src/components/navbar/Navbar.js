import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box, Button, Drawer, ListItem} from "@mui/material";
import {ReactComponent as Menu} from '../../img/Menu.svg'
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
   paperLight: {
      borderRadius: '30px 30px 0 0',
      background: 'white',
      color: 'black',
      borderTop: '5px solid #cecece'
   },
   paperDark: {
      borderRadius: '30px 30px 0 0',
      background: '#1f1f1f',
      color: 'white',
      borderTop: '5px solid #424242'
   }
});

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

export default function Navbar({darkMode, handleClick}) {
   const styles = useStyles();
   const location = useLocation();
   const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));

   const [state, setState] = React.useState(false);

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
          <Box textAlign={'center'} p={'1rem'}>
             {links.map((link, index) => (
                 <ListItem key={index} style={{display:'flex', justifyContent:'center'}}>
                    <Link to={link.to}>
                       {link.name && <p style={{paddingBottom: '0.5rem', fontSize: '1.3rem' , color: darkMode ? 'white' : '#1f1f1f'}}>{link.name}</p>}
                    </Link>
                 </ListItem>
             ))}
             <ListItem style={{display:'flex', justifyContent:'center'}}>
                <Toggler darkMode={darkMode} handleClick={handleClick}/>
             </ListItem>
          </Box>
       </div>
   );

   return (
      <Box component={'nav'} width={'100%'}>
         <Box className={darkMode ? Style.menuIconColorDark : Style.menuIconColorLight} display={{ xs: "block", lg: "none" }} textAlign={'right'}>
               <Button name={'menu'} onClick={toggleDrawer(true)}><Menu/></Button>
               <Drawer
                   anchor={'bottom'}
                   open={state}
                   onClose={toggleDrawer(false)}
                   classes={{ paper: darkMode ? styles.paperDark : styles.paperLight }}
               >
                  {list()}
               </Drawer>
         </Box>
         <Box component={'ul'} display={{ xs: "none", lg: "flex" }} justifyContent={'center'} alignItems={'center'}
              gap={{xs: '2rem', md: '8rem'}}
              textTransform={'lowercase'} fontSize={'1rem'}>
            {links.map((link, index) => (
                <li className={(link.active === active && !link.image) ? Style.active : ''} key={index}>
                   <Link aria-label={'home page'} to={link.to} onClick={() => setActive(link.active)}>
                      {link.name && <p style={{paddingBottom: '0.5rem'}}>{link.name}</p>}
                      {link.image && <img alt={''} src={link.image} style={{maxWidth: '75px'}}/>}
                   </Link>
                </li>
            ))}
            <li>
               <Toggler darkMode={darkMode} handleClick={handleClick}/>
            </li>
         </Box>
      </Box>
   )
}