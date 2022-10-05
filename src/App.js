import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {HashRouter} from 'react-router-dom'

export default function App() {
   return (
      <div>
         <HashRouter>
            <BaseLayout appMode={JSON.parse(localStorage.getItem('darkMode'))}/>
         </HashRouter>
      </div>
   );
}
