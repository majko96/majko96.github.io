import React from 'react';
import "./scss/Terminal.scss";
import {Box} from "@mui/material";

const iconClass = "fa fa-circle";

function Terminal(props) {
   const terminalClass = `terminal ${props.isDarkMode ? 'dark' : 'light'}`;

   return (
      <Box component={'section'} className={terminalClass}
           width={{xs: '95%', md: '50%'}} borderRadius={'0.5rem'} mb={'4rem'}>
         <Box sx={{backgroundColor: '#8c8c8c'}} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
              fontSize={'1rem'}>
            <i className={'fa fa-circle red'}/>
            <i className={'fa fa-circle amber'}/>
            <i className={'fa fa-circle green'}/>
         </Box>
         <Box py={{xs: '1rem', md: '2rem'}} px={{xs: '2rem', md: '3rem'}} borderRadius={'0 0 0.5rem 0.5rem'}
              className={props.isDarkMode ? 'dark' : 'light'} fontSize={'1.5rem'} fontFamily={'Courier New, Courier, monospace'}>
               <p><span className={'green'}>mario@pc:~$</span> {props.pcText}</p>
            {props.text}
         </Box>
      </Box>
   );
}

export default Terminal;