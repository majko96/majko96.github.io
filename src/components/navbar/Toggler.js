import React from 'react';
import {Box} from "@mui/material";
import './Toggler.scss';

export default function Toggler({darkMode, handleClick}) {
   return (
      <Box sx={{cursor: 'pointer'}} >
         {
            darkMode ?
               <span>
                   <label className="switch">
                    <input type="checkbox" checked={!darkMode} readOnly={true}/>
                    <span onClick={handleClick} className="slider round"></span>
                   </label>
               </span>
               :
               <span>
                   <label className="switch">
                    <input type="checkbox" checked={!darkMode} readOnly={true}/>
                    <span onClick={handleClick} className="slider round"></span>
                   </label>
               </span>
         }
      </Box>
   )
}