import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom" 
import TitleBox from "./components/titlebox";
import SearchBox from './components/searchbox/searchbox';
import ResultsBox from './components/resultsbox/resultsbox';
import Panel from "./components/panel/panel";
import SaveButton from "./components/buttons/button";
import './App.css';




const App = () =>

  <div>
    <TitleBox/>

      <Panel heading="Article Search">
        <SearchBox/>
      </Panel>  

      <Panel heading="Results">
        <ResultsBox/>
      </Panel>

      <Panel>
      </Panel>


     




      
   </div>

 
export default App;


