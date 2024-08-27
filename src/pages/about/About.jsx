import React from 'react';
import Terminal from "../../components/terminal/Terminal";
import {Box} from "@mui/material";
import GitHubCalendar from 'react-github-calendar';
import { useTranslation } from 'react-i18next';


export default function About(props) {
   const { t, i18n } = useTranslation();

   function aboutMeText() {
      return <>
         <p>
         {t('about.about-me')}
         </p>
      </>;
   }

   function skillsText() {
      return <>
         <ul className={'skills'}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SCSS</li>
            <li>PHP</li>
            <li>Symfony</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>jQuery</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Material UI</li>
            <li>Git</li>
            <li>npm</li>
            <li>composer</li>
         </ul>
      </>;
   }

   function miscText() {
      return <>
      <ul className={'terminal-text'}>
            <li>💻 {t('programming')}</li>
            <li>🏔️ {t('hiking')}</li>
            <li>🚴‍♂️ {t('cycling')}</li>
         </ul>
      </>;
   }

   function githubActivity() {
      return <>
         <ul className={'terminal-text'}>
            <li>
            <div className="github-calendar-container">
               <GitHubCalendar 
                  username="majko96"
                  colorScheme={props.isDarkMode ? 'dark' : 'light'}
               />
            </div>
            </li>
         </ul>
      </>;
   }

   return (
      <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
         <Terminal text={aboutMeText()} isDarkMode={props.isDarkMode} pcText={t('cat about-me')}/>
         <Terminal text={skillsText()} isDarkMode={props.isDarkMode} pcText={t('cd skills/tools && ls')}/>
         <Terminal text={miscText()} isDarkMode={props.isDarkMode} pcText={t('cd hobbies && ls')}/>
         <Terminal text={githubActivity()} isDarkMode={props.isDarkMode} pcText={t('github-activity --show')}/>
      </Box>
   )
}
