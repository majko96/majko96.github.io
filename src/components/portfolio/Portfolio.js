import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";

const projects = [
    {
        image: null,
        live: "https://jarell.sk/",
        source: "https://github.com/majko96",
        title: "jarell.sk"
    },
]

export default function Portfolio() {
    // return (
    //     <Box>
    //         <Grid container display={'flex'} justifyContent={'center'}>
    //             {projects.map((project, index) => (
    //                <Grid item xs={12} md={6} key={index}>
    //                    <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
    //                </Grid>
    //             ))}
    //         </Grid>
    //     </Box>
    // );
    return (
        <Box component={'main'} display={'flex'} flexDirection={{xs: 'column', md: 'row'}} alignItems={'center'}
             justifyContent={'center'} minHeight={'calc(100vh - 175px)'}>
            under construction...
        </Box>
    );
};