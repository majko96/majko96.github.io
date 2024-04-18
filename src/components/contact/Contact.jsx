import React from 'react';
import {Box} from "@mui/material";
import Terminal from "../Terminal/Terminal";

export default function Contact(props) {

    function contactMeText() {
        return <>
                <ul className={'terminal-text'}>
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
            <Terminal text={contactMeText()} isDarkMode={props.isDarkMode} pcText={'cat contact'}/>
        </Box>
    )
}