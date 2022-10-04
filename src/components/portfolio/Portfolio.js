import React from 'react';
import {Box} from "@mui/material";
import PortfolioBlock from "./PortfolioBlock";

const projects = [
    // {
    //     name: 'app.trhovereporty.sk',
    //     url: 'https://app.trhovereporty.sk',
    //     desc: 'spa react - real estate index data',
    //     tech: 'React, Mui',
    //     source: null
    // },
    // {
    //     name: 'smartweby.sk',
    //     url: 'https://smartweby.sk',
    //     desc: 'landing page',
    //     tech: 'Symfony, React, Bootstrap',
    //     source: null
    // },
    // {
    //     name: 'smartweby-cms',
    //     url: 'https://allperfectreality.sk',
    //     desc: 'cms for real estates',
    //     tech: 'Symfony, React, Bootstrap, microservice',
    //     source: null
    // },
    // {
    //     name: 'trhovereporty.sk',
    //     url: 'https://trhovereporty.sk',
    //     desc: 'landing page',
    //     tech: 'React, Mui',
    //     source: null
    // },
    {
        name: 'jarell.sk',
        url: 'https://jarell.sk',
        desc: 'landing page',
        tech: 'PHP, javaScript, Bootstrap, jQuery',
        source: 'https://github.com'
    },
    {
        name: 'moj-dennik.eu',
        url: 'https://moj-dennik.eu',
        desc: 'project to learn PHP and MySQL',
        tech: 'PHP, javaScript, Bootstrap, jQuery, MySQL',
        source: 'https://github.com'
    },
    {
        name: 'Poslouchej radia - LMS',
        url: 'https://github.com/majko96/LMS-Poslouchej-radia',
        desc: 'project to learn basics Perl',
        tech: 'Perl, API requests',
        source: 'https://github.com/majko96/LMS-Poslouchej-radia'
    },
    {
        name: 'Poslouchej radia - Kodi',
        url: 'https://github.com/majko96/LMS-Poslouchej-radia',
        desc: 'project to learn basics Python',
        tech: 'Python, XbmcSwift2',
        source: 'https://github.com/Mebox/plugin.audio.poslouchej.radia'
    },
    {
        name: 'Poslouchej radia - Admin Panel',
        url: 'https://moj-dennik.eu/radia',
        desc: 'admin panel for management radio stations list',
        tech: 'PHP, javaScript, Bootstrap, MySQL, Codeigniter',
        source: 'https://github.com/Mebox/plugin.audio.poslouchej.radia'
    },
    {
        name: 'Covid-19-SK - Android project',
        url: 'https://github.com/majko96/covid-19-sk/releases/download/6.0/app-debug.apk',
        desc: 'project to learn basics of Android development',
        tech: 'Java',
        source: 'https://github.com/majko96/covid-19-sk'
    }
]

export default function Portfolio(props) {

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} mb={'0'}>
            {projects.map((projects, index) => (
                <PortfolioBlock
                    key={index}
                    name={projects.name}
                    url={projects.url}
                    desc={projects.desc}
                    tech={projects.tech}
                    source={projects.source}
                    isDarkMode={props.isDarkMode}
                />
            ))}
        </Box>
    );
};