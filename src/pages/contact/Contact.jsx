import React from 'react';
import {Box} from "@mui/material";
import Terminal from "../../components/terminal/Terminal";
import { useTranslation } from 'react-i18next';

export default function Contact(props) {
    const { t, i18n } = useTranslation();

    function contactMeText() {
        return <>
                <ul className={'terminal-text'}>
                <li>
                    👦🏻 {t('contact.name')}
                </li>
                <li>
                    🏠 {t('contact.city')}
                </li>
                <li>
                    🇸🇰 {t('contact.country')}
                </li>
                <li>
                    <a href="mailto:mr.babinec@gmail.com">📮 mr.babinec@gmail.com</a>
                </li>
                </ul>
        </>;
    }

    return (
        <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
             justifyContent={'center'} minHeight={'calc(100vh - 185px)'}>
            <Terminal text={contactMeText()} isDarkMode={props.isDarkMode} pcText={t('cat contact')}/>
        </Box>
    )
}