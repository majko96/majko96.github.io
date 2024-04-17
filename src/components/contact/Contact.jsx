import React from 'react';
import {Box} from "@mui/material";
import Terminal from "../about/Terminal";
import Style from "../about/About.module.scss";


export default function Contact(props) {

    function contactMeText() {
        return <>
            <p><span className={Style.green}>mario@mbpc:~$</span> cat contact</p>
                <ul className={Style.contact}>
                <li>
                    👦 Mario Babinec
                </li>
                <li>
                    🏠 Povazska Bystrica
                </li>
                <li>
                    🇸🇰 Slovakia
                </li>
                <li>
                    <a href="mailto:mr.babinec@gmail.com">📮 ️mr.babinec@gmail.com</a>
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