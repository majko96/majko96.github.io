import React from 'react';
import BaseLayout from "./BaseLayout";
import { HashRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import enTranslation from './i18n/en.json';
import skTranslation from './i18n/sk.json';

const initialLanguage = localStorage.getItem('language') || 'en';

i18n.init({
  interpolation: { escapeValue: false },
  lng: initialLanguage,
  resources: {
    en: {
      translation: enTranslation,
    },
    sk: {
      translation: skTranslation,
    },
  },
});

export default function App() {
   return (
      <I18nextProvider i18n={i18n}>
            <HashRouter>
               <BaseLayout appMode={JSON.parse(localStorage.getItem('darkMode')) ?? true}/>
            </HashRouter>
      </I18nextProvider>
   );
}
