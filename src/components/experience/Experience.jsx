import React from 'react';
import {Box} from "@mui/material";
import Terminal from "../Terminal/Terminal";

export default function Experience(props) {

    function getExperienceText() {
        return <>
            <ul className={'terminal-text'}>
                <li>
                    04.2021 - 11.2023
                </li>
                <li>
                    United Classifieds s.r.o.
                </li>
                <li>
                    Full-stack developer
                </li>
                <li>
                    PHP, Symfony, TypeScript, React, Redux, Bootstrap, MySQL
                </li>
            </ul>
            <ul className={'terminal-text'}>
                <li>
                    05.2024 - present
                </li>
                <li>
                    ui42 spol. s.r.o.
                </li>
                <li>
                    Full-stack developer
                </li>
                <li>
                    PHP, Laravel, Bootstrap, jQuery
                </li>
            </ul>
        </>;
    }

    return (
        <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
             justifyContent={'center'} minHeight={'calc(100vh - 216px)'}>
            <Terminal text={getExperienceText()} isDarkMode={props.isDarkMode} pcText={'cat experience'}/>
        </Box>
    )
}