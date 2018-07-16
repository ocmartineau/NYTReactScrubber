import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom" 
import TitleBox from "./components/titlebox";
import Panel from "./components/panel/panel";
import SearchBox from './components/searchbox/searchbox';
import './App.css';


const App = () =>

  <div>
    <TitleBox/>

    <Panel heading="Search">
      <SearchBox/>
    </Panel>    




      
   </div>

 
export default App;


