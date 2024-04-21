import React from 'react';
import {Box} from "@mui/material";
import Terminal from "../../components/Terminal/Terminal";
import { useTranslation } from 'react-i18next';

export default function Experience(props) {
    const { t, i18n } = useTranslation();

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
                    05.2024 - {t('present')}
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
             justifyContent={'center'} minHeight={'calc(100vh - 185px)'}>
            <Terminal text={getExperienceText()} isDarkMode={props.isDarkMode} pcText={t('cat experience')}/>
        </Box>
    )
}