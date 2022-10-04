import React from 'react';
import {Box} from "@mui/material";
import Terminal from "../about/Terminal";
import Style from "../about/About.module.scss";


export default function Cv(props) {

    function contactMeText() {
        return <>
            <p><span className={Style.green}>mario@mbpc:~$</span> download mario-cv</p>
            <ul className={Style.contact}>
                <li>
                    <a href="https://majko96.github.io/cv/babinec-cv.pdf">💾 mario-babinec-cv.pdf</a>
                </li>
            </ul>
        </>;
    }

    return (
        <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
             justifyContent={'center'} minHeight={'calc(100vh - 185px)'}>
            <Terminal text={contactMeText()} isDarkMode={props.isDarkMode}/>
        </Box>
    )
}