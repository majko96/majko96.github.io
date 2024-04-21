import React from 'react';
import {Box} from "@mui/material";
import Terminal from "../../components/Terminal/Terminal";
import { useTranslation } from 'react-i18next';

export default function Cv(props) {
    const { t, i18n } = useTranslation();

    function contactMeText() {
        return <>
            <ul className={'terminal-text'}>
                <li>
                    <a href="https://majko96.github.io/babinec-cv.pdf">💾 mario-babinec-cv.pdf</a>
                </li>
            </ul>
        </>;
    }

    return (
        <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
             justifyContent={'center'} minHeight={'calc(100vh - 185px)'}>
            <Terminal text={contactMeText()} isDarkMode={props.isDarkMode} pcText={t('download mario-cv')}/>
        </Box>
    )
}