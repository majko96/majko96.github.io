import React from 'react';
import {Box} from "@mui/material";
import Terminal from "../about/Terminal";
import Style from "../about/About.module.scss";


export default function Experience(props) {

    function getExperienceText() {
        return <>
            <p><span className={Style.green}>mario@mbpc:~$</span> cat experience</p>
            <ul className={Style.contact}>
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
        </>;
    }

    return (
        <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
             justifyContent={'center'} minHeight={'calc(100vh - 185px)'}>
            <Terminal text={getExperienceText()} isDarkMode={props.isDarkMode}/>
        </Box>
    )
}