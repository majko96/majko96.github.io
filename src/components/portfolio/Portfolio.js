import React from 'react';
import {Box} from "@mui/material";
import PortfolioBlock from "./PortfolioBlock";

const projects = [
    {
        name: 'whack-it!',
        url: 'https://whackit.eu',
        desc: 'Personal Laravel project',
        tech: 'Laravel, Tailwind, jQuery, MySQL',
        source: 'https://github.com/majko96/chirper'
    },
    {
        name: 'radiation-map',
        url: 'https://radiation-map.netlify.app',
        desc: 'Simple React app which show actual radiation data',
        tech: 'React, Bootstrap, Vite, Recoil',
        source: 'https://github.com/majko96/shmu-vite'
    },
    {
        name: 'poslouchej-radia-admin-panel',
        url: 'https://radia.moj-dennik.eu',
        desc: 'Admin panel for management radio stations list for my KODI app',
        tech: 'Symfony, React, Bootstrap, MySQL',
        source: null
    },
    {
        name: 'poslouchej-radia-lms-app',
        url: 'https://github.com/majko96/LMS-Poslouchej-radia',
        desc: 'Learn Perl basics',
        tech: 'Perl, API requests',
        source: 'https://github.com/majko96/LMS-Poslouchej-radia'
    },
    {
        name: 'poslouchej-radia-kodi-app',
        url: 'https://github.com/majko96/LMS-Poslouchej-radia',
        desc: 'Learn Python basics',
        tech: 'Python, XbmcSwift2',
        source: 'https://github.com/Mebox/plugin.audio.poslouchej.radia'
    },
    {
        name: 'jarell.sk',
        url: 'https://jarell.sk',
        desc: 'Landing page',
        tech: 'PHP, javaScript, Bootstrap, jQuery',
        source: null
    },
    {
        name: 'moj-dennik.eu',
        url: 'https://moj-dennik.eu',
        desc: 'Learn PHP and MySQL',
        tech: 'PHP, javaScript, Bootstrap, jQuery, MySQL',
        source: null
    },
    {
        name: 'Covid-19-SK-android-app',
        url: 'https://github.com/majko96/covid-19-sk/releases/download/6.0/app-debug.apk',
        desc: 'Learn Android development basics',
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
