import React from 'react';
import BaseLayout from "./components/BaseLayout";
import {HashRouter} from 'react-router-dom'

export default function App() {
   return (
      <div>
         <HashRouter>
            <BaseLayout appMode={JSON.parse(localStorage.getItem('darkMode')) ?? true}/>
         </HashRouter>
      </div>
   );
}
